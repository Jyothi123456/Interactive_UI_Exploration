// scripts.js
function showImpl(sectionId) { //This function hides/shows the div's based on click.
    var sectionId =sectionId;
    var sectionsToHide = ['intro', 'monoalphabeticCipher', 'checkteachingmaterialMonoalphabeti', 'checkteachingmaterialCaesar', 'caesarCipher', 'checkteachingmaterialMonoalphabetic', 'quizEncryptionMonoalphabetic', 'useencryptionCaesar', 'quizEncryptionCaesar'];
for (var i = 0; i < sectionsToHide.length; i++) {
    if (sectionsToHide[i] !== 'checkteachingmaterialCaesar') {
        document.getElementById(sectionsToHide[i]).style.display = 'none';
    }
}
document.getElementById(sectionId).style.display = 'block';
    }
    function redirect(id){
        location.reload();
    }
    function showMonoImpl(divId) {
        document.getElementById('checkteachingmaterialMonoalphabeti').style.display = 'none';
        document.getElementById('checkteachingmaterialMonoalphabetic').style.display = 'none';
        document.getElementById('quizEncryptionMonoalphabetic').style.display = 'none';
        document.getElementById('checkteachingmaterialCaesar').style.display = 'none';
        document.getElementById(divId).style.display = 'block';
    }
    function showCeaserImpl(divId) {
        document.getElementById('checkteachingmaterialCaesar').style.display = 'none';
        document.getElementById('useencryptionCaesar').style.display = 'none';
        document.getElementById('quizEncryptionCaesar').style.display = 'none';
        document.getElementById(divId).style.display = 'block';
    }
function encrypt() { //This function performs encryption Ceaser Ciphe based on the key value
    var plaintext = document.getElementById("inputText").value.toUpperCase();
    var key = parseInt(document.getElementById("key").value);
    var encrypted = "";
    for (var i = 0; i < plaintext.length; i++) {
        if (plaintext[i].match(/[A-Z]/)) {
            var charCode = plaintext.charCodeAt(i);
            var encryptedCharCode = ((charCode - 65 + key) % 26) + 65;
            encrypted += String.fromCharCode(encryptedCharCode);
        } else {
            encrypted += plaintext[i];
        }
    }
    document.getElementById("result").textContent = encrypted;
    document.getElementById("actionText").textContent = "Text encrypted successfully!";
}

function decrypt() { //This function performs decryption for Ceaser Cipher based on the key value
    var ciphertext = document.getElementById("inputText").value.toUpperCase();
    var key = parseInt(document.getElementById("key").value);
    var decrypted = "";
    for (var i = 0; i < ciphertext.length; i++) {
        if (ciphertext[i].match(/[A-Z]/)) {
            var charCode = ciphertext.charCodeAt(i);
            var decryptedCharCode = ((charCode - 65 - key + 26) % 26) + 65;
            decrypted += String.fromCharCode(decryptedCharCode);
        } else {
            decrypted += ciphertext[i];
        }
    }
    document.getElementById("result").textContent = decrypted;
    document.getElementById("actionText").textContent = "Text decrypted successfully!";
}

function encryptMonoalphabetic() { //This function performs encryption for MonoAlpabectic Cipher based on the key value
    var plaintext = document.getElementById("inputTextMonoalphabetic").value.toUpperCase();
    var key = parseInt(document.getElementById("keyMonoalphabetic").value);

    if (!isValidKey(key)) {
        document.getElementById("resultMonoalphabetic").textContent = "Invalid key. Key must be a number between 1 and 25.";
        return;
    }

    var encrypted = "";

    for (var i = 0; i < plaintext.length; i++) {
        var char = plaintext[i];
        if (char.match(/[A-Z]/)) {
            var encryptedCharCode = ((char.charCodeAt(0) - 65 + key) % 26) + 65;
            encrypted += String.fromCharCode(encryptedCharCode);
        } else {
            encrypted += char;
        }
    }

    document.getElementById("resultMonoalphabetic").textContent = encrypted;
    document.getElementById("actionTextMonoalphabetic").textContent = "Text encrypted successfully!";
}

function decryptMonoalphabetic() { //This function performs decryption for MonoAlpabectic Cipher based on the key value
    var ciphertext = document.getElementById("inputTextMonoalphabetic").value.toUpperCase();
    var key = parseInt(document.getElementById("keyMonoalphabetic").value);

    if (!isValidKey(key)) {
        document.getElementById("resultMonoalphabetic").textContent = "Invalid key. Key must be a number between 1 and 25.";
        return;
    }

    var decrypted = "";

    for (var i = 0; i < ciphertext.length; i++) {
        var char = ciphertext[i];
        if (char.match(/[A-Z]/)) {
            var decryptedCharCode = ((char.charCodeAt(0) - 65 - key + 26) % 26) + 65;
            decrypted += String.fromCharCode(decryptedCharCode);
        } else {
            decrypted += char;
        }
    }

    document.getElementById("resultMonoalphabetic").textContent = decrypted;
    document.getElementById("actionTextMonoalphabetic").textContent = "Text decrypted successfully!";
}

function isValidKey(key) { //Key value should be between 1 to 25.
    return Number.isInteger(key) && key >= 1 && key <= 25;
}