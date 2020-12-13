$(document).ready(function() {
    // Activate index.html renderings
    console.groupCollapsed('animal::constructor()');
     
    var willCallAnimals = [];
    for (var i= 0; i<5; i++) {
        willCallAnimals.push(new animalDNA());
        willCallAnimals[i].setTag('lineup' + i);
        $('.col.lineup.slot' + i).prepend(
            sketchAnimal('bun',
                willCallAnimals[i].tag));
        willCallAnimals[i].randomize();
        willCallAnimals[i].updateDisplay();
        willCallAnimals[i].list2Tag();
    }
    console.info('index.js doc.ready fired!');

    console.groupEnd();
});