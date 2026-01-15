const BASE = "https://raw.githubusercontent.com/karthirangani2016/Wikipedia-hq/main/data/";
const ANNOUNCEMENTS = "announcements.txt";
const VERSION = "version.txt";

const announcementsDiv = document.getElementById("announcements");
const checkBtn = document.getElementById("checkUpdate");

async function fetchText(file) {
  const res = await fetch(BASE + file);
  if (!res.ok) throw new Error("File not found");
  return await res.text();
}

async function loadAnnouncements() {
  try {
    const ann = await fetchText(ANNOUNCEMENTS);
    announcementsDiv.innerText = ann;
  } catch (err) {
    announcementsDiv.innerText = "Error loading announcements";
    console.error(err);
  }
}

async function checkForUpdates() {
  try {
    const remoteVersion = await fetchText(VERSION);
    const localVersion = localStorage.getItem("wikiVersion") || "0";

    if (remoteVersion !== localVersion) {
      await loadAnnouncements();
      localStorage.setItem("wikiVersion", remoteVersion);
      alert("Wikipedia HQ Updated!");
    } else {
      alert("Already up to date.");
    }
  } catch (err) {
    console.error(err);
    alert("Failed to check updates");
  }
}

checkBtn.addEventListener("click", checkForUpdates);
loadAnnouncements();