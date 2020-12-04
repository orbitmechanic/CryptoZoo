var zoo;

$(document).ready(function() {
    console.groupCollapsed('index.js::$(document).ready():');

    zoo = new ZooContract();
    zoo.applyMembership();

    // Mint Button
    document.getElementById('mintButton').onclick = function() {
        console.groupCollapsed('mintButton.onclick():');

        console.info('using zoo instance:' + zoo.toString());
        console.info('using DNA code: ' + factoryDNA.toString());

        zoo.mintGen0Animal();

        console.groupEnd();
    };

    console.groupEnd();
});