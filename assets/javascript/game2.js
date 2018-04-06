function startgame() {
    selecthero()
    selectvillan()
    attack()
    counterattack()
    villaindeath()
    restartgame()
    selectnewvillan()
    loss()
    win()
}

// Selects the hero you wish to start the game with. 
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

// Selects the villan you wish to fight first. 
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

// Attack Function enabled by button press. 
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
