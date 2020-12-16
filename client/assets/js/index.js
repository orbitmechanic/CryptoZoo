$(document).ready(function() {
    // Activate index.html renderings
    console.groupCollapsed('animal::constructor()');
     
    var willCallAnimals = [];

    // Instantiate
    for (var i= 1; i<=5; i++) {
        willCallAnimals.push(new animal('lineup' + i));
        $('.col.lineup.slot' + i).prepend(
            sketchAnimal('bun', 'lineup' + i));
    };

    // Initialize
    willCallAnimals.forEach(function (animal){
        animal.randomize();
        animal.updateDisplay();
        animal.list2Tag();
    });

    console.info('index.js doc.ready fired!');

    console.groupEnd();
});