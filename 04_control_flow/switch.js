// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("JANUARY")
        break;
    case 2:
        console.log("FEBRUARY")
        break;
    case 3:
        console.log("MARCH")
        break;
    case 4:
        console.log("APRIL")
        break;

    default:
        console.log("default case if nothing matched")
        break;
}


const author = "ray dalio"
switch (author) {
    case "robert":
        console.log("48 LAWS OF POWER")
        break;
    case "ashlee":
        console.log("ELONMUSK")
        break;
    case "ray dalio":
        console.log("PRINCIPLES")
        break;
    case "James Clear":
        console.log("ATOMIC HABITS")
        break;

    default:
        console.log("default case if nothing matched")
        break;
}

switch (author) {
    case "robert":
        console.log("48 LAWS OF POWER")
        break;
    case "ashlee":
        console.log("ELONMUSK")
        break;
    case "ray dalio":
        console.log("PRINCIPLES")
        // break;
        // what if you forgot to add break at the end then it'll run the case matched as well as all the cases after the case match until it founds break keyword.
    case "James Clear":
        console.log("ATOMIC HABITS")
        // break;
    case "Peter Theil":
        console.log("ZERO TO ONE")
        // break;

    default:
        console.log("default case if nothing matched")
        break;
}