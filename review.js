// OOP Exercise

// 1a
const mulan = {
    title: `Mulan`,
    main: `Fa Mulan`,
    // 1b
    quote: () => `Dishonor! Dishonor on your whole family!`,
    // 1c
    storyline: function () {
        return `The movie ${this.title} is about ${this.main}`;
    }
};

// 2a
const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,
    // 2b
    quote: function () {
        return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`;
    },
    // 2c
    storyline: function () {
        return `The movie ${this.title} is about ${this.main}`;
    }
};

// 3a
function DisneyMovie(t, m) {
    this.title = t;
    this.main = m;
}

// 3b
DisneyMovie.prototype.storyline = function () {
    return `The movie ${this.title} is about ${this.main}`;
}

// 3c uses Disney Constructor function, matches objects from Q1. 1st time we are able to console.log
const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);
console.log(mulan1);
//Returns: DisneyMovie { title: 'Mulan', main: 'Fa Mulan' }

//3d
const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);
console.log(tangled1);
//Returns: DisneyMovie { title: 'Tangled', main: 'Rapunzel' }

// 4a NOTE "C" in Constructor is incorrect because C-ref: https://stackoverflow.com/questions/40210632/false-error-a-constructor-name-should-not-start-with-a-lowercase-letter-babel-n
class DM {
    constructor(t, m) {
        this.title = t;
        this.main = m;
    }
    // 4b
    storyline = function () {
        return `The movie ${this.title} is about ${this.main}`;
    }
}
  //4e Static Method within the class can access without creating new object. Access off of class name. (moved under 4b)
static loveDisneyMovies(){
    return `I love Disney Movies!`
}

// 4c
const mulan2 = new DM(`Mulan`, `Fa Mulan`);
console.log(mulan2); // DM { title: 'Mulan', main: 'Fa Mulan' }
console.log(mulan2.storyline()); // The movie Mulan is about Fa Mulan

// 4d Creating object using DM class, console.log shows entire object and return of storyline function.
const tangled2 = new DM(`Tangled`, `Rapunzel`);
console.log(tangled2); // DM { title: 'Tangled', main: 'Rapunzel' }
console.log(tangled2.storyline()); // The movie Tangled is about Rapunzel

// 4f
console.log(DM.loveDisneyMovies());

//5a Extending the subclass
class DMCast extends DM {
    //5b
    constructor(t, m, c) {
        //5c using "super" cast=c is passed into the subclass extending the Parent DM Cast
        super(t, m);
        this.cast = c;
    }
}

//5d DMCast subclass creates new object with string + multiple key pairs for the object. 
//Mulan and Fa Mulan pass into super (t, m)
//Values this.cast (DM Cast) passed into constructor function, value of C is the multiple key pairs.
const mulan3 = new DMCast(
    `Mulan`,
    `Fa Mulan`,
    {
        mulan: `Ming-Na Wen`,
        mushu: `Eddie Murphy`,
        shang: `BD Wong`,
        theEmperor: `Pat Morita`
    }
);
console.log(mulan3);
/*
DMCast {
  title: 'Mulan',
  main: 'Fa Mulan',
  cast: {
    mulan: 'Ming-Na Wen',
    mushu: 'Eddie Murphy',
    shang: 'BD Wong',
    theEmperor: 'Pat Morita'
  }
}
*/

//These can access any object created even subclass
//Prototype Method
console.log(mulan3.storyline());
//Static Method references the subclass DMCast
console.log(DMCast.loveDisneyMovies);

//5e values passed in for 3rd object is going into the subclass
const rapunzel3 = new DMCast(
    `Tangled`,
    `Rapunzel`,
    {
        rapunzel: `Mandy Moore`,
        flynnRider: `Zachary Levi`,
        motherGothel: `Donna Murphy`
    }
);
/*
DMCast {
  title: 'Tangled',
  main: 'Rapunzel',
  cast: {
    rapunzel: 'Mandy Moore',
    flynnRider: 'Zachary Levi',
    motherGothel: 'Donna Murphy'
  }
}
*/
console.log(rapunzel3.storyline()); // The movie Tangled is about Rapunzel

//BONUS static method: Create takes in arguments for parameters. Have to use RETURN within the function
const moana = DMCast.create(
    `Moana`,
    `Moana of Motunui`,
    {
        moana: `Auli'i Cravalho`,
        maui: `Dwayne Johnson`,
        grammaTala: `Rachel House`,
        chiefTui: `Temuera Morrison`
    }
);

//USES DM CAST create static method.
//Subclass (similar to 5d)
//static create(t, m, c){
//    return new DMCast(t, m, c);
//}