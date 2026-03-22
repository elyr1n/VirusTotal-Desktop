const button_return = document.getElementById("return");

button_return.addEventListener("click", async () => {
  window.electron.send("open-page", "virustotal");
});
