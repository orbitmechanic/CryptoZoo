console.groupCollapsed('Factory.js');

function getColor() {
    // Return a random color code
    console.groupCollapsed('getColor()');

    var randomColor = Math.floor(Math.random() * 16777215).toString(16);

    console.groupEnd();
    return randomColor;
}

function genColors(){
    // Generate random color array.
    console.groupCollapsed('genColors()');

    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }

    console.groupEnd();
    return colors
}

function UpdateFurColor(tag, color,code) {
    // Push new fur color and code to display.
    console.groupCollapsed('UpdateFurColor(#' + color + ', ' + code + ')');

    //This changes the fur color of the animal
    $('.' + tag +', .head, .chest, .ear--left, .ear--right').css('background', '#' + color);  
    //This updates text of the badge next to the slider
    $('.' + tag +', #furColorCode').html('code: ' + code); 
    //This updates the fur color part of the DNA that is displayed below the animal
    $('.' + tag +', .dnaFurColor').html(code);

    console.groupEnd();
}
function UpdateUnderFurColor(tag, color,code) {
    // Push new under fur color and code to display.
    console.groupCollapsed('UpdateUnderFurColor(#' + color + ', ' + code + ')');

    //This changes the under-fur color of the animal
    $('.' + tag + ', .mouth-contour, .chest_inner').css('background', '#' + color);  
    //This updates text of the badge next to the slider
    $('.' + tag + ', #UnderfurColorCode').html('code: ' + code); 
    //This updates the under-fur color part of the DNA that is displayed below the animal
    $('.' + tag + ', .dnaUnderFurColor').html(code); 

    console.groupEnd();
}
function UpdateEyeColor(tag, color,code) {
    // Push new eye and tail color and code to display.
    console.groupCollapsed('UpdateEyeColor(#' + color + ', ' + code + ')');

    //This changes the eye color of the animal
    $('.' + tag + ', .pupil-left, .pupil-right, .tail').css('background', '#' + color);  
    //This updates text of the badge next to the slider
    $('.' + tag + ', #EyeColorCode').html('code: ' + code); 
    //This updates the eye color part of the DNA that is displayed below the animal
    $('.' + tag + ', .dnaEyeColor').html(code); 

    console.groupEnd();
}
function UpdateEarColor(tag, color,code) {
    // Push new ear and paw color and code to display.
    console.groupCollapsed('UpdateEarColor(#' + color + ', ' + code + ')');

    //This changes the inner-ear color of the animal
    $('.' + tag + ', .ear--left-inside, .ear--right-inside, .paw-left, .paw-right, .paw-left_rear, .paw-right_rear')
        .css('background', '#' + color);  
    //This updates text of the badge next to the slider
    $('.' + tag + ', #EarColorCode').html('code: ' + code);
    //This updates the inner-ear color part of the DNA that is displayed below the animal
    $('.' + tag + ', .dnaEarColor').html(code); 

    console.groupEnd();
}
function UpdateMarkingMidColor(tag, color,code) {
    // Push new center marking color and code to display.
    console.groupCollapsed('UpdateMarkingMidColor(#' + color + ', ' + code + ')');

    //This changes the middle marking color of the animal
    $('.' + tag + ', .marking').css('background', '#' + color);  
    //This updates text of the badge next to the slider
    $('.' + tag + ', #MarkingMidColorCode').html('code: ' + code); 
    //This updates the middle marking color part of the DNA that is displayed below the animal
    $('.' + tag + ', .dnaMarkingMidColor').html(code); 

    console.groupEnd();
}
function UpdateMarkingSidesColor(tag, color,code) {
    // Push new outer marking color and code to display.
    console.groupCollapsed('UpdateMarkingSidesColor(#' + color + ', ' + code + ')');

    //This changes the outer markings color of the animal
    $('.' + tag + ', .marking-left, .marking-right').css('background', '#' + color);  
    //This updates text of the badge next to the slider
    $('.' + tag + ', #MarkingSideColorCode').html('code: ' + code); 
    //This updates the outer markings color part of the DNA that is displayed below the animal
    $('.' + tag + ', .dnaMarkingSidesColor').html(code); 

    console.groupEnd();
}


function SetEyeVariation(tag, num) {
    // Push new eye shape code to display
    console.groupCollapsed('SetEyeVariation(' + num + ')');

    // Set DNA code dispay
    $('.' + tag + ', .dnaEyeShape').html(num);

    switch (num) {
        case 1:
            resetEyes();
            $('.' + tag + ', #EyeShapeName').html('Basic'); 
            break
        case 2:
            resetEyes();
            $('.' + tag + ', .eye').find('span').css('border-top','15px solid');
            $('.' + tag + ', #EyeShapeName').html('Chill'); 
            break
        case 3:
            resetEyes();
            $('.' + tag + ', .eye').find('span').css('border-bottom','15px solid');
            $('.' + tag + ', #EyeShapeName').html('Sleepy'); 
            break
        case 4:
            resetEyes();
            $('.' + tag + ', .eye').find('span').css('border-left','15px solid');
            $('.' + tag + ', #EyeShapeName').html('Right'); 
            break
        case 5:
            resetEyes();
            $('.' + tag + ', .eye').find('span').css('border-right','15px solid');
            $('.' + tag + ', #EyeShapeName').html('Left'); 
            break
        case 6:
            resetEyes();
            $('.' + tag + ', .eye').find('span').css('border-top','15px solid');
            $('.' + tag + ', .pupil-right').css('transform','rotateZ(-15deg)');
            $('.' + tag + ', .pupil-left').css('transform','rotateZ(15deg)');
            $('.' + tag + ', #EyeShapeName').html('Evil'); 
            break
        case 7:
            resetEyes();
            $('.' + tag + ', .eye').find('span').css('border-top','15px solid');
            $('.' + tag + ', .pupil-right').css('transform','rotateZ(15deg)');
            $('.' + tag + ', .pupil-left').css('transform','rotateZ(-15deg)');
            $('.' + tag + ', #EyeShapeName').html('Happy'); 
            break
        case 8:
            resetEyes();
            $('.' + tag + ', .eye').find('span').css('border-top','15px solid');
            $('.' + tag + ', .eye').find('span').css('border-bottom','15px solid');
            $('.' + tag + ', #EyeShapeName').html('Squint'); 
            break
        case 9:
            resetEyes();
            $('.' + tag + ', .eye').find('span').css('border-left','15px solid');
            $('.' + tag + ', .eye').find('span').css('border-right','15px solid');
            $('.' + tag + ', #EyeShapeName').html('Cat'); 
            break
        default:
            console.error('Recieved unhandled eye variation code:' + num);
    }
    function resetEyes() {;
        // reset all used eye shape CSS parameters
        console.groupCollapsed('SetEyeVariation(' + num + ')::resetEyes()');

        $('.' + tag + ', .eye').find('span').css('border', 'none');
        $('.' + tag + ', .pupil-right').css('transform','rotateZ(0deg)');
        $('.' + tag + ', .pupil-left').css('transform','rotateZ(0deg)');

        console.groupEnd();
    }
    console.groupEnd();
}

function SetMarkingVariation(tag, num) {
    // Render marking shape CSS from given number
    console.groupCollapsed('Calling SetMarkingVariation(' + num + ')');

    $('.' + tag + ', .dnaMarkingShape').html(num)

    switch (num) {
        case 1:
            $('.' + tag + ', #MarkingShapeName').html('Stripe');
            resetDecoration();
            break
        case 2:
            $('.' + tag + ', #MarkingShapeName').html('Chevron');
            resetDecoration();
            $('.' + tag + ', .marking-left').css({
                "transform": "rotate(-25deg)"
            });
            $('.' + tag + ', .marking-right').css({
                "transform":"rotate(25deg)"
            });
            break
        case 3:
            $('.' + tag + ', #MarkingShapeName').html('Spread');
            resetDecoration();
            $('.' + tag + ', .marking-left').css({
                "transform": "rotate(25deg)"
            });
            $('.' + tag + ', .marking-right').css({
                "transform":"rotate(-25deg)"
            });
            break
        case 4:
            $('.' + tag + ', #MarkingShapeName').html('Dots');
            resetDecoration();
            $('.' + tag + ', .marking').css({
                "height": "20px",
                "width": "20px",
                "border-radius": "50% 50% 50% 50%",
            });
            $('.' + tag + ', .marking-left').css({
                "height": "20px",
                "width": "20px",
                "border-radius": "50% 50% 50% 50%",
            });
            $('.' + tag + ', .marking-right').css({
                "height": "20px",
                "width": "20px",
                "border-radius": "50% 50% 50% 50%",
            });
            break
        case 5:
            $('.' + tag + ', #MarkingShapeName').html('Bow');
            resetDecoration();
            $('.' + tag + ', .marking').css({
                "height": "20px",
                "width": "20px",
                "border-radius": "50% 50% 50% 50%",
            });
            $('.' + tag + ', .marking-left').css({
                "height": "30px",
                "width": "20px",
                "border-radius": "50% 50% 50% 70%",
            });
            $('.' + tag + ', .marking-right').css({
                "height": "30px",
                "width": "20px",
                "border-radius": "50% 50% 50% 70%",
            });
            break
        default:
            console.error('Recieved unhandled eye variation code:' + num);
    }
    function resetDecoration(tag) {
        // Reset all used marking CSS parameters 
        console.groupCollapsed('SetMarkingVariation(' + num + ')::resetDecoration()');

        $('.' + tag + ', .marking').css({ 
            "transform": "rotate(0deg)", 
            "height": "48px", 
            "width": "14px", 
            "top": "1px", 
            "border-radius": "0 0 50% 50%" });
        $('.' + tag + ', .marking-left').css({ 
            "transform": "rotate(0deg)", 
            "height": "35px", 
            "width": "14px", 
            "top": "1px", 
            "border-radius": "50% 0 50% 50%" });
        $('.' + tag + ', .marking-right').css({ 
            "transform": "rotate(0deg)",
            "height": "35px", 
            "width": "14px", 
            "top": "1px", 
            "border-radius": "0 50% 50% 50%" });

        console.groupEnd();
    }

    console.groupEnd();

}

function SetAnimation(tag, num) {
    // set the animal's CSS animation from code 
    console.groupCollapsed('SetAnimation(' + num + ')');

    $('.' + tag + ', .dnaAnimation').html(num);

    switch (num) {
        case 1:
            clearAnimation();
            $('.' + tag + ', #AnimationCode').html('None');
            break
        case 2:
            clearAnimation();
            $('.' + tag + ', #AnimationCode').html('Rocking Head');
            $('.' + tag + ', .head').addClass('rocking');
            break
        case 3:
            clearAnimation();
            $('.' + tag + ', #AnimationCode').html('Lazy Ears');
            $('.' + tag + ', .ear--left').addClass('rockingLeftEar');
            $('.' + tag + ', .ear--right').addClass('rockingRightEar');
            break
        case 4:
            clearAnimation();
            $('.' + tag + ', #AnimationCode').html('Winking');
            $('.' + tag + ', .eye').addClass('winkingEye');
            break
        case 5:
            clearAnimation();
            $('.' + tag + ', #AnimationCode').html('Sniffle');
            $('.' + tag + ', .whiskers-left').addClass('wiggleLeftWisker');
            $('.' + tag + ', .whiskers-right').addClass('wiggleRightWisker');
            break
        default:
            console.error('Recieved unhandled animation code:' + num);
    };
    function clearAnimation(tag){
        // clear animation setting from display
        console.debug('Calling SetAnimation(' + num + ')::clearAnimation()');

        $('.' + tag + ', .head').removeClass('rocking');                  // type 2
        $('.' + tag + ', .ear--left').removeClass('rockingLeftEar');      // type 3
        $('.' + tag + ', .ear--right').removeClass('rockingRightEar');    // type 3
        $('.' + tag + ', .eye').removeClass('winkingEye');                // type 4
        $('.' + tag + ', .whiskers-left').removeClass('wiggleLeftWisker');   // type 5
        $('.' + tag + ', .whiskers-right').removeClass('wiggleRightWisker'); // type 5
    }  
    console.groupEnd();
}

console.groupEnd();
