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

function encrypt() {
  let text = document.getElementById("text").value;
  let TitleMessage = document.getElementById("TitleMessage");
  let paragraph = document.createElement("paragraph");
  let encryptedError = document.getElementById("encryptedError");

  let encryptedText = text
                          .replace(/e/gi, "enter")  //replace == obtener una letra y remplazarla
                          .replace(/i/gi, "imes")
                          .replace(/a/gi, "ai")
                          .replace(/o/gi, "ober")
                          .replace(/u/gi, "ufat");

  if (text.length != 0) {
      document.getElementById("text").value = encryptedText;
      TitleMessage.textContent = "Successfully encrypted text";
      paragraph.textContent = "";
      encryptedError.src = "./img/greatEncrypted.PNG";
  } else {
      encryptedError.src = "./img/encryptedError.PNG";
      TitleMessage.textContent = "No message found";
      paragraph.textContent = "Enter the text you want to encrypt or decrypt";
      swal ( "Oops" ,  "Something went wrong!" ,  "error" )
  }
}

function decrypt() {
    let text = document.getElementById("text").value;
    let TitleMessage = document.getElementById("TitleMessage");
    let paragraph = document.getElementById("paragraph");
    let encryptedError = document.getElementById("encryptedError");
  
    let encryptedText = text
                            .replace(/enter/gi, "e")
                            .replace(/imes/gi, "i")
                            .replace(/ai/gi, "a")
                            .replace(/ober/gi, "o")
                            .replace(/ufat/gi, "u");
    
      if (text.length != 0) {
        encryptedError.src = "./img/greatEncrypted.png"; // cambiar la imagen a una imagen diferente
        document.getElementById("text").value = encryptedText;
        TitleMessage.textContent = "Successfully decrypt text";
        paragraph.textContent = "";
        encryptedError.src = "./img/greatDecrypted.png";
      } else {
        encryptedError.src = "./img/encryptedError.png";
        TitleMessage.textContent = "No message found";
        paragraph.textContent = "Enter the text you want to encrypt or decrypt";
        swal("Oops! Something went wrong","Enter text here");
      }
  }
