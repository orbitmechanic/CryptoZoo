console.debug('Reading Factory.js...');

function getColor() {
    // Return a random color code
    console.debug('calling getColor()...');

    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    // Generate random color array.
    console.debug('Calling genColors()...');

    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

function UpdateFurColor(color,code) {
    // Push new fur color and code to display.
    console.debug('Calling UpdateFurColor(#' + color + ', ' + code + ') ...');

    //This changes the fur color of the animal
    $('.head, .chest, .ear--left, .ear--right').css('background', '#' + color);  
    //This updates text of the badge next to the slider
    $('#furColorCode').html('code: ' + code); 
    //This updates the fur color part of the DNA that is displayed below the animal
    $('.dnaFurColor').html(code);
}
function UpdateUnderFurColor(color,code) {
    // Push new under fur color and code to display.
    console.debug('Calling UpdateUnderFurColor(#' + color + ', ' + code + ') ...');

    //This changes the under-fur color of the animal
    $('.mouth-contour, .chest_inner').css('background', '#' + color);  
    //This updates text of the badge next to the slider
    $('#UnderfurColorCode').html('code: ' + code); 
    //This updates the under-fur color part of the DNA that is displayed below the animal
    $('.dnaUnderFurColor').html(code); 
}
function UpdateEyeColor(color,code) {
    // Push new eye and tail color and code to display.
    console.debug('Calling UpdateEyeColor(#' + color + ', ' + code + ') ...');

    //This changes the eye color of the animal
    $('.pupil-left, .pupil-right, .tail').css('background', '#' + color);  
    //This updates text of the badge next to the slider
    $('#EyeColorCode').html('code: ' + code); 
    //This updates the eye color part of the DNA that is displayed below the animal
    $('.dnaEyeColor').html(code); 
}
function UpdateEarColor(color,code) {
    // Push new ear and paw color and code to display.
    console.debug('Calling UpdateEarColor(#' + color + ', ' + code + ') ...');

    //This changes the inner-ear color of the animal
    $('.ear--left-inside, .ear--right-inside, .paw-left, .paw-right, .paw-left_rear, .paw-right_rear')
        .css('background', '#' + color);  
    //This updates text of the badge next to the slider
    $('#EarColorCode').html('code: ' + code);
    //This updates the inner-ear color part of the DNA that is displayed below the animal
    $('.dnaEarColor').html(code); 
}
function UpdateMarkingMidColor(color,code) {
    // Push new center marking color and code to display.
    console.debug('Calling UpdateMarkingMidColor(#' + color + ', ' + code + ') ...');

    //This changes the middle marking color of the animal
    $('.marking').css('background', '#' + color);  
    //This updates text of the badge next to the slider
    $('#MarkingMidColorCode').html('code: ' + code); 
    //This updates the middle marking color part of the DNA that is displayed below the animal
    $('.dnaMarkingMidColor').html(code); 
}
function UpdateMarkingSidesColor(color,code) {
    // Push new outer marking color and code to display.
    console.debug('Calling UpdateMarkingSidesColor(#' + color + ', ' + code + ') ...');

    //This changes the outer markings color of the animal
    $('.marking-left, .marking-right').css('background', '#' + color);  
    //This updates text of the badge next to the slider
    $('#MarkingSideColorCode').html('code: ' + code); 
    //This updates the outer markings color part of the DNA that is displayed below the animal
    $('.dnaMarkingSidesColor').html(code); 
}


function SetEyeVariation(num) {
    // Push new eye shape code to display
    console.debug('Calling SetEyeVariation(' + num + ') ...');
    console.group('SetEyeVariation():');

    // Set DNA code dispay
    $('.dnaEyeShape').html(num);

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
        case 8:
            resetEyes();
            $('.eye').find('span').css('border-top','15px solid');
            $('.eye').find('span').css('border-bottom','15px solid');
            $('#EyeShapeName').html('Squint'); 
            break
        case 9:
            resetEyes();
            $('.eye').find('span').css('border-left','15px solid');
            $('.eye').find('span').css('border-right','15px solid');
            $('#EyeShapeName').html('Cat'); 
            break
        default:
            console.error('Recieved unhandled eye variation code:' + num);
    }
    function resetEyes() {;
        // reset all used eye shape CSS parameters
        console.debug('Calling SetEyeVariation(' + num + ')::resetEyes() ...');

        $('.eye').find('span').css('border', 'none');
        $('.pupil-right').css('transform','rotateZ(0deg)');
        $('.pupil-left').css('transform','rotateZ(0deg)');
    }
    console.groupEnd();
}

function SetMarkingVariation(num) {
    // Render marking shape CSS from given number
    console.debug('Calling SetMarkingVariation(' + num + ') ...');
    console.groupCollapsed('SetMarkingVariation():');

    $('.dnaMarkingShape').html(num)

    switch (num) {
        case 1:
            $('#MarkingShapeName').html('Stripe');
            resetDecoration();
            break
        case 2:
            $('#MarkingShapeName').html('Chevron');
            resetDecoration();
            $('.marking-left').css({
                "transform": "rotate(-25deg)"
            });
            $('.marking-right').css({
                "transform":"rotate(25deg)"
            });
            break
        case 3:
            $('#MarkingShapeName').html('Spread');
            resetDecoration();
            $('.marking-left').css({
                "transform": "rotate(25deg)"
            });
            $('.marking-right').css({
                "transform":"rotate(-25deg)"
            });
            break
        case 4:
            $('#MarkingShapeName').html('Dots');
            resetDecoration();
            $('.marking').css({
                "height": "20px",
                "width": "20px",
                "border-radius": "50% 50% 50% 50%",
            });
            $('.marking-left').css({
                "height": "20px",
                "width": "20px",
                "border-radius": "50% 50% 50% 50%",
            });
            $('.marking-right').css({
                "height": "20px",
                "width": "20px",
                "border-radius": "50% 50% 50% 50%",
            });
            break
        case 5:
            $('#MarkingShapeName').html('Bow');
            resetDecoration();
            $('.marking').css({
                "height": "20px",
                "width": "20px",
                "border-radius": "50% 50% 50% 50%",
            });
            $('.marking-left').css({
                "height": "30px",
                "width": "20px",
                "border-radius": "50% 50% 50% 70%",
            });
            $('.marking-right').css({
                "height": "30px",
                "width": "20px",
                "border-radius": "50% 50% 50% 70%",
            });
            break
        default:
            console.error('Recieved unhandled eye variation code:' + num);
    }
    function resetDecoration() {
        // Reset all used marking CSS parameters 
        console.debug('Calling SetMarkingVariation(' + num + ')::resetDecoration() ...');

        $('.marking').css({ 
            "transform": "rotate(0deg)", 
            "height": "48px", 
            "width": "14px", 
            "top": "1px", 
            "border-radius": "0 0 50% 50%" });
        $('.marking-left').css({ 
            "transform": "rotate(0deg)", 
            "height": "35px", 
            "width": "14px", 
            "top": "1px", 
            "border-radius": "50% 0 50% 50%" });
        $('.marking-right').css({ 
            "transform": "rotate(0deg)",
            "height": "35px", 
            "width": "14px", 
            "top": "1px", 
            "border-radius": "0 50% 50% 50%" });
    }
    console.groupEnd();
}

function SetAnimation(num) {
    // set the animal's CSS animation from code 
    console.debug('Calling SetAnimation(' + num + ') ...');
    console.groupCollapsed('SetAnimation():');

    $('.dnaAnimation').html(num);

    switch (num) {
        case 1:
            clearAnimation();
            $('#AnimationCode').html('None');
            break
        case 2:
            clearAnimation();
            $('#AnimationCode').html('Rocking Head');
            $('.head').addClass('rocking');
            break
        case 3:
            clearAnimation();
            $('#AnimationCode').html('Lazy Ears');
            $('.ear--left').addClass('rockingLeftEar');
            $('.ear--right').addClass('rockingRightEar');
            break
        case 4:
            clearAnimation();
            $('#AnimationCode').html('Winking');
            $('.eye').addClass('winkingEye');
            break
        case 5:
            clearAnimation();
            $('#AnimationCode').html('Sniffle');
            $('.whiskers-left').addClass('wiggleLeftWisker');
            $('.whiskers-right').addClass('wiggleRightWisker');
            break
        default:
            console.error('Recieved unhandled animation code:' + num);
    };
    function clearAnimation(){
        // clear animation setting from display
        console.debug('Calling SetAnimation(' + num + ')::clearAnimation()');

        $('.head').removeClass('rocking');                  // type 2
        $('.ear--left').removeClass('rockingLeftEar');      // type 3
        $('.ear--right').removeClass('rockingRightEar');    // type 3
        $('.eye').removeClass('winkingEye');                // type 4
        $('.whiskers-left').removeClass('wiggleLeftWisker');   // type 5
        $('.whiskers-right').removeClass('wiggleRightWisker'); // type 5
    }  
    console.groupEnd();
}
