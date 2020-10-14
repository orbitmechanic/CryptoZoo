
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

function UpdateFurColor(color,code) {
    console.log('Hello from UpdateFurColor()');
    //This changes the fur color of the animal
    $('.head, .chest, .ear--left, .ear--right').css('background', '#' + color)  
    //This updates text of the badge next to the slider
    $('#furColorCode').html('code: ' + code) 
    //This updates the fur color part of the DNA that is displayed below the animal
    $('.dnaFurColor').html(code) 
}
function UpdateUnderFurColor(color,code) {
    console.log('Hello from UpdateUnderFurColor()');
    //This changes the under-fur color of the animal
    $('.mouth-contour, .chest_inner').css('background', '#' + color)  
    //This updates text of the badge next to the slider
    $('#UnderfurColorCode').html('code: ' + code) 
    //This updates the under-fur color part of the DNA that is displayed below the animal
    $('.dnaUnderFurColor').html(code) 
}
function UpdateEyeColor(color,code) {
    console.log('Hello from UpdateEyeColor()');
    //This changes the eye color of the animal
    $('.pupil-left, .pupil-right, .tail').css('background', '#' + color)  
    //This updates text of the badge next to the slider
    $('#EyeColorCode').html('code: ' + code) 
    //This updates the eye color part of the DNA that is displayed below the animal
    $('.dnaEyeColor').html(code) 
}
function UpdateEarColor(color,code) {
    console.log('Hello from UpdateEarColor()');
    //This changes the inner-ear color of the animal
    $('.ear--left-inside, .ear--right-inside, .paw-left, .paw-right, .paw-left_rear, .paw-right_rear')
        .css('background', '#' + color)  
    //This updates text of the badge next to the slider
    $('#EarColorCode').html('code: ' + code) 
    //This updates the inner-ear color part of the DNA that is displayed below the animal
    $('.dnaEarColor').html(code) 
}


//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('.dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
    }
}

function decorationVariation(num) {
    $('.dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}

async function normalEyes() {
    await $('.eye').find('span').css('border', 'none')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.head-dots').css({ 
        "transform": 
            "rotate(0deg)", 
            "height": "48px", 
            "width": "14px", 
            "top": "1px", 
            "border-radius": "0 0 50% 50%" })
    $('.head-dots_first').css({ 
        "transform": 
            "rotate(0deg)", 
            "height": "35px", 
            "width": "14px", 
            "top": "1px", 
            "border-radius": "50% 0 50% 50%" })
    $('.head-dots_second').css({ 
        "transform": 
            "rotate(0deg)", 
            "height": "35px", 
            "width": "14px", 
            "top": "1px", 
            "border-radius": "0 50% 50% 50%" })
}
