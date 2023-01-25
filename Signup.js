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
        checkAbout()
    ) {



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

    var matches = 0;


    //uppercase
    var ul = "QWERTYUIOPASDFGHJKLZXCVBNM";

    for (let j = 0; j < ul.length; j++) {
        if (ID.value.charAt(0) == ul.charAt(j)) {
            matches = 1;
            break;
        }
    }



    if (matches == 0) {
        var re1 = "Username must start with an uppercase letter";
        IDMes.innerHTML = re1;
        IDMes.style.color = "#D7263D";
        ID.style.borderColor = "#D7263D";
        ID.style.borderWidth = "2px";
        return false;
    }

    // for(let i=0;i<ID.value.length;i++){
    //     for(let j=0;j<nns.length;j++){
    //         if(ID.value.charAt(i) == nns.charAt(j)){
    //             matches = 0;
    //             break;
    //         }
    //     }
    // }

    // if (matches == 1) {
    //     var re1 = "MUST CONTAION A DICK AND BALLS";
    //     IDMes.innerHTML = re1;
    //     IDMes.style.color = "#D7263D";
    //     ID.style.borderColor = "#D7263D";
    //     ID.style.borderWidth = "2px";
    //     return false;
    // }

    var nns = "1234567890~!@#$%^&*()_+`-=[]\\{}|;':\",./<>?";

    for (let j = 0; j < nns.length; j++) {
        if (ID.value.charAt(ID.value.length - 1) == nns.charAt(j)) {
            matches = 0;
            break;
        }
    }

    if (matches == 1) {
        var re1 = "Must end in a special character OR number";
        IDMes.innerHTML = re1;
        IDMes.style.color = "#D7263D";
        ID.style.borderColor = "#D7263D";
        ID.style.borderWidth = "2px";
        return false;
    }

    var re1 = "Good!";
    IDMes.innerHTML = re1;
    IDMes.style.color = "#436436";
    ID.style.borderColor = "#436436";
    ID.style.borderWidth = "2px";
    return true;
}

//Password check
function checkPass() {

    if (pass.value.length < 12) {
        var re2 = "The ID needs to have length of at least 12 characters!";
        passMes.innerHTML = re2;
        passMes.style.color = "#D7263D";
        pass.style.borderColor = "#D7263D";
        pass.style.borderWidth = "2px";
        return false;
    }

    var ul = "QWERTYUIOPASDFGHJKLZXCVBNM";
    var matches = 0;
    for (let i = 0; i < pass.value.length; i++) {
        for (let j = 0; j < ul.length; j++) {
            if (pass.value.charAt(i) == ul.charAt(j)) {
                matches = 1;
                break;
            }
        }
    }


    if (matches == 0) {
        var re2 = "Password must contain an uppercase letter";
        passMes.innerHTML = re2;
        passMes.style.color = "#D7263D";
        pass.style.borderColor = "#D7263D";
        pass.style.borderWidth = "2px";
        return false;
    }

    var ll = "qwertyuiopasdfghjklzxcvbnm";
    for (let i = 0; i < pass.value.length; i++) {
        for (let j = 0; j < ll.length; j++) {
            if (pass.value.charAt(0) == ll.charAt(j)) {
                matches = 0;
                break;
            }
        }
    }


    if (matches == 1) {
        var re2 = "Password must contain a lowercase letter";
        passMes.innerHTML = re2;
        passMes.style.color = "#D7263D";
        pass.style.borderColor = "#D7263D";
        pass.style.borderWidth = "2px";
        return false;
    }

    var sp = "1234567890~!@#$%^&*()_+`-=[]\\{}|;':\"";
    for (let i = 0; i < pass.value.length; i++) {
        for (let j = 0; j < sp.length; j++) {
            if (pass.value.charAt(i) == sp.charAt(j)) {
                matches = 1;
                break;
            }
        }
    }


    if (matches == 0) {
        var re2 = "Password must contain a special character";
        passMes.innerHTML = re2;
        passMes.style.color = "#D7263D";
        pass.style.borderColor = "#D7263D";
        pass.style.borderWidth = "2px";
        return false;
    }



    var num = "123456789"
    for (let i = 0; i < pass.value.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (pass.value.charAt(i) == num.charAt(j)) {
                matches = 0;
                break;
            }
        }
    }


    if (matches == 1) {
        var re2 = "Password must contain a number";
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
    if (name.value == "") {
        var re3 = "Required";
        nameMes.innerHTML = re3;
        nameMes.style.color = "#D7263D";
        name.style.borderColor = "#D7263D";
        name.style.borderWidth = "2px";
        return false;
    }

    var ul = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    var check = 0;
    for (let i = 0; i < name.value.length; i++) {
        for (let j = 0; j < ul.length; j++) {
            if (name.value.charAt(i) == ul.charAt(j)) {
                check = 1;
                break;
            } else {
                check = 0;

            }

        }
        if (check == 0) {
            var re2 = "Name must contain only letters";
            nameMes.innerHTML = re2;
            nameMes.style.color = "#D7263D";
            name.style.borderColor = "#D7263D";
            name.style.borderWidth = "2px";
            return false;
        }
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


    var ul = "1234567890";
    var check = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < ul.length; j++) {
            if (zip.value.charAt(i) == ul.charAt(j)) {
                check = 1;
                break;
            } else {
                check = 0;

            }

        }
        if (check == 0) {
            var re2 = "Please enter a valid zipcode";
            zipMes.innerHTML = re2;
            zipMes.style.color = "#D7263D";
            zip.style.borderColor = "#D7263D";
            zip.style.borderWidth = "2px";
            return false;
        }
    }

    var ul = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    for (let i = 4; i < 6; i++) {
        for (let j = 0; j < ul.length; j++) {
            if (zip.value.charAt(i) == ul.charAt(j)) {
                check = 1;
                break;
            } else {
                check = 0;
            }

        }
        if (check == 0) {
            var re2 = "Please enter a valid zipcode";
            zipMes.innerHTML = re2;
            zipMes.style.color = "#D7263D";
            zip.style.borderColor = "#D7263D";
            zip.style.borderWidth = "2px";
            return false;
        }
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

    var matches = 0;
    var position = 0;
    var atSign = "@";
    for (let i = 1; i < email.value.length; i++) {
        if (email.value.charAt(i) == atSign.charAt(0)) {
            matches = 1;
            position = i;
            break;
        }
    }


    if (matches == 0) {
        var re2 = "Please enter a valid email";
        emailMes.innerHTML = re2;
        emailMes.style.color = "#D7263D";
        email.style.borderColor = "#D7263D";
        email.style.borderWidth = "2px";
        return false;
    }

    var position2 = 0;
    var dot = ".";
    for (let i = position + 1; i < email.value.length; i++) {
        if (email.value.charAt(i) == dot.charAt(0)) {
            position2 = i;
            matches = 0;
            break;
        }
    }


    if (matches == 1) {
        var re2 = "Please enter a valid email";
        emailMes.innerHTML = re2;
        emailMes.style.color = "#D7263D";
        email.style.borderColor = "#D7263D";
        email.style.borderWidth = "2px";
        return false;
    }

    if (!(email.value.length == position2 + 1)) {
        matches = 1;
    }


    if (matches == 0) {
        var re2 = "Please enter a valid email";
        emailMes.innerHTML = re2;
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