describe('Palindrome', function() {

    it('should return true if the string is the same forward/backward', function(){
        expect(palindrome('racecar')).toBe(true);
        expect(palindrome('hello')).toBe(false);
    });
});

describe('Dash Insert', function() {
    it('should insert a dash after odd numbers in a number', function() {
        expect(dashInsert(1234)).toBe('1-23-4');
    });
});

describe('Caesar Cipher', function() {
    it('Should move a set of letters the given number of letters within the alphabet', function(){
        expect(caesarCipher('abc', 2)).toBe('cde');
    });
});

describe('Truthy-Falsy', function() {
    var a;
    beforeEach(function() {
      a = 12;
    });

    afterEach(function() {
      var a;
    });

    it('Should return true for an integer and false for a string test', function() {
      expect(a).toBe(12);
      expect(a).not.toBe('12');
      expect(a).toEqual(12);
    });
});
