function setUnionOfAnyAmountOfSets(...args) {
    let union = new Set();
    for(let set of args) {
        for(let element of set) {
            union.add(element);
        }
    }
    return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
