console.groupCollapsed('dna.js');

// automate animal management
class animal{

    constructor(tag){
        this.tag = tag;
        this.DNA = new animalDNA();
    }

    // Set tag value
    setTag(tag) {
        this.tag = tag;
    }

    // pass-through wrappers to DNA-----------------
    setDefaults(){
        this.DNA.setDefaults();
    }
    randomize(){
        this.DNA.randomize();
    }
    synchFromFactoryControls(){
        this.DNA.synchFromFactoryControls();
    }
    list2Labels(){
        this.DNA.list2Tag(this.tag);
    }
    updateDisplay(){
        this.DNA.updateDisplay(this.tag);
    }

    // Set new fur color and code to display.
    SetFurColor(color){
        console.groupCollapsed('animal::SetFurColor(#' + color + ')');
        this.DNA.furColor = color; // Update object state
        console.groupEnd();
    }
    
    // Push new  fur color and code to display.
    DisplayFurColor(){ 

        console.groupCollapsed('animal::SetFurColor()');

        var color = this.DNA.furColor; // Retrieve object state
        var code = colors(color); // retrieve code from color pallet

        //This changes the fur color of the animal
        $('.' + this.tag +', .head, .chest, .ear--left, .ear--right').css('background', '#' + color);  
        //This updates text of the badge next to the slider (factory only)
        $('.' + this.tag +', #furColorCode').html('code: ' + code); 
        //This updates the fur color part of the DNA that is displayed below the animal
        $('.' + this.tag +', .dnaFurColor').html(code);

        console.groupEnd();
    }

    // Set new under fur color and code to display.
    SetUnderFurColor(color){
        console.groupCollapsed('animal::SetUnderFurColor(#' + color + ')');
        this.DNA.underFurColor = color; // Update object state
        console.groupEnd();
    }

    // Push new under fur color and code to display.
    DisplayUnderFurColor() { 
        console.groupCollapsed('animal::DisplayUnderFurColor()');

        var color = this.DNA.underFurColor; // Retrieve object state
        var code = colors(color); // retrieve code from color pallet

        //This changes the under-fur color of the animal
        $('.' + this.tag + ', .mouth-contour, .chest_inner').css('background', '#' + color);  
        //This updates text of the badge next to the slider (factory only)
        $('.' + this.tag + ', #UnderfurColorCode').html('code: ' + code); 
        //This updates the under-fur color part of the DNA that is displayed below the animal
        $('.' + this.tag + ', .dnaUnderFurColor').html(code); 

        console.groupEnd();
    }

    // Set new eye color and code to display.
    SetEyesColor(color){
        console.groupCollapsed('animal::SetEyesColor(#' + color + ')');
        this.DNA.eyesColor = color; // Update object state
        console.groupEnd();
    }

    // Display eye and tail color and code to display.
    DisplayEyesColor() {
        console.groupCollapsed('animal::DisplayEyesColor()');

        var color = this.DNA.eyesColor; // Retrieve object state
        var code = colors(color); // retrieve code from color pallet

        //This changes the eye color of the animal
        $('.' + this.tag + ', .pupil-left, .pupil-right, .tail').css('background', '#' + color);  
        //This updates text of the badge next to the slider (factory only)
        $('.' + this.tag + ', #EyeColorCode').html('code: ' + code); 
        //This updates the eye color part of the DNA that is displayed below the animal
        $('.' + this.tag + ', .dnaEyeColor').html(code); 

        console.groupEnd();
    }

    // Set new Ears color 
    SetEarsColor(color){
        console.groupCollapsed('animal::SetEarsColor(#' + color + ')');
        this.DNA.earsColor = color; // Update object state
        console.groupEnd();
    }

    // Push new ear and paw color and code to display.
    DisplayEarsColor() {
        console.groupCollapsed('animal::SeteEarColor()');

        var color = this.DNA.earsColor; // Retrieve object state
        var code = colors(color); // retrieve code from color pallet

        //This changes the inner-ear color of the animal
        $('.' + this.tag + ', .ear--left-inside, .ear--right-inside, .paw-left, .paw-right, .paw-left_rear, .paw-right_rear')
            .css('background', '#' + color);  
        //This updates text of the badge next to the slider (factory only)
        $('.' + this.tag + ', #EarColorCode').html('code: ' + code);
        //This updates the inner-ear color part of the DNA that is displayed below the animal
        $('.' + this.tag + ', .dnaEarColor').html(code); 

        console.groupEnd();
    }

    // Set new Markings Mid color 
    SetMarkingMidColor(color){
        console.groupCollapsed('animal::SetMarkingMidColor(#' + color + ')');
        this.DNA.markingMidColor = color; // Update object state
        console.groupEnd();
    }

    // Dsiplay center marking color and code to display.
    DisplayMarkingMidColor() {
        console.groupCollapsed('animal::DisplayMarkingMidColor()');

        var color = this.DNA.markingMidColor; // Retrieve object state
        var code = colors(color); // retrieve code from color pallet

        //This changes the middle marking color of the animal
        $('.' + this.tag + ', .marking').css('background', '#' + color);  
        //This updates text of the badge next to the slider (factory only)
        $('.' + this.tag + ', #MarkingMidColorCode').html('code: ' + code); 
        //This updates the middle marking color part of the DNA that is displayed below the animal
        $('.' + this.tag + ', .dnaMarkingMidColor').html(code); 

        console.groupEnd();
    }

    // Set new Markings Side color 
    SetMarkingSidesColor(color){
        console.groupCollapsed('animal::SetMarkingSidesColor(#' + color + ')');
        this.DNA.markingSidesColor = color; // Update object state
        console.groupEnd();
    }

    // Display outer marking color.
    DisplayMarkingSidesColor() {
        console.groupCollapsed('animal::DisplayMarkingSidesColor(#' + color + ', ' + code + ')');

        var color = this.DNA.markingSidesColor; // Retrieve object state
        var code = colors(color); // retrieve code from color pallet

        //This changes the outer markings color of the animal
        $('.' + this.tag + ', .marking-left, .marking-right').css('background', '#' + color);  
        //This updates text of the badge next to the slider (factory only)
        $('.' + this.tag + ', #MarkingSideColorCode').html('code: ' + code); 
        //This updates the outer markings color part of the DNA that is displayed below the animal
        $('.' + this.tag + ', .dnaMarkingSidesColor').html(code); 

        console.groupEnd();
    }

    // Push new eye shape code to display
    SetEyeVariation(num) {
        console.groupCollapsed('animal::SetEyeVariation(' + num + ')');

        // Update object state
        this.DNA.eyesShape = num;

        // Set DNA code dispay
        $('.' + this.tag + ', .dnaEyeShape').html(num);

        switch (num) {
            case 1:
                resetEyes();
                $('.' + this.tag + ', #EyeShapeName').html('Basic'); 
                break
            case 2:
                resetEyes();
                $('.' + this.tag + ', .eye').find('span').css('border-top','15px solid');
                $('.' + this.tag + ', #EyeShapeName').html('Chill'); 
                break
            case 3:
                resetEyes();
                $('.' + this.tag + ', .eye').find('span').css('border-bottom','15px solid');
                $('.' + this.tag + ', #EyeShapeName').html('Sleepy'); 
                break
            case 4:
                resetEyes();
                $('.' + this.tag + ', .eye').find('span').css('border-left','15px solid');
                $('.' + this.tag + ', #EyeShapeName').html('Right'); 
                break
            case 5:
                resetEyes();
                $('.' + this.tag + ', .eye').find('span').css('border-right','15px solid');
                $('.' + this.tag + ', #EyeShapeName').html('Left'); 
                break
            case 6:
                resetEyes();
                $('.' + this.tag + ', .eye').find('span').css('border-top','15px solid');
                $('.' + this.tag + ', .pupil-right').css('transform','rotateZ(-15deg)');
                $('.' + this.tag + ', .pupil-left').css('transform','rotateZ(15deg)');
                $('.' + this.tag + ', #EyeShapeName').html('Evil'); 
                break
            case 7:
                resetEyes();
                $('.' + this.tag + ', .eye').find('span').css('border-top','15px solid');
                $('.' + this.tag + ', .pupil-right').css('transform','rotateZ(15deg)');
                $('.' + this.tag + ', .pupil-left').css('transform','rotateZ(-15deg)');
                $('.' + this.tag + ', #EyeShapeName').html('Happy'); 
                break
            case 8:
                resetEyes();
                $('.' + this.tag + ', .eye').find('span').css('border-top','15px solid');
                $('.' + this.tag + ', .eye').find('span').css('border-bottom','15px solid');
                $('.' + this.tag + ', #EyeShapeName').html('Squint'); 
                break
            case 9:
                resetEyes();
                $('.' + this.tag + ', .eye').find('span').css('border-left','15px solid');
                $('.' + this.tag + ', .eye').find('span').css('border-right','15px solid');
                $('.' + this.tag + ', #EyeShapeName').html('Cat'); 
                break
            default:
                console.error('Recieved unhandled eye variation code:' + num);
        }
        function resetEyes() {;
            // reset all used eye shape CSS parameters
            console.groupCollapsed('animal::SetEyeVariation(' + num + ')::resetEyes()');

            $('.' + this.tag + ', .eye').find('span').css('border', 'none');
            $('.' + this.tag + ', .pupil-right').css('transform','rotateZ(0deg)');
            $('.' + this.tag + ', .pupil-left').css('transform','rotateZ(0deg)');

            console.groupEnd();
        }
        console.groupEnd();
    }

    SetMarkingVariation(num) {
        // Render marking shape CSS from given number
        console.groupCollapsed('animal::SetMarkingVariation(' + num + ')');

        // Update object state
        this.DNA.markingShape = num;

        $('.' + this.tag + ', .dnaMarkingShape').html(num)

        switch (num) {
            case 1:
                $('.' + this.tag + ', #MarkingShapeName').html('Stripe');
                resetDecoration();
                break
            case 2:
                $('.' + this.tag + ', #MarkingShapeName').html('Chevron');
                resetDecoration();
                $('.' + this.tag + ', .marking-left').css({
                    "transform": "rotate(-25deg)"
                });
                $('.' + this.tag + ', .marking-right').css({
                    "transform":"rotate(25deg)"
                });
                break
            case 3:
                $('.' + this.tag + ', #MarkingShapeName').html('Spread');
                resetDecoration();
                $('.' + this.tag + ', .marking-left').css({
                    "transform": "rotate(25deg)"
                });
                $('.' + this.tag + ', .marking-right').css({
                    "transform":"rotate(-25deg)"
                });
                break
            case 4:
                $('.' + this.tag + ', #MarkingShapeName').html('Dots');
                resetDecoration();
                $('.' + this.tag + ', .marking').css({
                    "height": "20px",
                    "width": "20px",
                    "border-radius": "50% 50% 50% 50%",
                });
                $('.' + this.tag + ', .marking-left').css({
                    "height": "20px",
                    "width": "20px",
                    "border-radius": "50% 50% 50% 50%",
                });
                $('.' + this.tag + ', .marking-right').css({
                    "height": "20px",
                    "width": "20px",
                    "border-radius": "50% 50% 50% 50%",
                });
                break
            case 5:
                $('.' + this.tag + ', #MarkingShapeName').html('Bow');
                resetDecoration();
                $('.' + this.tag + ', .marking').css({
                    "height": "20px",
                    "width": "20px",
                    "border-radius": "50% 50% 50% 50%",
                });
                $('.' + this.tag + ', .marking-left').css({
                    "height": "30px",
                    "width": "20px",
                    "border-radius": "50% 50% 50% 70%",
                });
                $('.' + this.tag + ', .marking-right').css({
                    "height": "30px",
                    "width": "20px",
                    "border-radius": "50% 50% 50% 70%",
                });
                break
            default:
                console.error('Recieved unhandled eye variation code:' + num);
        }
        // Reset all used marking CSS parameters 
        function resetDecoration(){
            console.groupCollapsed('animal::SetMarkingVariation(' + this.tag + ')::resetDecoration()');

            $('.' + this.tag + ', .marking').css({ 
                "transform": "rotate(0deg)", 
                "height": "48px", 
                "width": "14px", 
                "top": "1px", 
                "border-radius": "0 0 50% 50%" });
            $('.' + this.tag + ', .marking-left').css({ 
                "transform": "rotate(0deg)", 
                "height": "35px", 
                "width": "14px", 
                "top": "1px", 
                "border-radius": "50% 0 50% 50%" });
            $('.' + this.tag + ', .marking-right').css({ 
                "transform": "rotate(0deg)",
                "height": "35px", 
                "width": "14px", 
                "top": "1px", 
                "border-radius": "0 50% 50% 50%" });

            console.groupEnd();
        }
    }

    // set the animal's CSS animation from code 
    SetAnimation(num) {
        console.groupCollapsed('animal::SetAnimation(' + num + ')');

        // Update object state
        this.DNA.animation = num;

        $('.' + this.tag + ', .dnaAnimation').html(num);

        switch (num) {
            case 1:
                clearAnimation();
                $('.' + this.tag + ', #AnimationCode').html('None');
                break
            case 2:
                clearAnimation();
                $('.' + this.tag + ', #AnimationCode').html('Rocking Head');
                $('.' + this.tag + ', .head').addClass('rocking');
                break
            case 3:
                clearAnimation();
                $('.' + this.tag + ', #AnimationCode').html('Lazy Ears');
                $('.' + this.tag + ', .ear--left').addClass('rockingLeftEar');
                $('.' + this.tag + ', .ear--right').addClass('rockingRightEar');
                break
            case 4:
                clearAnimation();
                $('.' + this.tag + ', #AnimationCode').html('Winking');
                $('.' + this.tag + ', .eye').addClass('winkingEye');
                break
            case 5:
                clearAnimation();
                $('.' + this.tag + ', #AnimationCode').html('Sniffle');
                $('.' + this.tag + ', .whiskers-left').addClass('wiggleLeftWisker');
                $('.' + this.tag + ', .whiskers-right').addClass('wiggleRightWisker');
                break
            default:
                console.error('Recieved unhandled animation code:' + num);
        };
        function clearAnimation(){
            // clear animation setting from display
            console.debug('animal::SetAnimation(' + num + ')::clearAnimation()');

            $('.' + this.tag + ', .head').removeClass('rocking');                  // type 2
            $('.' + this.tag + ', .ear--left').removeClass('rockingLeftEar');      // type 3
            $('.' + this.tag + ', .ear--right').removeClass('rockingRightEar');    // type 3
            $('.' + this.tag + ', .eye').removeClass('winkingEye');                // type 4
            $('.' + this.tag + ', .whiskers-left').removeClass('wiggleLeftWisker');   // type 5
            $('.' + this.tag + ', .whiskers-right').removeClass('wiggleRightWisker'); // type 5
        }  
        console.groupEnd();
    }

    updateDisplay(tag){
        console.groupCollapsed('animal::render2Tag(' + this.tag + ')');
        // Color codes
        SetFurColor();
        $('.' + this.tag + ', .furColorControl').val(this.DNA.furColor); // factory only.
      
        SetUnderFurColor();
        $('.' + this.tag + ', .UnderfurColorControl').val(this.DNA.underFurColor); // factory only.
      
        SetEyeColor(this.tag, colors[this.DNA.eyesColor],this.DNA.eyesColor);
        $('.' + this.tag + ', .EyeColorControl').val(this.DNA.eyesColor); // factory only.
      
        SetEarColor(this.tag, colors[this.DNA.earsColor],this.DNA.earsColor);
        $('.' + this.tag + ', .EarColorControl').val(this.DNA.earsColor); // factory only.
    
        SetMarkingMidColor(this.tag, colors[this.DNA.markingMidColor],this.DNA.markingMidColor);
        $('.' + this.tag + ', .MarkingMidColorControl').val(this.DNA.markingMidColor); // factory only.
      
        SetMarkingSidesColor(this.tag, colors[this.DNA.markingSidesColor],this.DNA.markingSidesColor);
        $('.' + this.tag + ', .MarkingSideColorControl').val(this.DNA.markingSidesColor); // factory only.
      
        // Attribute Codes
        SetEyeVariation(this.tag, this.DNA.eyesShape);
        $('.' + this.tag + ', .EyeShapeControl').val(this.DNA.eyesShape); // factory only.
      
        SetMarkingVariation(this.tag, this.DNA.markingShape);
        $('.' + this.tag + ', .MarkingShapeControl').val(this.DNA.markingShape); // factory only.
      
        SetAnimation(this.tag, this.DNA.animation);
        $('.' + this.tag + ', .AnimationControl').val(this.DNA.animation); // factory only.
      
        console.groupEnd();
      }

}

// Where:
//     species: animal species tag.  i.e. 'bun', 'cat', 'dog', etc.
//     Id: tag for a specific instance (will be rendered as a class)
//     showBox: 'on' or 'off' to render or not render box visibility.

// Generate html for an animal
function sketchAnimal(species,Id){
console.debug('sketchAnimal(' + species + ', ' + Id +')');
console.groupEnd();
return `<!-- ${species} ------------------------------------------------>
<div class='${species + ' ' + Id}'>
    <div class='${species + ' ' + Id} ear'>
        <div class='${species + ' ' + Id} ear--left'>
            <div class='${species + ' ' + Id} ear--left-inside'></div>
        </div>
        <div class='${species + ' ' + Id} ear--right'>
            <div class='${species + ' ' + Id} ear--right-inside'></div>
        </div>
    </div>
    <div class='${species + ' ' + Id} head movingHead'>
        <div class='${species + ' ' + Id} marking'>
            <div class='${species + ' ' + Id} marking-left'></div>
            <div class='${species + ' ' + Id} marking-right'></div>
        </div>
        <div class='${species + ' ' + Id} eye'>
            <div class='${species + ' ' + Id} eye--left'>
                <span class='${species + ' ' + Id} pupil-left'></span>
            </div>
            <div class='${species + ' ' + Id} eye--right'>
                <span class='${species + ' ' + Id} pupil-right'></span>
            </div>
        </div>

        <div class='${species + ' ' + Id} nose'></div>
        <div class='${species + ' ' + Id} mouth-contour'></div>
        <div class='${species + ' ' + Id} mouth-left'></div>
        <div class='${species + ' ' + Id} mouth-right'></div>
        <div class='${species + ' ' + Id} whiskers-left'></div>
        <div class='${species + ' ' + Id} whiskers-right'></div>
    </div>

    <div class='${species + ' ' + Id} body'>
        
        <div class='${species + ' ' + Id} chest'></div>
        <div class='${species + ' ' + Id} chest_inner'></div>

        <div class='${species + ' ' + Id} paw-left'></div>
        <div class='${species + ' ' + Id} paw-left_rear'></div>

        <div class='${species + ' ' + Id} paw-right'></div>
        <div class='${species + ' ' + Id} paw-right_rear'></div>


        <div class='${species + ' ' + Id} tail'></div>
    </div>
</div>`;
}
    
// generate a visible label to output DNA to the user
function dnaLabel(species, Id){
console.debug('dnaLabel(' + species + ', ' + Id +')');
console.groupEnd();
return `<div class='dnaDiv'>
<b>${species} DNA:
    <!-- Colors Codes -->
    <span class='${species + ' ' + Id} dnaFurColor'></span>
    <span class='${species + ' ' + Id} dnaUnderFurColor'></span>
    <span class='${species + ' ' + Id} dnaEyeColor'></span>
    <span class='${species + ' ' + Id} dnaEarColor'></span>
    <span class='${species + ' ' + Id} dnaMarkingMidColor'></span>
    <span class='${species + ' ' + Id} dnaMarkingSidesColor'></span>

    <!-- Attribute Codes -->
    <span class='${species + ' ' + Id} dnaEyeShape'></span>
    <span class='${species + ' ' + Id} dnaMarkingShape'></span>
    <span class='${species + ' ' + Id} dnaAnimation'></span>
    <span class='${species + ' ' + Id} dnaSpecial'></span>
</b>
</div>`;
}
    
// Usual frame for examining an animal w/ DNA tag
function examBox(species, Id, showBox){
console.debug('examBox(' + species + ', ' + Id + ',' + showBox +')');
console.groupEnd();
return `<div class='${species} box${showBox} ${Id} m-2 light-b-shadow'>
${sketchAnimal(species, Id)}
${dnaLabel(species,Id)}
<div>`;
}

// Usual frame for displaying an animal w/o DNA tag
function displayBox(species, Id, showBox){
console.debug('displayBox(' + species + ', ' + Id + ',' + showBox +')');
console.groupEnd();
return `<div class='${species} box${showBox} ${Id} m-2 light-b-shadow'>
${sketchAnimal(species, Id)}
<div>`;
}

console.groupEnd();
