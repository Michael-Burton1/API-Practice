import { TestScheduler } from 'jest';
import mercuryAge from '../src/js/scripts.js';
import mercuryOutput from '../src/js/scripts.js';
import inputAge from '../src/js/scripts.js';



describe('mercuryAge',() =>{
  // let returnedArray= []
  beforeEach(() =>{
    
    let inputAge = 1
    // returnedArray=[10,9,8,7,6];
  });
  // test('should return an age', () =>{
  //   expect(mercuryAge(returnedArray)).toEqual([10,9,8,7,6])
  // });
  test('should take inputAge and divide by mercuryMulitplier', () =>{
    expect(mercuryAge()).toEqual(4)
  });
});

describe('venusAge',() =>{
  beforeEach(() =>{
    let inputAGE =1
  });
  test('should take inputAge and divide by VenusMultiplyer', () =>{
    expect(Math.round(venusAge() * 10 /10)).toEqual(1.6)
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