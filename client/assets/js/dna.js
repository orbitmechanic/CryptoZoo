console.debug('Reading dna.js...');

var colors = Object.values(allColors());

var defaultDNA = {
  // Colors
  "furColor" : 10,
  "underFurColor" : 13,
  "eyesColor" : 96,
  "earsColor" : 10,
  "markingMidColor" : 13,
  "markingSidesColor" : 13,
  // Attributes
  "eyesShape" : 1,
  "markingShape" : 1,
  "animation" :  1,
  "special" :  1,
};

// when page load
$( document ).ready(function() {
  // Push default values to display...
  console.debug('$(document).ready() callback firing...');
  console.groupCollapsed('dna.js::$(document).ready():');

  // Color codes
  $('.dnaFurColor').html(defaultDNA.furColor);
  $('.dnaUnderFurColor').html(defaultDNA.underFurColor);
  $('.dnaEyeColor').html(defaultDNA.eyesColor);
  $('.dnaEarColor').html(defaultDNA.earsColor);
  $('.dnaMarkingMidColor').html(defaultDNA.markingMidColor);
  $('.dnaMarkingSidesColor').html(defaultDNA.markingSidesColor);

  // Attribute codes
  $('.dnaEyeShape').html(defaultDNA.eyesShape);
  $('.dnaMarkingShape').html(defaultDNA.dnaMarkingShape);
  $('.dnaAnimation').html(defaultDNA.animation);
  $('.dnaSpecial').html(defaultDNA.special);

  renderAnimal(defaultDNA);

  // Attach Button Actions ----------------------------------------------------

  // Default Button
  document.getElementById("dfltButton").onclick = function() {
    console.debug('Default button hit.')
    console.groupCollapsed('defaultButton.onclick():');
    renderAnimal(defaultDNA);
    console.groupEnd();
  };

  // Random Button
  document.getElementById("rndButton").onclick= function() {
    console.debug('Randomize button hit.')
    console.groupCollapsed('randomButton.onclick():');
    var randomDNA = {
      // Colors
      "furColor" : Math.floor(Math.random()*89) + 10,
      "underFurColor" : Math.floor(Math.random()*89) + 10,
      "eyesColor" : Math.floor(Math.random()*89) + 10,
      "earsColor" : Math.floor(Math.random()*89) + 10,
      "markingMidColor" : Math.floor(Math.random()*89) + 10,
      "markingSidesColor" : Math.floor(Math.random()*89) + 10,
      // Attributes
      "eyesShape" : Math.floor(Math.random()*8) + 1,
      "markingShape" : Math.floor(Math.random()*4) + 1,
      "animation" :  Math.floor(Math.random()*4) + 1,
      "special" :  Math.floor(Math.random()*4) + 1,
    };
    renderAnimal(randomDNA);
    console.groupEnd();
  };

  // Mint Button
  document.getElementById('mintButton').onclick = function() {
    console.debug('Mint button hit.');
    console.groupCollapsed('mintButton.onclick():');
    mintAnimal();
    console.groupEnd();
  };

  console.groupEnd()
});

function getDNA(){
  // Create printable string from DNA values
  console.debug('calling getDNA()...');

  var dna = '';
  dna += $('.dnaFurColor').html();
  dna += $('.dnaUnderFurColor').html();
  dna += $('.dnaEyeColor').html();
  dna += $('.dnaEarColor').html();
  dna += $('.dnaEyeShape').html();
  dna += $('.dnaMarkingShape').html();
  dna += $('.dnaMarkingMidColor').html();
  dna += $('.dnaMarkingSidesColor').html();
  dna += $('.dnaAnimation').html();
  dna += $('.dnaSpecial').html();

  return parseInt(dna);
}

function renderAnimal(dna){
  // Render animal from DNA values
  console.debug('calling renderAnimal()...');
  console.groupCollapsed('renderAnimal():');

  UpdateFurColor(colors[dna.furColor],dna.furColor);
  $('#furColorControl').val(dna.furColor);

  UpdateUnderFurColor(colors[dna.underFurColor],dna.underFurColor);
  $('#UnderfurColorControl').val(dna.underFurColor);

  UpdateEyeColor(colors[dna.eyesColor],dna.eyesColor);
  $('#EyeColorControl').val(dna.eyesColor);

  UpdateEarColor(colors[dna.earsColor],dna.earsColor);
  $('#EarColorControl').val(dna.earsColor);

  SetEyeVariation(dna.eyesShape);
  $('#EyeShapeControl').val(dna.eyesShape);

  SetMarkingVariation(dna.markingShape);
  $('#MarkingShapeControl').val(dna.markingShape);

  UpdateMarkingMidColor(colors[dna.markingMidColor],dna.markingMidColor);
  $('#MarkingMidColorControl').val(dna.markingMidColor);

  UpdateMarkingSidesColor(colors[dna.markingSidesColor],dna.markingSidesColor);
  $('#MarkingSideColorControl').val(dna.markingSidesColor);

  SetAnimation(dna.animation);
  $('#AnimationControl').val(dna.animation);

  console.groupEnd();
}

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

