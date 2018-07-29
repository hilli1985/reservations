var reservations = {
    "Bob": { claimed: false },
    "Ted": { claimed: true }
}

var reservationsToLower = {};

var name = prompt('Please enter the name for your reservation');
var nameToLower;

//individual exersice 1

//individual exersice 2

var claimReservation = function() {
    let i;
    // create dictionary with the same keys in lowercase
    toLower();
    nameToLower = name.toLowerCase();
    if (reservationsToLower[nameToLower] === undefined) {
        alert(name + " - your reservation was added");
        reservations[name] = { claimed: true };
        reservationsToLower[nameToLower] = { claimed: true };

    } else if (!reservationsToLower[nameToLower].claimed) {
        alert("Welcome " + name);
    } else if (reservationsToLower[nameToLower].claimed) {
        alert("hi your reservation was already claimed");
    }
}

var toLower = function() {
    for (let i in reservations) {
        let iLower = i.toLowerCase();
        console.log(i);
        reservationsToLower[iLower] = reservations[i];
    }

}
claimReservation();
console.log(reservationsToLower);
console.log(reservations);