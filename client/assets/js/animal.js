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

    // Set new fur color and code to display.
    SetFurColor(color){
        console.groupCollapsed('animal(' + this.tag + ')::SetFurColor(#' + color + ')');
        this.DNA.furColor = color; // Update object state
        console.groupEnd();
    }
    
    // Push new  fur color and code to display.
    DisplayFurColor(){ 

        console.groupCollapsed('animal(' + this.tag + ')::DisplayFurColor()');

        var color = this.DNA.furColor; // Retrieve object state
        var code = colors[color]; // retrieve code from color pallet

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
        console.groupCollapsed('animal(' + this.tag + ')::SetUnderFurColor(#' + color + ')');
        this.DNA.underFurColor = color; // Update object state
        console.groupEnd();
    }

    // Push new under fur color and code to display.
    DisplayUnderFurColor() { 
        console.groupCollapsed('animal(' + this.tag + ')::DisplayUnderFurColor()');

        var color = this.DNA.underFurColor; // Retrieve object state
        var code = colors[color]; // retrieve code from color pallet

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
        console.groupCollapsed('animal(' + this.tag + ')::SetEyesColor(#' + color + ')');
        this.DNA.eyesColor = color; // Update object state
        console.groupEnd();
    }

    // Display eye and tail color and code to display.
    DisplayEyesColor() {
        console.groupCollapsed('animal(' + this.tag + ')::DisplayEyesColor()');

        var color = this.DNA.eyesColor; // Retrieve object state
        var code = colors[color]; // retrieve code from color pallet

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
        console.groupCollapsed('animal(' + this.tag + ')::SetEarsColor(#' + color + ')');
        this.DNA.earsColor = color; // Update object state
        console.groupEnd();
    }

    // Push new ear and paw color and code to display.
    DisplayEarsColor() {
        console.groupCollapsed('animal(' + this.tag + ')::DisplayEarColor()');

        var color = this.DNA.earsColor; // Retrieve object state
        var code = colors[color]; // retrieve code from color pallet

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
        console.groupCollapsed('animal(' + this.tag + ')::SetMarkingMidColor(#' + color + ')');
        this.DNA.markingMidColor = color; // Update object state
        console.groupEnd();
    }

    // Dsiplay center marking color and code to display.
    DisplayMarkingMidColor() {
        console.groupCollapsed('animal(' + this.tag + ')::DisplayMarkingMidColor()');

        var color = this.DNA.markingMidColor; // Retrieve object state
        var code = colors[color]; // retrieve code from color pallet

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
        console.groupCollapsed('animal(' + this.tag + ')::SetMarkingSidesColor(#' + color + ')');
        this.DNA.markingSidesColor = color; // Update object state
        console.groupEnd();
    }

    // Display outer marking color.
    DisplayMarkingSidesColor() {
        console.groupCollapsed('animal(' + this.tag + ')::DisplayMarkingSidesColor()');

        var color = this.DNA.markingSidesColor; // Retrieve object state
        var code = colors[color]; // retrieve code from color pallet

        //This changes the outer markings color of the animal
        $('.' + this.tag + ', .marking-left, .marking-right').css('background', '#' + color);  
        //This updates text of the badge next to the slider (factory only)
        $('.' + this.tag + ', #MarkingSideColorCode').html('code: ' + code); 
        //This updates the outer markings color part of the DNA that is displayed below the animal
        $('.' + this.tag + ', .dnaMarkingSidesColor').html(code); 

        console.groupEnd();
    }

    // Set new eye shape 
    SetEyeShape(num){
        console.groupCollapsed('animal(' + this.tag + ')::SetEyeShape(#' + num + ')');
        this.DNA.eyesShape = num; // Update object state
        console.groupEnd();
    }

    // Push new eye shape code to display
    DisplayEyeShape() {
        console.groupCollapsed('animal(' + this.tag + ')::DisplayEyeShape()');

        // Update object state
        var num = this.DNA.eyesShape;

        // Set DNA code dispay
        $('.' + this.tag + ', .dnaEyeShape').html(num); 

        const resetEyes = () => {
            // reset all used eye shape CSS parameters
            console.groupCollapsed('animal(' + this.tag + ')::SetEyeShape(' + num + ')::resetEyes()');

            $('.' + this.tag + ', .eye').find('span').css('border', 'none');
            $('.' + this.tag + ', .pupil-right').css('transform','rotateZ(0deg)');
            $('.' + this.tag + ', .pupil-left').css('transform','rotateZ(0deg)');

            console.groupEnd();
        }

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

        console.groupEnd();
    }

    // Set new marking shape 
    SetMarkingShape(num){
        console.groupCollapsed('animal(' + this.tag + ')::SetMarkingShape(#' + num + ')');
        this.DNA.markingShape = num; // Update object state
        console.groupEnd();
    }

    DisplayMarkingShape() {
        // Render marking shape CSS from given number
        console.groupCollapsed('animal(' + this.tag + ')::DisplayMarkingShape()');

        // Update object state
        var num = this.DNA.markingShape;

        $('.' + this.tag + ', .dnaMarkingShape').html(num);

        // Reset all used marking CSS parameters 
        const resetDecoration = ()=>{
            console.groupCollapsed('animal(' + this.tag + ')::SetMarkingShape(' + num + ')::resetDecoration()');

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
                console.error('animal(' + this.tag + ') >> Recieved unhandled eye variation code:' + num);
        }
        
    }

    // Set the animal's CSS animation from code  
    SetAnimaton(num){
        console.groupCollapsed('animal(' + this.tag + ')::SetAnimaton(#' + num + ')');
        this.DNA.animation = num; // Update object state
        console.groupEnd();
    }

    // Display the animal's CSS animation from code 
    DisplayAnimation() {
        console.groupCollapsed('animal(' + this.tag + ')::DisplayAnimation()');

        // Update object state
        var num = this.DNA.animation;

        $('.' + this.tag + ', .dnaAnimation').html(num);

        const clearAnimation = () =>{
            // clear animation setting from display
            console.debug('animal(' + this.tag + ')::DisplayAnimation(#' + num + ')::clearAnimation()');

            $('.' + this.tag + ', .head').removeClass('rocking');                     // type 2
            $('.' + this.tag + ', .ear--left').removeClass('rockingLeftEar');         // type 3
            $('.' + this.tag + ', .ear--right').removeClass('rockingRightEar');       // type 3
            $('.' + this.tag + ', .eye').removeClass('winkingEye');                   // type 4
            $('.' + this.tag + ', .whiskers-left').removeClass('wiggleLeftWisker');   // type 5
            $('.' + this.tag + ', .whiskers-right').removeClass('wiggleRightWisker'); // type 5
        }  
        console.groupEnd();

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

    }

    updateDisplay(){
        console.groupCollapsed('animal(' + this.tag + ')::updateDisplay()');

        // Display all color codes
        this.DisplayFurColor();
        this.DisplayUnderFurColor();
        this.DisplayEyesColor();
        this.DisplayEarsColor();
        this.DisplayMarkingMidColor();
        this.DisplayMarkingSidesColor();
        
        // Display all attribute codes
        this.DisplayEyeShape();
        this.SetMarkingShape();
        this.DisplayAnimation();

        // Color codes to factory control labels
        $('.' + this.tag + ', .furColorControl').val(this.DNA.furColor); 
        $('.' + this.tag + ', .UnderfurColorControl').val(this.DNA.underFurColor); 
        $('.' + this.tag + ', .EyeColorControl').val(this.DNA.eyesColor); 
        $('.' + this.tag + ', .EarColorControl').val(this.DNA.earsColor); 
        $('.' + this.tag + ', .MarkingMidColorControl').val(this.DNA.markingMidColor); 
        $('.' + this.tag + ', .MarkingSideColorControl').val(this.DNA.markingSidesColor); 

        // Attributes to factory control labels
        $('.' + this.tag + ', .EyeShapeControl').val(this.DNA.eyesShape); 
        $('.' + this.tag + ', .MarkingShapeControl').val(this.DNA.markingShape); 
        $('.' + this.tag + ', .AnimationControl').val(this.DNA.animation); 
      
        console.groupEnd();
    }

    list2Tag() {
        console.groupCollapsed('animalDNA::list2Tag(' + this.tag + ')');
    
        // Color codes
        $('.' + this.tag + ', .dnaFurColor').html(this.DNA.furColor);
        $('.' + this.tag + ', .dnaUnderFurColor').html(this.DNA.underFurColor);
        $('.' + this.tag + ', .dnaEyeColor').html(this.DNA.eyesColor);
        $('.' + this.tag + ', .dnaEarColor').html(this.DNA.earsColor);
        $('.' + this.tag + ', .dnaMarkingMidColor').html(this.DNA.markingMidColor);
        $('.' + this.tag + ', .dnaMarkingSidesColor').html(this.DNA.markingSidesColor);
        // Attribute codes
        $('.' + this.tag + ', .dnaEyeShape').html(this.DNA.eyesShape);
        $('.' + this.tag + ', .dnaMarkingShape').html(this.DNA.dnaMarkingShape);
        $('.' + this.tag + ', .dnaAnimation').html(this.DNA.animation);
        $('.' + this.tag + ', .dnaSpecial').html(this.DNA.special);
    
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
