describe("#filterOutOdds", function () {

    it("should return array without odd numbers", function () {
        expect(filterOutOdds(1, 2, 3)).toEqual([2]);
    });

    it("should return array without odd numbers", function () {
        expect(filterOutOdds(1, 2, 56, 45, 78, 23, 4, 9, 124)).toEqual([2, 56, 78, 4, 124]);
    });
});


describe("#findMin", function () {

    it("should return the smallest value from the arguments", function () {
        expect(findMin(1, 2, 56, 45, 78, 23, 4, 9, 124, 12, 99)).toEqual(1);
    });

    it("should return the smallest value from the arguments", function () {
        expect(findMin(0, 2, 3, 5, -3, 4)).toEqual(-3);
    });

    it("should return the smallest value from the arguments", function () {
        expect(findMin(0, -102)).toEqual(-102);
    });
});


describe("#mergeObjects", function () {
    const testObj1 = {
        one: "Hello",
        two: "World",
        three: "!"
    }
    const testObj2 = {
        four: "This",
        five: "is a",
        six: "test"
    }

    it("should return a merged object from the two argument objects", function () {
        expect(mergeObjects({a:1, b:2}, {c:3, d:4})).toEqual({a:1, b:2, c:3, d:4});
    });

    it("should return a merged object from the two argument objects", function () {
        expect(mergeObjects(testObj1, testObj2)).toEqual({one: "Hello", two: "World", three: "!", four: "This", five: "is a", six: "test"});
    });
});


describe("#doubleAndReturnArgs", function () {
    
    it("should return new array containing the arguement array and other aruments doubled", function () {
        expect(doubleAndReturnArgs([1,2,3],4,4)).toEqual([1,2,3,8,8]);
    });

    it("should return new array containing the arguement array and other aruments doubled", function () {
        expect(doubleAndReturnArgs([1,2,6,73,34],8,8,2,6,7)).toEqual([1,2,6,73,34,16,16,4,12,14]);
    });
});


describe("#removeRandom", function () {
    const testArray = [1,2,3,4,5];
    const testArray2 = [1,2,3,4,7];

    const arrayTest = (arr) => arr.every((item) => testArray.includes(item));

    it("should return new array after removing a random item from the argument array", function () {
        expect(removeRandom(testArray).length ).toEqual(4);
    });

    it("should return true to make sure our array contains the correct items", function () {
        expect(arrayTest(removeRandom(testArray))).toEqual(true);
    });

    it("should return false to test our test function", function () {
        expect(arrayTest(testArray2)).toEqual(false);
    });
});


describe("#extend", function () {
    const testArray = [1,2,3,4,5,6];
    const testArray2 = [7,8,9,10,11,12];

    it("should return new array after removing a random item from the argument array", function () {
        expect(extend(testArray, testArray2)).toEqual([1,2,3,4,5,6,7,8,9,10,11,12]);
    });
});

describe("#addKeyVal", function () {
    const testObj1 = {
        one: "Hello",
        two: "World",
        three: "!"
    }
    const testObj2 = {
        one: "Hello",
        two: "World",
        three: "!",
        new: "value"
    }

    it("should return new array after removing a random item from the argument array", function () {
        expect(addKeyVal(testObj1, "new", "value")).toEqual(testObj2);
    });
});


describe("#removeKey", function () {
    const testObj1 = {
        one: "Hello",
        two: "World",
        three: "!",
        new: "value"
    }
    const testObj2 = {
        one: "Hello",
        two: "World",
        three: "!",
    }

    it("should return object with key argument removed", function () {
        expect(removeKey(testObj1, "new")).toEqual(testObj2);
    });
});


describe("#combine", function () {
    const testObj1 = {
        one: "Hello",
        two: "World",
        three: "!"
    }
    const testObj2 = {
        four: "Hi",
        five: "World",
        six: "again"
    }
    const testObj3 = {
        one: "Hello",
        two: "World",
        three: "!",
        four: "Hi",
        five: "World",
        six: "again"
    }

    it("should return an object that combines two argument objects", function () {
        expect(combine(testObj1, testObj2)).toEqual(testObj3);
    });   
});


describe("#combine", function () {
    const testObj1 = {
        one: "Hello",
        two: "World",
        three: "!",
        four: "testing"
    }
    const testObj2 = {
        one: "Hello",
        two: "World",
        three: "!",
        four: "success"
    }

    it("should return an object with the key, value arguments updated", function () {
        expect(update(testObj1, "four", "success")).toEqual(testObj2);
    });   
});