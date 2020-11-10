var zoo;

$(document).ready(function() {
    console.groupCollapsed('index.js::$(document).ready():');

    zoo = new ZooContract();
    zoo.applyMembership();

    // Mint Button
    document.getElementById('mintButton').onclick = function() {
        console.groupCollapsed('mintButton.onclick():');

        console.info('using zoo instance:');
        console.info(zoo.toString());

        console.debug('Creating blank DNA...');
        const dna = new animalDNA();
        console.debug('Retrieving DNA from factory controls...');
        dna.synchFromFactoryControls();
        console.info('Retrieved DNA code: ' + dna);

        console.debug('Calling mint function...')
        zoo.mintGen0Animal();

        console.groupEnd();
    };

    console.groupEnd();
});