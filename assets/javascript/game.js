var chewey = {
    hp: 120,
    ap: 15,
    cap: 10
}

var r2d2 = {
    hp: 100,
    ap: 10,
    cap: 20,
}

var luke = {
    hp: 90,
    ap: 20,
    cap: 25,
}

var darthvader = {
    hp: 125,
    ap: 15,
    cap: 10,
}

var bobafett = {
    hp: 100,
    ap: 15,
    cap: 25
}

var kyloren = {
    hp: 70,
    ap: 30,
    cap: 30,
}
var selectedhero = "";
var actualhero = {};
var selectedvillan = "";
var actualvillan = {};

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

}

//Select a villan
function selectvillan(selectedvillan) {
    if (selectedvillan == "darthvader") {
        actualvillan = darthvader;
    } else {
        if (selectedvillan == "bobafett") {
            actualvillan = bobafett;
        } else {
            if (selectedvillan == "kyloren") {
                actualvillan = kyloren
            }
        }
    }

}

//Start the match 

//Attack Function
function attack(actualhero, actualvillan) {
    actualvillan.hp = actualvillan.hp - actualhero.ap;
    var journaladd = document.getElementById("lightjournal");
    var 
    journaladd.appendChild(document.createElement("p"));
}

//CounterAttack Function

//HP Consolidation Function

//Push to HP Bar

//Character Death

