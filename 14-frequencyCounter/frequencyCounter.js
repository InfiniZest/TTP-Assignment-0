function frequencyCounter(word) {
    let freqCount = {};
    for(let i = 0; i<word.length; i++) {
        if(word.charAt(i) in freqCount)
            freqCount[word.charAt(i)] = freqCount[word.charAt(i)]+1
        else {
            freqCount[word.charAt(i)] = 1;
        }
    }
    return freqCount;
}

// Do not edit this line;
module.exports = frequencyCounter;
