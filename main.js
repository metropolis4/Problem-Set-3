// Problem 1.
var palindrome = function(string) {
    string = _.toArray(string.toLowerCase());
    var reverseString = _.chain(string)
                        .reduceRight(function(a,b){return a.concat(b);}, [])
                        .value();
    return string.toString() === reverseString.toString();
};

// Problem 2.
var dashInsert = function(num) {
    var oddNum = _.chain(num.toString())
        .toArray()
        .map( function(num) { if(num % 2 !== 0){ num = num + '-';} return num} )
        .value();
    return oddNum.toString().replace(/,/g, '');
};

// BONUS
var caesarCipher = function(string, num) {
    var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var stringLetters = _.map(string, function(a) {return _.indexOf(alpha,a);});
    stringLetters = _.map(stringLetters, function(num) {return num + 2;});
    stringLetters = _.map(stringLetters, function(num) {return alpha[num];});
    return stringLetters.toString().replace(/,/g , '');
};