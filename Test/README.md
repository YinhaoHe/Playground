# Testing

> Test on the examples from the problem statement. Then make a few other small tests, solve them manually and check that your program outputs the correct answer. Generate a big input and launch your program to check that it works fast enough and doesn't consume too much memory. Test for corner cases: smallest allowed values and largest allowed values of all input parameters, equal numbers in the input, very long strings, etc. Then make a stress test. After all these tests passed, submit the solution.

## Type of Tests

- Unit Test: Tests a unit of an application **without** its external dependencies
  - Easy to write/low confidence
- Integeration Test: Tests the application **with** its external dependencies
  - Slower to run/higher confidence since tested with db/other dependencies
- End to End Test: Drives an application throught its UI - e.g.: a tool **Selenium**
  - Super slow/ez to break due to any change at UI

Favour unit tests to e2e tests

Cover unit test gaps with integration tests

Use end-to-end tests sparingly

## Tooling

- Jasmine
- Mocha with plugin: Chai, Sinon
- **Jest** - my best dude here

## Writing Unit Tests

Number of unit tests should cover all logic paths. For example, if the code has three logic paths, unit tests should have three cases to cover them all.



