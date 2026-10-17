function testFunction(object) {
    console.log(`First test value: ${object.testValue1}, and second test value: ${object.testValue2}`); //show the values
}

class Test {
    testValue1 = 0;
    testValue2 = 0;
    
    constructor(testValue1, testValue2) {
        this.testValue1 = testValue1;
        this.testValue2 = testValue2;
    }
}

const testObject = new Test(1, 2);

testFunction(testObject);
