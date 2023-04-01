//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers,name){
    function checkName(name2){
        const nameBig = name.toUpperCase();
        const nameBig2 = name2.toUpperCase();
        if (nameBig2 == nameBig){
            return name;
        };
    }
    return drivers.filter(checkName);
}

function fuzzyMatch(drivers,name){
    function checkName(name2){
        if(name2.slice(0,2)==name.slice(0,2)){
            return name;
        }
    }
    return drivers.filter(checkName);
}

function matchName(drivers,nameString){
    function checkName(name2){
        if (name2.name == nameString){
            return name2;
        }
    }
    return drivers.filter(checkName);
}