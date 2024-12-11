function myFunc() {
  console.log(this);
}

// Solution 1: Using bind()
const boundFunc = myFunc.bind({ value: 'Bound Object' });
boundFunc();

// Solution 2: Using an arrow function (lexical 'this')
const obj = {
  myFunc: () => {
    console.log(this); // 'this' will refer to the global object here
  }
};
obj.myFunc();

// Solution 3: Using a self-referencing variable inside a regular function
const obj2 = {
  myFunc: function() {
    const self = this;
    console.log(self);
  }
};
obj2.myFunc();