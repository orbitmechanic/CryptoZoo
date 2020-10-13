
var colors = Object.values(allColors())

var defaultDNA = {
    // Colors
    "headcolor" : 10,
    "mouthColor" : 13,
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
  $('.dnabody').html(defaultDNA.headColor);
  $('.dnamouth').html(defaultDNA.mouthColor);
  $('.dnaeyes').html(defaultDNA.eyesColor);
  $('.dnaears').html(defaultDNA.earsColor);
    
//   $('#dnashape').html(defaultDNA.eyesShape)
//   $('#dnadecoration').html(defaultDNA.decorationPattern)
//   $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
//   $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
//   $('#dnaanimation').html(defaultDNA.animation)
//   $('#dnaspecial').html(defaultDNA.lastNum)

  renderAnimal(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('.dnabody').html()
    dna += $('.dnamouth').html()
    dna += $('.dnaeyes').html()
    dna += $('.dnaears').html()
    dna += $('.dnashape').html()
    dna += $('.dnadecoration').html()
    dna += $('.dnadecorationMid').html()
    dna += $('.dnadecorationSides').html()
    dna += $('.dnaanimation').html()
    dna += $('.dnaspecial').html()

    return parseInt(dna)
}

function renderAnimal(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
}

// Changing animal colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})
