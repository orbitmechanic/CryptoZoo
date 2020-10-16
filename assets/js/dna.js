console.log('Reading dna.js...');

var colors = Object.values(allColors());

var defaultDNA = {
  // Colors
  "furColor" : 10,
  "underFurColor" : 13,
  "eyesColor" : 96,
  "earsColor" : 10,
  // Attributes
  "eyesShape" : 1,
  "markingShape" : 1,
  "markingMidColor" : 13,
  "markingSidesColor" : 13,
  "animation" :  1,
  "special" :  1,
};

// when page load
$( document ).ready(function() {
  // Push default values to display...
  console.log('$(document).ready() callback firing...');

  // Color codes
  $('.dnaFurColor').html(defaultDNA.furColor);
  $('.dnaUnderFurColor').html(defaultDNA.underFurColor);
  $('.dnaEyeColor').html(defaultDNA.eyesColor);
  $('.dnaEarColor').html(defaultDNA.earsColor);

  // Attribute codes
  $('.dnaEyeShape').html(defaultDNA.eyesShape);
  $('.dnaMarkingShape').html(defaultDNA.dnaMarkingShape);
  $('.dnaMarkingMidColor').html(defaultDNA.markingMidColor);
  $('.dnaMarkingSidesColor').html(defaultDNA.markingSidesColor);
  $('.dnaAnimation').html(defaultDNA.animation);
  $('.dnaSpecial').html(defaultDNA.special);

  renderAnimal(defaultDNA);
});

function getDna(){
  // Create printable string from DNA values
  console.log('calling getDNA()...');

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
  console.log('calling renderAnimal()...');

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
}

// Control listeners ------------------------------------------------------------

// Changing animal colors.  
// All color arrays range [1...99], but sliders fixed at [10...98]

$('#furColorControl').change(()=>{
    console.log('Changing fur color to ' + $('#furColorControl').val());
    var colorVal = $('#furColorControl').val();
    UpdateFurColor(colors[colorVal],colorVal);
});
$('#UnderfurColorControl').change(()=>{
  console.log('Changing under fur color to ' + $('#UnderfurColorControl').val());
  var colorVal = $('#UnderfurColorControl').val();
  UpdateUnderFurColor(colors[colorVal],colorVal);
});
$('#EyeColorControl').change(()=>{
  console.log('Changing eye color to ' + $('#EyeColorControl').val());
  var colorVal = $('#EyeColorControl').val();
  UpdateEyeColor(colors[colorVal],colorVal);
});
$('#EarColorControl').change(()=>{
  console.log('Changing inner ear color to ' + $('#EarColorControl').val());
  var colorVal = $('#EarColorControl').val();
  UpdateEarColor(colors[colorVal],colorVal);
});
$('#MarkingMidColorControl').change(()=>{
  console.log('Changing mid-marking color to ' + $('#MarkingMidColorControl').val());
  var colorVal = $('#MarkingMidColorControl').val();
  UpdateMarkingMidColor(colors[colorVal],colorVal);
});
$('#MarkingSideColorControl').change(()=>{
  console.log('Changing outer marking color to ' + $('#MarkingSideColorControl').val());
  var colorVal = $('#MarkingSideColorControl').val();
  UpdateMarkingSidesColor(colors[colorVal],colorVal);
});

// Changing animal attributes, sliders ranged [1...7]
$('#EyeShapeControl').change(()=>{
  console.log('Changing eye shape to ' + $('#EyeShapeControl').val());
  var shapeCode = parseInt($('#EyeShapeControl').val()); 
  SetEyeVariation(shapeCode);
});
$('#MarkingShapeControl').change(()=>{
  console.log('Changing marking shape to ' + $('#MarkingShapeControl').val());
  var shapeCode = parseInt($('#MarkingShapeControl').val()); 
  SetMarkingVariation(shapeCode);
});
$('#AnimationControl').change(()=>{
  console.log('Changing animation to ' + $('#AnimationControl').val());
  var animationCode = parseInt($('#AnimationControl').val()); 
  SetAnimation(animationCode);
});
