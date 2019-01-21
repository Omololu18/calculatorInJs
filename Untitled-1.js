// this is a calculator
function areaOfRectangle(length, breath) {
    return length * breath;
}

console.log(areaOfRectangle(12.3, 5.6))

// the volume of a cylinder

function volumeOfCylinder(radius, height, decimalPlace) {
    const pi = 3.142;
    const volume = pi * (radius * radius * height);
    return volume.toFixed(decimalPlace);
}

console.log(volumeOfCylinder(3.5, 4.3, 2))

// the area of a parallelogram

function areaOfParallelogram(base, height, decimalPlace) {
    const area = base * height;
    return area.toFixed(decimalPlace);
}

console.log(areaOfParallelogram(6.06, 8.03, 2))


