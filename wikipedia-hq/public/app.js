const BASE =
  "https://raw.githubusercontent.com/karthirangani2016/Wikipedia-hq/main/data/";

async function checkUpdates() {
  const status = document.getElementById("status");

  const remoteVersion = await fetch(BASE + "version.txt").then(r => r.text());
  const localVersion = localStorage.getItem("version");

  if (localVersion === remoteVersion.trim()) {
    status.innerText = "✅ Your software is up to date";
    return;
  }

  const text = await fetch(BASE + "announcements.txt").then(r => r.text());
  const lines = text.split("\n");

  document.getElementById("title").innerText = lines[0];
  document.getElementById("content").innerText =
    lines.slice(1).join("\n");

  localStorage.setItem("version", remoteVersion.trim());
  status.innerText = "🔄 Updated successfully";
}