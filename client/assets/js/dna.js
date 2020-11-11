console.groupCollapsed('dna.js');

var colors = Object.values(allColors());

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
    this.eyesShap;
    this.markingShap;
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

  list2Factory() {
    console.groupCollapsed('animalDNA::list2Factory()');

    // Color codes
    $('.dnaFurColor').html(this.furColor);
    $('.dnaUnderFurColor').html(this.underFurColor);
    $('.dnaEyeColor').html(this.eyesColor);
    $('.dnaEarColor').html(this.earsColor);
    $('.dnaMarkingMidColor').html(this.markingMidColor);
    $('.dnaMarkingSidesColor').html(this.markingSidesColor);
    // Attribute codes
    $('.dnaEyeShape').html(this.eyesShape);
    $('.dnaMarkingShape').html(this.dnaMarkingShape);
    $('.dnaAnimation').html(this.animation);
    $('.dnaSpecial').html(this.special);

    console.groupEnd();
  }

  render2Factory(){
    console.groupCollapsed('animalDNA::render2Factory()')
    // Color codes
    UpdateFurColor(colors[this.furColor],this.furColor);
    $('#furColorControl').val(this.furColor);
  
    UpdateUnderFurColor(colors[this.underFurColor],this.underFurColor);
    $('#UnderfurColorControl').val(this.underFurColor);
  
    UpdateEyeColor(colors[this.eyesColor],this.eyesColor);
    $('#EyeColorControl').val(this.eyesColor);
  
    UpdateEarColor(colors[this.earsColor],this.earsColor);
    $('#EarColorControl').val(this.earsColor);

    UpdateMarkingMidColor(colors[this.markingMidColor],this.markingMidColor);
    $('#MarkingMidColorControl').val(this.markingMidColor);
  
    UpdateMarkingSidesColor(colors[this.markingSidesColor],this.markingSidesColor);
    $('#MarkingSideColorControl').val(this.markingSidesColor);
  
    // Attribute Codes
    SetEyeVariation(this.eyesShape);
    $('#EyeShapeControl').val(this.eyesShape);
  
    SetMarkingVariation(this.markingShape);
    $('#MarkingShapeControl').val(this.markingShape);
  
    SetAnimation(this.animation);
    $('#AnimationControl').val(this.animation);
  
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

    return parseInt(dna);
  }

  asInt() {
    console.groupCollapsed('animalDNA::asInt()');
    console.groupEnd;
    return this.toString();
  }

}

var factoryDNA = new animalDNA();

// when page load
$( document ).ready(function() {
  console.groupCollapsed('dna.js::$(document).ready():');

  factoryDNA.setDefaults();
  factoryDNA.list2Factory();
  factoryDNA.render2Factory();

  // Attach Button Actions ----------------------------------------------------

  // Default Button
  document.getElementById("dfltButton").onclick = function() {
    console.groupCollapsed('defaultButton.onclick():');

    factoryDNA.setDefaults();
    factoryDNA.list2Factory();
    factoryDNA.render2Factory();

    console.groupEnd();
  };

  // Random Button
  document.getElementById("rndButton").onclick= function() {
    console.groupCollapsed('randomButton.onclick():');

    factoryDNA.randomize();
    factoryDNA.list2Factory();
    factoryDNA.render2Factory();

    console.groupEnd();
  };

  console.groupEnd()
});

// Control listeners ------------------------------------------------------------

// Changing animal colors.  
// All color arrays range [1...99], but sliders fixed at [10...98]

$('#furColorControl').change(()=>{
    console.debug('Changing fur color to ' + $('#furColorControl').val());
    var colorVal = $('#furColorControl').val();
    UpdateFurColor(colors[colorVal],colorVal);
});
$('#UnderfurColorControl').change(()=>{
  console.debug('Changing under fur color to ' + $('#UnderfurColorControl').val());
  var colorVal = $('#UnderfurColorControl').val();
  UpdateUnderFurColor(colors[colorVal],colorVal);
});
$('#EyeColorControl').change(()=>{
  console.debug('Changing eye color to ' + $('#EyeColorControl').val());
  var colorVal = $('#EyeColorControl').val();
  UpdateEyeColor(colors[colorVal],colorVal);
});
$('#EarColorControl').change(()=>{
  console.debug('Changing inner ear color to ' + $('#EarColorControl').val());
  var colorVal = $('#EarColorControl').val();
  UpdateEarColor(colors[colorVal],colorVal);
});
$('#MarkingMidColorControl').change(()=>{
  console.debug('Changing mid-marking color to ' + $('#MarkingMidColorControl').val());
  var colorVal = $('#MarkingMidColorControl').val();
  UpdateMarkingMidColor(colors[colorVal],colorVal);
});
$('#MarkingSideColorControl').change(()=>{
  console.debug('Changing outer marking color to ' + $('#MarkingSideColorControl').val());
  var colorVal = $('#MarkingSideColorControl').val();
  UpdateMarkingSidesColor(colors[colorVal],colorVal);
});

// Changing animal attributes, sliders ranged [1...7]
$('#EyeShapeControl').change(()=>{
  console.debug('Changing eye shape to ' + $('#EyeShapeControl').val());
  var shapeCode = parseInt($('#EyeShapeControl').val()); 
  SetEyeVariation(shapeCode);
});
$('#MarkingShapeControl').change(()=>{
  console.debug('Changing marking shape to ' + $('#MarkingShapeControl').val());
  var shapeCode = parseInt($('#MarkingShapeControl').val()); 
  SetMarkingVariation(shapeCode);
});
$('#AnimationControl').change(()=>{
  console.debug('Changing animation to ' + $('#AnimationControl').val());
  var animationCode = parseInt($('#AnimationControl').val()); 
  SetAnimation(animationCode);
});

console.groupEnd()