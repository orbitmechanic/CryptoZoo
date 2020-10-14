
var colors = Object.values(allColors())

var defaultDNA = {
  // Colors
  "furColor" : 10,
  "underFurColor" : 13,
  "eyesColor" : 96,
  "earsColor" : 10,
  // Attributes
  "eyesShape" : 1,
  "decorationPattern" : 1,
  "decorationMidcolor" : 13,
  "decorationSidescolor" : 13,
  "animation" :  1,
  "lastNum" :  1
}

// when page load
$( document ).ready(function() {
  // Color codes
  $('.dnaFurColor').html(defaultDNA.furColor);
  $('.dnaUnderFurColor').html(defaultDNA.underFurColor);
  $('.dnaEyeColor').html(defaultDNA.eyesColor);
  $('.dnaEarColor').html(defaultDNA.earsColor);
  // Attribute codes
  $('.dnaEyeShape').html(defaultDNA.eyesShape)
  $('.dnadecoration').html(defaultDNA.decorationPattern)
  $('.dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('.dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('.dnaanimation').html(defaultDNA.animation)
  $('.dnaspecial').html(defaultDNA.lastNum)

  renderAnimal(defaultDNA)
});

function getDna(){
  var dna = ''
  dna += $('.dnaFurColor').html()
  dna += $('.dnaUnderFurColor').html()
  dna += $('.dnaEyeColor').html()
  dna += $('.dnaEarColor').html()
  dna += $('.dnaEyeShape').html()
  dna += $('.dnadecoration').html()
  dna += $('.dnadecorationMid').html()
  dna += $('.dnadecorationSides').html()
  dna += $('.dnaanimation').html()
  dna += $('.dnaspecial').html()

  return parseInt(dna)
}

function renderAnimal(dna){
  UpdateFurColor(colors[dna.furColor],dna.furColor)
  $('#furColorControl').val(dna.furColor)

  UpdateUnderFurColor(colors[dna.underFurColor],dna.underFurColor)
  $('#UnderfurColorControl').val(dna.underFurColor)

  UpdateEyeColor(colors[dna.eyesColor],dna.eyesColor)
  $('#EyeColorControl').val(dna.eyesColor)

  UpdateEarColor(colors[dna.earsColor],dna.earsColor)
  $('#EarColorControl').val(dna.earsColor)
}

// Changing animal colors
$('#furColorControl').change(()=>{
    console.log($('#furColorControl').val());
    var colorVal = $('#furColorControl').val();
    UpdateFurColor(colors[colorVal],colorVal);
})
$('#UnderfurColorControl').change(()=>{
  console.log($('#UnderfurColorControl').val());
  var colorVal = $('#UnderfurColorControl').val();
  UpdateUnderFurColor(colors[colorVal],colorVal);
})
$('#EyeColorControl').change(()=>{
  console.log($('#EyeColorControl').val());
  var colorVal = $('#EyeColorControl').val();
  UpdateEyeColor(colors[colorVal],colorVal);
})
$('#EarColorControl').change(()=>{
  console.log($('#EarColorControl').val());
  var colorVal = $('#EarColorControl').val();
  UpdateEarColor(colors[colorVal],colorVal);
})

// Changing animal attributes
$('#EyeShapeControl').change(()=>{
  console.log($('#EyeShapeControl').val());
  var shapeCode = parseInt($('#EyeShapeControl').val()); // [1...7]
  SetEyeVariation(shapeCode);
})
