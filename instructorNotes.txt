// OOP Exercise

// 1a
const mulan = {
  title: `Mulan`,
  main: `Fa Mulan`,
  // 1b
  quote: () => `Dishonor! Dishonor on your whole family!`,
  // 1c
  storyline: function(){
    return `The movie ${this.title} is about ${this.main}`;
  }
};

// 2a
const tangled = {
  title: `Tangled`,
  main: `Rapunzel`,
  // 2b
  quote: function(){
    return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`;
  },
  // 2c
  storyline: function() {
    return `The movie ${this.title} is about ${this.main}`;
  }
};

// 3a
function DisneyMovie(t, m){
  this.title = t;
  this.main = m;
}

// 3b
DisneyMovie.prototype.storyline = function(){
  return `The movie ${this.title} is about ${this.main}`;
}

// 3c
const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);
console.log(mulan1); // DisneyMovie { title: 'Mulan', main: 'Fa Mulan' }

// 3d
const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);
console.log(tangled1); // DisneyMovie { title: 'Tangled', main: 'Rapunzel' }

// 4a
class DM {
  constructor(t, m){
    this.title = t;
    this.main = m;
  }
  // 4b
  storyline (){
    return `The movie ${this.title} is about ${this.main}`;
  }
  // 4e
  static loveDisneyMovies(){
    return `I Love Disney Movies!`;
  }
}

// 4c
const mulan2 = new DM(`Mulan`, `Fa Mulan`);
console.log(mulan2); // DM { title: 'Mulan', main: 'Fa Mulan' }
console.log(mulan2.storyline()); // The movie Mulan is about Fa Mulan

// 4d
const tangled2 = new DM(`Tangled`, `Rapunzel`);
console.log(tangled2); // DM { title: 'Tangled', main: 'Rapunzel' }
console.log(tangled2.storyline()); // The movie Tangled is about Rapunzel

// 4f
console.log(DM.loveDisneyMovies());

// 5a
class DMCast extends DM {
  // 5b
  constructor(t, m, c){
    // 5c
    super(t, m);
    this.cast = c;
  }
  // BONUS
  // 6a
  static create(t, m, c){
    return new DMCast(t, m, c);
    // Can also use the "this" keyword
    // return new this(t, m, c);
  }
}

// 5d
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
// Still able to access the storyline method on an object created using the DMCast subclass
console.log(mulan3.storyline()); // The movie Mulan is about Fa Mulan
// Still able to access the loveDisneyMovies static method on the DMCast subclass
console.log(DMCast.loveDisneyMovies()); // I Love Disney Movies!

// 5e
const rapunzel3 = new DMCast(
  `Tangled`,
  `Rapunzel`,
  {
    rapunzel: `Mandy Moore`,
    flynnRider: `Zachary Levi`,
    motherGothel: `Donna Murphy`
  }
);
console.log(rapunzel3);
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

// BONUS
// 6b
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

// 6c
console.log(moana);
/*
DMCast {
  title: 'Moana',
  main: 'Moana of Motunui',
  cast: {
    moana: "Auli'i Cravalho",
    maui: 'Dwayne Johnson',
    grammaTala: 'Rachel House',
    chiefTui: 'Temuera Morrison'
  }
}
*/