export function copyToClipboard() {
      const ogUrlElement = document.getElementById("ogUrl");
      const tempInput = document.createElement("input");
      tempInput.value = ogUrlElement.textContent.trim();
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert("URL copied to clipboard!");
    }