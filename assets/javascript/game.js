var chewey = {
    name: "Chewey",
    hp: 120,
    ap: 5,
    cap: 10,
    imgid: "chewey",
}

var r2d2 = {
    name: "R2D2",
    hp: 100,
    ap: 6,
    cap: 20,
    imgid: "r2d2",
}

var luke = {
    name: "Luke Skywalker",
    hp: 90,
    ap: 7,
    cap: 25,
    imgid: "luke",
}

var darthvader = {
    name: "Darth Vader",
    hp: 125,
    ap: 15,
    cap: 5,
    imgid: "darthvader",
}

var bobafett = {
    name: "Boba Fett",
    hp: 100,
    ap: 15,
    cap: 10,
    imgid: "bobafett",
}

var kyloren = {
    name: "Kylo Ren",
    hp: 70,
    ap: 30,
    cap: 15,
    imgid: "kyloren",
}
var selectedhero = "";
var actualhero = {};
var selectedvillain = "";
var actualvillain = {};
var herohpbarselect = document.getElementById("herohpbar");
var villainhpbarselect = document.getElementById("villainhpbar");




//RandomInteger Function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (1 - min) ) + min;
}

//Select a hero
function selecthero(selectedhero) {
    if (selectedhero == "chewey") {
        actualhero = chewey;
    } else {
        if (selectedhero == "r2d2") {
            actualhero = r2d2;
        } else {
            if (selectedhero == "luke") {
                actualhero = luke
            }
        }
    }
    herohpbarselect.setAttribute("aria-valuemax", actualhero.hp);
    herohpbarselect.setAttribute("aria-valuenow", actualhero.hp);
    herohpbarselect.innerHTML = actualhero.hp;
}

//Select a villain
function selectvillain(selectedvillain) {
    if (selectedvillain == "darthvader") {
        actualvillain = darthvader;
    } else {
        if (selectedvillain == "bobafett") {
            actualvillain = bobafett;
        } else {
            if (selectedvillain == "kyloren") {
                actualvillain = kyloren
            }
        }
    }
    villainhpbarselect.setAttribute("aria-valuenow", actualvillain.hp);
    villainhpbarselect.innerHTML = actualvillain.hp;
}

//Start the match 
// function attackbutton() {
//     selecthero();
//     selectvillain();
//     attack();
//     counterattack();
// }

//Attack Function
function attack(actualhero, actualvillain) {
    actualvillain.hp = actualvillain.hp - actualhero.ap;
    actualhero.hp = actualhero.hp - actualvillain.cap;
    var journaladd = document.getElementById("lightjournal");
    var createline = document.createElement("p");
    createline.id = "createline";
    createline.innerHTML = actualhero.name + " attacked " + actualvillain.name + " for " +
        actualhero.ap  + " damage!";
    journaladd.appendChild(createline);
    document.getElementById("villainhpbar").setAttribute("aria-valuenow", actualvillain.hp);
    document.getElementById("villainhpbar").innerHTML = actualvillain.hp;
    actualhero.ap = actualhero.ap + actualhero.ap;
    console.log(actualhero.hp, actualhero.ap)
    if (actualvillain.hp <= 0 || actualhero.hp <= 0) {
        herodeath(actualhero);
        villaindeath(actualvillain);
    }
}

//CounterAttack Function
function counterattack(actualhero, actualvillain) {
    var journaladdtwo = document.getElementById("darkjournal");
    var createlinetwo = document.createElement("p");
    createlinetwo.id = "createlinetwo";
    createlinetwo.innerHTML = actualvillain.name + " counterattacks " + actualhero.name + " for " + 
    actualvillain.cap + " damage!";
    journaladdtwo.appendChild(createlinetwo);
    document.getElementById("herohpbar").setAttribute("aria-valuenow", actualhero.hp);
    document.getElementById("herohpbar").innerHTML = actualhero.hp;
    }


//Character Death
function herodeath(actualhero) {
        if (actualhero.hp <= 0) {
        var herodeath = document.createElement("p");
        var journaladd = document.getElementById("lightjournal");
        herodeath.id = "herodeath";
        herodeath.innerHTML = actualhero.name + " has died!";
        journaladd.appendChild(herodeath);
        herochangeopacity(actualhero);
        }
    }

function villaindeath(actualvillain) {
    if (actualvillain.hp <= 0) {
    var villaindeath = document.createElement("p");
    var journaladdtwo = document.getElementById("darkjournal");
    villaindeath.id = "villaindeath";
    villaindeath.innerHTML = actualvillain.name + " has died!";
    journaladdtwo.appendChild(villaindeath);
    villainchangeopacity(actualvillain);
    }
}

function newselection() {
    var myNode = document.getElementById("lightjournal");
    var darknode = document.getElementById("darkjournal")
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
    while (darknode.firstChild) {
        darknode.removeChild(darknode.firstChild);
    }
}

function herochangeopacity(actualhero) {
    var heroimage = document.getElementById(actualhero.imgid);
    heroimage.setAttribute("style", "opacity: 0.3");
}

function villainchangeopacity(actualvillain) {
    var villainimage = document.getElementById(actualvillain.imgid);
    villainimage.setAttribute("style", "opacity: 0.3");
}

function shownewenemies() {
    

}