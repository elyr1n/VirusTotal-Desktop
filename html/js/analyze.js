const button = document.getElementById("virustotal_analyze");
const input = document.getElementById("virustotal_file_id");
const errorBox = document.getElementById("error_message");

button.addEventListener("click", async () => {
  const fileId = input.value.trim();

  errorBox.textContent = "";

  if (!fileId) {
    return (errorBox.textContent = "Введите File ID или хэш файла!");
  }

  if (fileId.length !== 64) {
    return (errorBox.textContent =
      "Хэш должен быть SHA256 и состоять из 64 символов.");
  }

  try {
    const data = await window.electron.invoke("virustotal-analyze", fileId);

    if (data.error) {
      return (errorBox.textContent = "Ошибка: " + data.error);
    }

    const file_name = data.data.attributes.names[0] || "-";
    const file_size = (data.data.attributes.size / 1024 / 1024).toFixed(2);
    const malicious = data.data.attributes.last_analysis_stats.malicious;
    const undetected = data.data.attributes.last_analysis_stats.undetected;

    document.getElementById("file_name").textContent = file_name;
    document.getElementById("file_size").textContent = `${file_size} MB`;
    document.getElementById("result_scan").textContent =
      `${malicious} / ${malicious + undetected}`;
  } catch (err) {
    errorBox.textContent = "Ошибка при запросе к API: " + err.message;
  }
});
