//STEP 1. IMPORTS REQURED ARE: NPM INSTALL MOCHA CHAI CHAI-HTTP NYC
//NYC - is for coverage
//STEP 2. CHECK THE PACKAGE.JSON AND UPDATE THE SCRIPTS TO HAVE THE TEST AND COVERAGE SCRIPT
//STEP 3. CREATE A FILE LIKE THIS ONE TO WRITE YOUR TESTS IN. YOU CAN HAVE MULTIPLE FILES BUT PUT THEM WITHIN A TEST FOLDER

//TO RUN TESTS IN THE CMD YOU TYPE: NPM TEST
//TO RUN THE COVERAGE IN THE COMMAND LINE YOU TYPE: NPM RUN COVERAGE
//--------------------------------------------------------------

//This file tests the functions in the math.js file

//Below are the imports needed for testing
const mocha = require("mocha"); //equivalent to JUnit - testing framework
const chai = require("chai"); //assertion library

const maths = require("../routes/math"); //reference to the file we want to test

//test structure should start with:
// mocha.describe("description", () => {})
//the describe refers to a suite/collection of similar tests
//the description should be relevant to what is to be tested

//each individual test is put in a mocha.it("description", () => {})

mocha.describe("Test adding", () => {
  mocha.it("should equal 2", () => {
    chai.expect(2).to.equal(maths.add(1, 1)); //assertion - expected value should equal to the actual value returned
  });
  mocha.it("should equal 4", () => {
    chai.expect(4).to.equal(maths.add(2, 2));
  });
  mocha.it.skip("should equal 10", () => {
    chai.expect(10).to.equal(maths.add(5, 6));
  });
});
