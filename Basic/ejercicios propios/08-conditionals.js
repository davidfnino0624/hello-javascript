// if

let age = 24;

if (age >= 18){
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// if else

let age2 = 63;

if (age2 < 18){
    console.log("you are still a kid");
} else if (age2 >= 18 && age2 < 28){
    console.log("You are a young adult");
} else if (age2 >= 28 && age2 < 60){
    console.log("You are an adult");
}else {
    console.log("You should be retired");
}

// switch
/*let age3 = 24;
switch (age3) {
    case 18:
        console.log("You are 18");
        break;
    case 24:
        console.log("You are 24");
        break;
    case 30:
        console.log("You are 30");
        break;
    default:
        console.log("You are not 18, 24 or 30");
}*/

let day = 7
let dayName;

switch (day) {
    case 0:
        dayName = 'sunday';
        break;
    case 1:
        dayName = 'monday';
        break;
    case 2:
        dayName = 'tuesday';
        break;
    case 3:
        dayName = 'wednesday';
        break;
    case 4:
        dayName = 'thursday';
        break;
    case 5:
        dayName = 'friday';
        break;
    case 6:
        dayName = 'saturday';
        break;
    default:
        console.log("Invalid day");
}
if (dayName !== undefined && dayName !== null) {
    console.log("The day is " + dayName);
}


// ternary operator
let age4 = 18;

let isAdult = (age4 >= 18) ? "You are an adult" : "You are a minor";
console.log(isAdult);

// nested if
let age5 = 24;
if (age5 >= 18){
    console.log("You are an adult");
    if (age5 >= 60){
        console.log("You should be retired");
    } else {
        console.log("You are not retired");
    }
}