const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let devices = [];
let connections = {};
let logs = [];

function getClientIP(socket) {
  const ip = socket.handshake.headers["x-forwarded-for"] ||
             socket.handshake.address;
  return ip.replace("::ffff:", "");
}

io.on("connection", socket => {
  const ip = getClientIP(socket);
  const isDashboard = socket.handshake.query.dashboard === "true";

  // RESET BUTTON (dashboard only)
  socket.on("resetDevices", () => {
    if (!isDashboard) return;
    devices = [];
    connections = {};
    logs.push({
      time: new Date().toLocaleTimeString(),
      message: "RESET MANUAL oleh dashboard"
    });
    io.emit("update", { devices, logs });
  });

  // DASHBOARD ONLY
  if (isDashboard) {
    io.emit("update", { devices, logs });
    return;
  }

  // Ignore localhost as device
  if (ip === "127.0.0.1" || ip === "::1") return;

  connections[ip] = (connections[ip] || 0) + 1;

  let device = devices.find(d => d.ip === ip);
  if (!device && devices.length < 3) {
    device = {
      name: "HP-" + (devices.length + 1),
      ip,
      status: "online",
      bandwidth: 0
    };
    devices.push(device);
  }

  device.status = "online";

  logs.push({
    time: new Date().toLocaleTimeString(),
    message: `${device.name} (${ip}) ONLINE`
  });

  io.emit("update", { devices, logs });

  socket.on("disconnect", () => {
    connections[ip]--;
    if (connections[ip] === 0) {
      device.status = "offline";
      device.bandwidth = 0;
      logs.push({
        time: new Date().toLocaleTimeString(),
        message: `${device.name} (${ip}) OFFLINE`
      });
    }
    io.emit("update", { devices, logs });
  });
});

setInterval(() => {
  devices.forEach(d => {
    if (d.status === "online") {
      d.bandwidth = Math.floor(Math.random() * 50) + 5;
    }
  });
  io.emit("update", { devices, logs });
}, 2000);

server.listen(3000, () => console.log("Running http://localhost:3000"));
