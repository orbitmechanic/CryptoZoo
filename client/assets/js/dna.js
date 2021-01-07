console.groupCollapsed('dna.js');

class animalDNA {
  constructor() {
    console.groupCollapsed('animalDNA::constructor()');

    // Default Colors
    this.furColor;
    this.underFurColor;
    this.eyesColor;
    this.earsColor;
    this.markingMidColor;
    this.markingSidesColor;
    // Default Attributes
    this.eyesShape;
    this.markingShape;
    this.animation;
    this.special;

    console.groupEnd();
  }

  setDefaults() {
    console.groupCollapsed('animalDNA::setDefaults()');

    // Default Colors
    this.furColor = 10;
    this.underFurColor = 13;
    this.eyesColor = 96;
    this.earsColor = 10;
    this.markingMidColor = 13;
    this.markingSidesColor = 13;

    // Default Attributes
    this.eyesShape = 1;
    this.markingShape = 1;
    this.animation =  1;
    this.special =  1;

    console.groupEnd();
  }

  randomize() {
    console.groupCollapsed('animalDNA::randomize()')

    // Colors
    this.furColor = Math.floor(Math.random()*89) + 10;
    this.underFurColor = Math.floor(Math.random()*89) + 10;
    this.eyesColor = Math.floor(Math.random()*89) + 10;
    this.earsColor = Math.floor(Math.random()*89) + 10;
    this.markingMidColor = Math.floor(Math.random()*89) + 10;
    this.markingSidesColor = Math.floor(Math.random()*89) + 10;
    // Attributes
    this.eyesShape = Math.floor(Math.random()*8) + 1;
    this.markingShape = Math.floor(Math.random()*4) + 1;
    this.animation =  Math.floor(Math.random()*4) + 1;
    this.special =  Math.floor(Math.random()*4) + 1;

    console.groupEnd();
  }

  synchFromFactoryControls() {
    console.groupCollapsed('animalDNA::synchFromFactoryControls()');

    // Colors
    this.furColor = parseInt( $('.dnaFurColor').html() );
    this.underFurColor = parseInt( $('.dnaUnderFurColor').html() );
    this.eyesColor = parseInt( $('.dnaEyeColor').html() );
    this.earsColor = parseInt( $('.dnaEarColor').html() );
    this.markingMidColor = parseInt( $('.dnaMarkingMidColor').html() );
    this.markingSidesColor = parseInt( $('.dnaMarkingSidesColor').html() );
    // Attributes
    this.eyesShape = parseInt( $('.dnaEyeShape').html() );
    this.markingShape = parseInt( $('.dnaMarkingShape').html() );
    this.animation = parseInt( $('.dnaAnimation').html() );
    this.special = parseInt( $('.dnaSpecial').html() );

    console.groupEnd();
  }

  toString() {
    console.groupCollapsed('animalDNA::toString()');

    var dna = '';

    // colors
    dna += this.furColor;
    dna += this.underFurColor;
    dna += this.eyesColor;
    dna += this.earsColor;
    dna += this.markingMidColor;
    dna += this.markingSidesColor;

    // attributes
    dna += this.eyesShape;
    dna += this.markingShape;
    dna += this.animation;
    dna += this.special;

    console.debug('Assembled: ' + dna);

    console.groupEnd();

    return dna;
  }

}

console.groupEnd()