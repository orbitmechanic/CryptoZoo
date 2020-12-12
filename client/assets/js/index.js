class animal {
    constructor(){
        console.groupCollapsed('animal::constructor()');

        // Default Colors
        this.DNA = new animalDNA();
        this.tag = '';
    
        console.groupEnd();
    }


}

$(document).ready(function() {
    // Activate index.html renderings
    console.groupCollapsed('animal::constructor()');
     
    var willCallDNA = [];
    for (var i= 0; i<5; i++)
        willCallDNA.push(new animalDNA());

    $('.col.lineup.slot').prepend(sketchAnimal('bun','test','off'));
    console.info('index.js doc.ready fired!');

    console.groupEnd();
});