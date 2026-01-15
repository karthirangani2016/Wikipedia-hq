function login() {
  const code = document.getElementById("code").value;

  if (code === "2016") { // DEV MODE
    alert("Dev Mode Enabled");
  }

  if (code === "2016" || code === "USER") {
    document.getElementById("content").style.display = "block";
    update();
  } else {
    alert("Wrong code");
  }
}

function update() {
  const iframe = document.getElementById("viewer");
  iframe.src = "announcements.html?" + new Date().getTime();
}