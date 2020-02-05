const Person = require('./classes');

let outputData = "";
storeLog = inputs => (outputData += inputs);
console["log"] = jest.fn(storeLog);

test('should say hello', () =>  {
    let person = new Person('Patrick');
    outputData = person.sayHello();
    expect(outputData).toBe('Hello Patrick');
});