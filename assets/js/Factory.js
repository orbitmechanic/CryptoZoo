
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

function SetEyeVariation(num) {

    // Set DNA code dispay
    $('.dnaEyeShape').html(num)

    switch (num) {
        case 1:
            resetEyes();
            $('#EyeShapeName').html('Basic'); 
            break
        case 2:
            resetEyes();
            $('.eye').find('span').css('border-top','15px solid');
            $('#EyeShapeName').html('Chill'); 
            break
        case 3:
            resetEyes();
            $('.eye').find('span').css('border-bottom','15px solid');
            $('#EyeShapeName').html('Sleepy'); 
            break
        case 4:
            resetEyes();
            $('.eye').find('span').css('border-left','15px solid');
            $('#EyeShapeName').html('Right'); 
            break
        case 5:
            resetEyes();
            $('.eye').find('span').css('border-right','15px solid');
            $('#EyeShapeName').html('Left'); 
            break
        case 6:
            resetEyes();
            $('.eye').find('span').css('border-top','15px solid');
            $('.pupil-right').css('transform','rotateZ(-15deg)');
            $('.pupil-left').css('transform','rotateZ(15deg)');
            $('#EyeShapeName').html('Evil'); 
            break
        case 7:
            resetEyes();
            $('.eye').find('span').css('border-top','15px solid');
            $('.pupil-right').css('transform','rotateZ(15deg)');
            $('.pupil-left').css('transform','rotateZ(-15deg)');
            $('#EyeShapeName').html('Happy'); 
            break
        default:
            console.log('Recieved unhandled eye variation code:' + num);
    }
    function resetEyes() {
        $('.eye').find('span').css('border', 'none');
        $('.pupil-right').css('transform','rotateZ(0deg)');
        $('.pupil-left').css('transform','rotateZ(0deg)');
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
