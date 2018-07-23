# FAC14_Week2

Solidifying learnings from the team project of week 2 at Founders and Coders course by doing it on my own.

## The brief
* Pick up someone elses code
* Use test-driven development (TDD) to complete a to-do app
* Use npm and install `tape` as your testing framework and `tap-spec` to make the tape results more colourful 

## 1. The setup
* Created files and copy pasted in the inital code from the exercise files
* Installed testing framework form command line: 
  - Type `npm init -y` to generate an empty `package.json` file
  - Type `npm tape --save -dev`  and  `npm tap-spec --save -dev` to install
  - Change the `"test:"` line in the `package.json` file to use the right framework
  
  ```
  "scripts": {
    "test": "tape *.test.js | tap-spec"
  },
  ```
 * Ensure that the `test.js` file and `logic.js` files are linked
   - At the top of `test.js`: require the logic file `var logic = require('./logic');` and the testing framework `var    test = require('tape');`
   - At the bottom of `logic.js`: `export.module` to make the functions accessible by the `test.js` file  
 
 ## 2. Analysing the given code  
