function scanURL() {
  let url = document.getElementById("urlInput").value;
  let box = document.getElementById("urlResult");

  box.style.display = "block";

  if (!url.trim()) {
    box.innerHTML = "<b>Please enter a valid URL.</b>";
    return;
  }

  box.innerHTML = `
    <b>Scanning URL:</b> ${url}
    <br><br>
    <b>Demo Mode:</b> Backend not connected.
  `;
}

function uploadAPK() {
  let file = document.getElementById("apkInput").files[0];
  let box = document.getElementById("apkResult");
  box.style.display = "block";

  if (!file) {
    box.innerHTML = "No APK selected!";
    return;
  }

  box.innerHTML = `
    <b>Uploaded File:</b> ${file.name}
    <br><br>
    <b>Demo Mode:</b> Deep scan unavailable without backend.
  `;
}

function downloadEvidence() {
  let id = document.getElementById("scanIdInput").value;

  if (!id.trim()) {
    alert("Enter a valid Scan ID!");
    return;
  }

  alert("(Demo) Evidence kit would download for Scan ID: " + id);
}
