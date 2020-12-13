console.groupCollapsed('Factory.js');

var factoryAnimal = new animal();

// when page load
$( document ).ready(function() {
  console.groupCollapsed('dna.js::$(document).ready():');

  factoryAnimal.setDefaults();
  factoryAnimal.list2Labels();
  factoryAnimal.updateDisplay();

  // Attach Button Actions ----------------------------------------------------

  // Default Button
  document.getElementById("dfltButton").onclick = function() {
    console.groupCollapsed('defaultButton.onclick():');

    factoryAnimal.setDefaults();
    factoryAnimal.list2Labels();
    factoryAnimal.updateDisplay();

    console.groupEnd();
  };

  // Random Button
  document.getElementById("rndButton").onclick= function() {
    console.groupCollapsed('randomButton.onclick():');

    factoryAnimal.randomize();
    factoryAnimal.list2Labels();
    factoryAnimal.updateDisplay();

    console.groupEnd();
  };

  // Control listeners ------------------------------------------------------------

  // Changing animal colors.  
  // All color arrays range [1...99], but sliders fixed at [10...98]

  $('#furColorControl').change(()=>{
    console.debug('Changing fur color to ' + $('#furColorControl').val());
    var colorVal = $('#furColorControl').val();
    factoryAnimal.SetFurColor(colorVal);
  });

  $('#UnderfurColorControl').change(()=>{
  console.debug('Changing under fur color to ' + $('#UnderfurColorControl').val());
  var colorVal = $('#UnderfurColorControl').val();
  factoryAnimal.SetUnderFurColor(colorVal);
  });

  $('#EyeColorControl').change(()=>{
  console.debug('Changing eye color to ' + $('#EyeColorControl').val());
  var colorVal = $('#EyeColorControl').val();
  factoryAnimal.SetEyeColor(colorVal);
  });

  $('#EarColorControl').change(()=>{
  console.debug('Changing inner ear color to ' + $('#EarColorControl').val());
  var colorVal = $('#EarColorControl').val();
  factoryAnimal.SetEarColor(colorVal);
  });

  $('#MarkingMidColorControl').change(()=>{
  console.debug('Changing mid-marking color to ' + $('#MarkingMidColorControl').val());
  var colorVal = $('#MarkingMidColorControl').val();
  factoryAnimal.SetMarkingMidColor(colorVal);
  });

  $('#MarkingSideColorControl').change(()=>{
  console.debug('Changing outer marking color to ' + $('#MarkingSideColorControl').val());
  var colorVal = $('#MarkingSideColorControl').val();
  factoryAnimal.SetMarkingSidesColor(colorVal);
  });

  // Changing animal attributes, sliders ranged [1...7]
  $('#EyeShapeControl').change(()=>{
  console.debug('Changing eye shape to ' + $('#EyeShapeControl').val());
  var shapeCode = parseInt($('#EyeShapeControl').val()); 
  factoryAnimal.SetEyeVariation(shapeCode);
  });

  $('#MarkingShapeControl').change(()=>{
  console.debug('Changing marking shape to ' + $('#MarkingShapeControl').val());
  var shapeCode = parseInt($('#MarkingShapeControl').val()); 
  factoryAnimal.SetMarkingVariation(shapeCode);
  });

  $('#AnimationControl').change(()=>{
  console.debug('Changing animation to ' + $('#AnimationControl').val());
  var animationCode = parseInt($('#AnimationControl').val()); 
  factoryAnimal.SetAnimation(animationCode);
  });

  console.groupEnd()
});

console.groupEnd();
