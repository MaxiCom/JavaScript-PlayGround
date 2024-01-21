const person = {
    isHuman: false,

    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am i human? ${this.isHuman}`);
    },
}

// Object.create() is a static method of the Object class which return an object
// It is not a constructor, no need to put new before!
const me = Object.create(person)

me.name = 'Max'; // name is a property set on me but not on person
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Max. Am I human? true"
