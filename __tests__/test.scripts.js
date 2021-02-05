import mercuryAge from '../src/js/scripts.js';

describe('mercuryAge',() =>{
  let returnedArray= []
  beforeEach(() =>{
    returnedArray=[0,0,0,0,0];
  })
  test('should return an age', () =>{
    expect(mercuryAge(returnedArray[1]).toEqual(0))
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