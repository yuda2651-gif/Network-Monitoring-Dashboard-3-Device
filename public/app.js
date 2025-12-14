const params = new URLSearchParams(window.location.search);
const isDashboard = params.get("dashboard") === "true";

const socket = io({
  query: { dashboard: isDashboard }
});

const deviceCards = document.getElementById("deviceCards");
const logList = document.getElementById("logList");
const resetBtn = document.getElementById("resetBtn");
const ctx = document.getElementById("chart");

if (isDashboard) {
  resetBtn.classList.remove("hidden");
}

let chart = new Chart(ctx, {
  type: "line",
  data: { labels: [], datasets: [] },
  options: { animation: false }
});

resetBtn.onclick = () => {
  if (confirm("Reset semua device?")) {
    socket.emit("resetDevices");
  }
};

socket.on("update", data => {
  deviceCards.innerHTML = "";
  logList.innerHTML = "";

  data.devices.forEach(d => {
    deviceCards.innerHTML += `
      <div class="bg-slate-800 p-4 rounded-xl">
        <h3 class="font-bold">${d.name}</h3>
        <p class="text-xs">IP: ${d.ip}</p>
        <span class="text-sm ${d.status==="online"?"text-green-400":"text-red-400"}">
          ${d.status.toUpperCase()}
        </span>
        <p class="text-xs mt-2">${d.bandwidth} Mbps</p>
      </div>`;
  });

  data.logs.slice(-6).forEach(l => {
    logList.innerHTML += `<li>[${l.time}] ${l.message}</li>`;
  });

  chart.data.labels.push(new Date().toLocaleTimeString());
  chart.data.datasets = data.devices.map((d, i) => ({
    label: d.name,
    data: (chart.data.datasets[i]?.data || []).concat(d.bandwidth),
    tension: 0.3
  }));

  if (chart.data.labels.length > 20) {
    chart.data.labels.shift();
    chart.data.datasets.forEach(ds => ds.data.shift());
  }

  chart.update();
});
