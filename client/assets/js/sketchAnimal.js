// Generate html for an animal

function sketchAnimal(species,Id){
// Generate html for an animal
return `<!-- ${species} ------------------------------------------------>
<div class='${species + ' ' + Id}'>
    <div class='${species + ' ' + Id} ear'>
        <div class="${species + ' ' + Id} ear--left">
            <div class="${species + ' ' + Id} ear--left-inside"></div>
        </div>
        <div class="${species + ' ' + Id} ear--right">
            <div class="${species + ' ' + Id} ear--right-inside"></div>
        </div>
    </div>
    <div class='${species + ' ' + Id} head movingHead'>
        <div class="${species + ' ' + Id} marking">
            <div class="${species + ' ' + Id} marking-left"></div>
            <div class="${species + ' ' + Id} marking-right"></div>
        </div>
        <div class="${species + ' ' + Id} eye">
            <div class="${species + ' ' + Id} eye--left">
                <span class="${species + ' ' + Id} pupil-left"></span>
            </div>
            <div class="${species + ' ' + Id} eye--right">
                <span class="${species + ' ' + Id} pupil-right"></span>
            </div>
        </div>

        <div class="${species + ' ' + Id} nose"></div>
        <div class="${species + ' ' + Id} mouth-contour"></div>
        <div class="${species + ' ' + Id} mouth-left"></div>
        <div class="${species + ' ' + Id} mouth-right"></div>
        <div class="${species + ' ' + Id} whiskers-left"></div>
        <div class="${species + ' ' + Id} whiskers-right"></div>
    </div>

    <div class='${species + ' ' + Id} body'>
        
        <div class="${species + ' ' + Id} chest"></div>
        <div class="${species + ' ' + Id} chest_inner"></div>

        <div class="${species + ' ' + Id} paw-left"></div>
        <div class="${species + ' ' + Id} paw-left_rear"></div>

        <div class="${species + ' ' + Id} paw-right"></div>
        <div class="${species + ' ' + Id} paw-right_rear"></div>


        <div class="${species + ' ' + Id} tail"></div>
    </div>
</div>`;
}

function dnaLabel(species, Id){
// generate a visible label to output DNA to the user
return `<div class="dnaDiv">
<b>${species} DNA:
    <!-- Colors Codes -->
    <span class="${species + ' ' + Id} dnaFurColor"></span>
    <span class="${species + ' ' + Id} dnaUnderFurColor"></span>
    <span class="${species + ' ' + Id} dnaEyeColor"></span>
    <span class="${species + ' ' + Id} dnaEarColor"></span>
    <span class="${species + ' ' + Id} dnaMarkingMidColor"></span>
    <span class="${species + ' ' + Id} dnaMarkingSidesColor"></span>

    <!-- Attribute Codes -->
    <span class="${species + ' ' + Id} dnaEyeShape"></span>
    <span class="${species + ' ' + Id} dnaMarkingShape"></span>
    <span class="${species + ' ' + Id} dnaAnimation"></span>
    <span class="${species + ' ' + Id} dnaSpecial"></span>
</b>
</div>`;
}

function shippingBox(species, Id){
// Usual frame for an animal
return `<div class='${species}box ${Id} m-2 light-b-shadow'>
${sketchAnimal(species, Id)}
${dnaLabel(species,Id)}
<div>`;
}
