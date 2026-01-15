function unlock() {
  const code = document.getElementById("code").value;
  if (code === "2016") {
    document.getElementById("panel").style.display = "block";
  } else {
    alert("Access Denied");
  }
}

function publish() {
  alert(
`DEV NOTE:
You must now:
1. Copy title + content
2. Paste into data/announcements.txt
3. Increase version.txt by 1
4. Commit & push to GitHub

This is intentional security.`
  );
}