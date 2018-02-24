var chewey = {
    name: "Chewey",
    hp: 120,
    ap: 15,
    cap: 10
}

var r2d2 = {
    name: "R2D2",
    hp: 100,
    ap: 10,
    cap: 20,
}

var luke = {
    name: "Luke Skywalker",
    hp: 90,
    ap: 20,
    cap: 25,
}

var darthvader = {
    name: "Darth Vader",
    hp: 125,
    ap: 15,
    cap: 10,
}

var bobafett = {
    name: "Boba Fett",
    hp: 100,
    ap: 15,
    cap: 25
}

var kyloren = {
    name: "Kylo Ren",
    hp: 70,
    ap: 30,
    cap: 30,
}
var selectedhero = "";
var actualhero = {};
var selectedvillain = "";
var actualvillain = {};
var herohpbarselect = document.getElementById("herohpbar");
var villainhpbarselect = document.getElementById("villainhpbar");

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
    herohpbarselect.setAttribute("herohpbar", actualhero.hp);
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
    villainhpbarselect.setAttribute("villainhpbar", actualvillain.hp);
    villainhpbarselect.innerHTML = actualvillain.hp;
}

//Start the match 

//Attack Function
function attack(actualhero, actualvillain) {
    actualvillain.hp = actualvillain.hp - actualhero.ap;
    var journaladd = document.getElementById("lightjournal");
    var createline = document.createElement("p");
    createline.id = "createline";
    createline.innerHTML = actualhero.name + " attacked " + actualvillain.name + " for " +
        actualhero.ap + " damage!";
    journaladd.appendChild(createline);
    document.getElementById("villainhpbar").setAttribute(villainhpbar, actualvillain.hp)
}

//CounterAttack Function
function counterattack(actualhero, actualvillain) {
    
}

//HP Consolidation Function

//Push to HP Bar

//Character Death

