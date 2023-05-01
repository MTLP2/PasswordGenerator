function generatepasword(){
    let lenght = document.getElementById("lenght").value;
    let character = "abcdefhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (document.getElementById("include-numbers").checked){
        character += "0123456789";
    }
    if (document.getElementById('include-symbols').checked){
        character += "?,;:=%*$^¨`£@#&àé!)°";
    }

    let pasword = ""

    for (let i = 0; i < lenght; i++) {
        pasword += character.charAt(Math.floor(Math.random()* character.length));

    }
    document.getElementById("pasword").textContent = pasword;
}