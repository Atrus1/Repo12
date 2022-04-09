 //
    function rangeOfNumbers(startN, endN) {
        if(startN - endN == 0){
        return [startN]
    }  else if (startN > endN) {
    var lessOrEqualEndNum = "The starting number will always be less than or equal to the ending number";
    return lessOrEqualEndNum;

        } else {
            var integerArray = rangeOfNumbers (startN, endN -1);
            integerArray.push(endN);
            return integerArray;
        }
    }

//
    console.log(rangeOfNumbers(1, 7));
    console.log(rangeOfNumbers(3, 10));
    console.log(rangeOfNumbers(5, 5));
    console.log(rangeOfNumbers(7, 5));
    module.exports = rangeOfNumbers;