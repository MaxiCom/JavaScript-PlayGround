// These statements do the same thing:
// [1, 2, 3] Array Literal (shorthand)
// new Array(1, 2, 3) Array instantiation (classic way)





// Babel Input: ES2015 Arrow Function
[1, 2, 3].map(n => n + 1);

// Babel Output: ES2009 Equivalent
[1, 2, 3].map(function (n) {
    return n + 1;
});


// Same as
(new Array(1, 2, 3)).map(n => n + 1);

(new Array(1, 2, 3)).map(function (n) {
    return n + 1;
})







// Understand map()
// Understand map callback
// Understand arrow function return
// Understand arrow func
