// DarkMode and LightMode

function toggleMode() {
  const modeIcon = document.getElementById("mode-icon");
  const body = document.querySelector("body");
  if (modeIcon.textContent === "☾") {
    modeIcon.textContent = "☼";
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    modeIcon.textContent = "☾";
    body.classList.remove("dark");
    body.classList.add("light");
  }
}


function encryptor() {
    let text = document.getElementById('text').value;
    let messageTitle = document.getElementById('messageTitle');
    let paragraph = document.createElement('pparagraph');
    let greatEncrypted = document.createElement('greatEncrypted');

    let encryptedText = text
                            .replace(/e/gi, "enter")  //replace == obtener una letra y remplazarla
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");

    if (text.length != 0) {
        document.getElementById('text').value = encryptedText;
        messageTitle.textContent = 'Successfully encrypted text';
        paragraph.textContent = '';
        greatEncrypted.src = './img/greatEncrypted.jpg';
    } else {
        greatEncrypted.src = './img/greatEncrypted.jpg';
        messageTitle.textContent = 'No message found';
        paragraph.textContent = 'Enter the text you want to encrypt or decrypt';
        alert('Enter a text');
    }
}
