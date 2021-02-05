import mercuryAge from '../src/js/scripts.js';

describe('mercuryAge',() =>{
  let returnedArray= []
  beforeEach(() =>{
    returnedArray=[10,9,8,7,6];
  })
  test('should return an age', () =>{
    expect(mercuryAge(returnedArray)).toEqual([10,9,8,7,6])
  });
});
// Person Class

// const { TestScheduler } = require("jest");

// Methods to create and test:
// mercuryAge
// mercuryDeath
// venusAge
// venusDeath
// marsAge
// marsDeath
// jupiterAge
// jupiterDeath

// Here We GO: