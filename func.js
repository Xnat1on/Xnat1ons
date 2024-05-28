function inchesToCm(inches) {
    const cmPerInch = 2.54; // how much cm is one inch
    let cm = inches * cmPerInch; // makes inches to cms
    console.log(`${inches} inches is equal to ${cm} centimeters.`);
}

let inches = 9; // here you put how many inches you want to transfer to cm
inchesToCm(inches);
