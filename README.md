# Unexpected 'this' Behavior in JavaScript

This repository demonstrates a common source of confusion in JavaScript: the dynamic nature of the `this` keyword.

The `bug.js` file contains a function `myFunc` where the value of `this` is not what one might initially expect depending on the context in which the function is called.

The `bugSolution.js` file offers solutions to mitigate this issue, illustrating different ways to manage `this` and achieve the desired behavior.

This example highlights the importance of understanding how function invocation contexts affect the value of `this`, especially in object-oriented programming patterns and callback scenarios.