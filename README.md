# FAC14_Week2

A project to solidify the learnings from the team project in week 2 at the Founders and Coders course by doing it on my own.

## The brief
* Pick up someone elses code
* Use test-driven development (TDD) to complete a to-do app
* Use npm and install `tape` as your testing framework and `tap-spec` to make the tape results more colourful 

## 1. The setup
* Created files and copy pasted in the inital code from the exercise files
* Installed testing framework from the command line: 
  - Type `npm init -y` to generate an empty `package.json` file
  - Type `npm tape --save -dev`  and  `npm tap-spec --save -dev` to install them as dependencies only on your computer
  - Change the `"test:"` line in the `package.json` file to use the right framework
  
  ```
  "scripts": {
    "test": "tape *.test.js | tap-spec"
  },
  ```
  
 * Ensure that the `test.js` file and `logic.js` files are linked
   - At the top of `test.js`: require the logic file `var logic = require('./logic');` and the testing framework `var test = require('tape');`
   - At the bottom of `logic.js`: `export.module` to make the functions accessible by the `test.js` file  
 
## 2. Analysing the given code  
The given javascript code has been modularised into three files: 
* **dom.js** - containg the javascript required to maipulate the DOM
* **logic.js** - contains the actual functionality of adding and removing items to your to-do app
* **test.js** - for testing the code in the logic file

### dom.js 
The `dom.js` file contains three variables holding a couple of functions, all wrapped in an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE): 
* **var createToDoNode** = controlling the creation of each to-do-element and its content
* **var update** = updates the app to include your latest to-do-items 
* **var renderState** = creates the `<ul>` element holding your to-do-list and appends it to the DOM

### logic.js
The `logic.js` file contains one object named `var todoFunctions` holding multiple functions: 
* **generateId:** which adds an ID number to each to-do-element (also an IIFE)
* **cloneArrayOfObjects:** which parses the to-do-object into a string
* **addTodo:** controls the addition of new to-do-elements, needs to take user input and trigger the creation of a new to-do-element
* **deleteTodo:** removes a specific to-to-element based on its given ID
* **markTodo:** adds a css class to a specific to-do-element based on its ID to change its style and show it as 'completed'
* **sortTodos:** sorts the to-do-elements based on tehir 'completed' status

### test.js
The `test.js` file contain one example test to ensure that the framework is running
