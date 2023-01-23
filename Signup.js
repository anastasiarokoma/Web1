//variables
const ID = document.getElementById("signUsername");
const IDMes = document.getElementById("userMes");

const pass = document.getElementById("signPassword");
const passMes = document.getElementById("passMes");

const name = document.getElementById("signName");
const nameMes = document.getElementById("nameMes");

const ad = document.getElementById("signAdress");
const adMes = document.getElementById("adMes");

const country = document.getElementById("signCountry");
const countryMes = document.getElementById("countryMes");

const zip = document.getElementById("signZip");
const zipMes = document.getElementById("zipMes");

const email = document.getElementById("signEmail");
const emailMes = document.getElementById("emailMes");

const sex = document.getElementById("signSex");
const sexMes = document.getElementById("sexMes");

const language = document.getElementById("signLanguage");
const languageMes = document.getElementById("languageMes");

const about = document.getElementById("signAbout");
const aboutMes = document.getElementById("aboutMes");

//checks all fields
function check() {
    if (checkID() &
        checkPass() &
        checkName() &
        checkAd() &
        checkCountry() &
        checkZip() &
        checkEmail() &
        checkSex() &
        checkLanguage() &
        checkAbout()) {



        const boi = `Signup Successful!\n\nUsername: ${ID.value}\nPassword: ${pass.value}\nName: ${name.value}\nAdress: ${ad.value}\nCountry: ${country.value}\nZIP: ${zip.value}\nEmail: ${email.value}\nSex: ${sex.value}\nLanguage: ${language.value}\nAbout: ${about.value}`;
        alert(boi);
        //window.location.href = "Goals.html";
    }
}

// ID check
function checkID() {
    if (ID.value.length < 5) {
        var re1 = "The ID needs to have length of at least 5!";
        IDMes.innerHTML = re1;
        IDMes.style.color = "#D7263D";
        ID.style.borderColor = "#D7263D";
        ID.style.borderWidth = "2px";
        return false;
    }
    if (ID.value.length >= 12) {
        var re1 = "The ID needs to have length up to 12!";
        IDMes.innerHTML = re1;
        IDMes.style.color = "#D7263D";
        ID.style.borderColor = "#D7263D";
        ID.style.borderWidth = "2px";
        return false;
    }
    // if(ID.value.charAt(0).toUpperCase() != ID.charAt(0)){
    //     re1 = "The first letter has to be capital!";
    //     IDMes.innerHTML = re1;
    //     return;
    // }
    // var nns =  "123456789\.[]{}()<>*+-=!?^$|";
    // if(!ID.value.charAt(ID.length - 1).match(nns)){
    //     re1 = "The last character has to be a number or a special character!";
    //     IDMes.innerHTML = re1;
    //     return;
    // }
    var re1 = "Good!";
    IDMes.innerHTML = re1;
    IDMes.style.color = "#436436";
    ID.style.borderColor = "#436436";
    ID.style.borderWidth = "2px";
    return true;
}

// Password check
function checkPass() {
    // var ul = "QWERTYUIOPASDFGHJKLZXCVBNM";
    // if(!pass.match(ul)){
    //     re2 = "The password needs to also contain uppercase letters!";
    //     passMes.innerHTML = re2;
    //     return;
    // }
    // var ll = "qwertyuiopasdfghjklzxcvbnm";
    // if(!pass.match(ll)){
    //     re2 = "The password needs to also contain lowercase letters!";
    //     passMes.innerHTML = re2;
    //     return;
    // }
    // var sp = "\.[]{}()<>*+-=!?^$|";
    // if(!pass.match(sp)){
    //     re2 = "The password needs to also contain special characters!";
    //     passMes.innerHTML = re2;
    //     return;
    // }
    // var num = "123456789"
    // if(!pass.match(num)){
    //     re2 = "The password needs to also contain numbers!";
    //     passMes.innerHTML = re2;
    //     return;
    // }
    if (pass.value.length < 12) {
        var re2 = "The ID needs to have length of at least 12 characters!";
        passMes.innerHTML = re2;
        passMes.style.color = "#D7263D";
        pass.style.borderColor = "#D7263D";
        pass.style.borderWidth = "2px";
        return false;
    }
    if (pass.value.length < 14) {
        var re2 = "at least 14 characters recommended";
        passMes.innerHTML = re2;
        passMes.style.color = "#FF934F";
        pass.style.borderColor = "#FF934F";
        pass.style.borderWidth = "2px";
        return true;
    }
    var re2 = "Good!";
    passMes.innerHTML = re2;
    passMes.style.color = "#436436";
    pass.style.borderColor = "#436436";
    pass.style.borderWidth = "2px";
    return true;
}

// Name check
function checkName() {
    // var letters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    // for(let i = 0; i< name.length; i++){
    //     if(!name.charAt(i).match(letters)){
    //         re3 = "The name must only contain alphabet characters!";
    //         alert(re3);
    //         return;
    //     }
    // }

    if (name.value == "") {
        var re3 = "Required";
        nameMes.innerHTML = re3;
        nameMes.style.color = "#D7263D";
        name.style.borderColor = "#D7263D";
        name.style.borderWidth = "2px";
        return false;
    }
    var re3 = "Good!";
    nameMes.innerHTML = re3;
    nameMes.style.color = "#436436";
    name.style.borderColor = "#436436";
    name.style.borderWidth = "2px";
    return true;
}


// Address check
function checkAd() {
    var re4 = "Optional";
    adMes.innerHTML = re4;
    return true;
}

//country check
function checkCountry() {
    if (country.value == "") {
        countryMes.innerHTML = "Required";
        countryMes.style.color = "#D7263D";
        country.style.borderColor = "#D7263D";
        country.style.borderWidth = "2px";
        return false;
    }

    var re5 = "Good!";
    countryMes.innerHTML = re5;
    countryMes.style.color = "#436436";
    country.style.borderColor = "#436436";
    country.style.borderWidth = "2px";
    return true;
}

//zip check
function checkZip() {
    if (zip.value.length != 6) {
        zipMes.innerHTML = "Please enter a valid zipcode";
        zipMes.style.color = "#D7263D";
        zip.style.borderColor = "#D7263D";
        zip.style.borderWidth = "2px";
        return false;
    }

    var letters = /[a-zA-Z]/g
    if (!zip.value[4].match(letters) || !zip.value[5].match(letters)) {
        zipMes.innerHTML = "Please enter a valid zipcode";
        zipMes.style.color = "#D7263D";
        zip.style.borderColor = "#D7263D";
        zip.style.borderWidth = "2px";
        return false;
    }
    var numbers = /[0-9]/g
    if (!zip.value[2].match(numbers) || !zip.value[3].match(numbers) || !zip.value[0].match(numbers) || !zip.value[1].match(numbers)) {
        zipMes.innerHTML = "Please enter a valid zipcode";
        zipMes.style.color = "#D7263D";
        zip.style.borderColor = "#D7263D";
        zip.style.borderWidth = "2px";
        return false;
    }

    zipMes.innerHTML = "Good!";
    zipMes.style.color = "#436436";
    zip.style.borderColor = "#436436";
    zip.style.borderWidth = "2px";
    return true;
}

function checkEmail() {
    if (email.value == "") {
        emailMes.innerHTML = "Required";
        emailMes.style.color = "#D7263D";
        email.style.borderColor = "#D7263D";
        email.style.borderWidth = "2px";
        return false;
    }

    emailMes.innerHTML = "Good!";
    emailMes.style.color = "#436436";
    email.style.borderColor = "#436436";
    email.style.borderWidth = "2px";
    return true;
}

function checkSex() {
    if (sex.value == "") {
        sexMes.innerHTML = "Required";
        sexMes.style.color = "#D7263D";
        sex.style.borderColor = "#D7263D";
        sex.style.borderWidth = "2px";
        return false;
    }

    sexMes.innerHTML = "Good!";
    sexMes.style.color = "#436436";
    sex.style.borderColor = "#436436";
    sex.style.borderWidth = "2px";
    return true;
}

function checkLanguage() {
    if (language.value == "") {
        languageMes.innerHTML = "Required";
        languageMes.style.color = "#D7263D";
        language.style.borderColor = "#D7263D";
        language.style.borderWidth = "2px";
        return false;
    }

    languageMes.innerHTML = "Good!";
    languageMes.style.color = "#436436";
    language.style.borderColor = "#436436";
    language.style.borderWidth = "2px";
    return true;
}

function checkAbout() {
    aboutMes.innerHTML = "Optional";
    return true;
}