var web3= new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = '0x7D2f009Ac352428FeBD016D94489589a61fBaF98';

$(document).ready(function() {
    console.debug('Attaching MetaMask request accounts.');
    console.groupCollapsed('index.js-> document.ready():');
    window.ethereum.request({method: 'eth_requestAccounts'}).then(async (accounts) => {
        let instance = new web3.eth.Contract(abi, contractAddress, { from: accounts[0] });
        user = accounts[0];

        console.info('Connected to MetaMask with instance:');
        console.info(instance);

        var gen0Limit = await instance.methods.CREATION_LIMIT_GEN0().toString();
        var gen0Used = await instance.methods.genZeroPop().toString();

        console.log('Moving on....');

        console.info('Gen Zero Max Population:' + gen0Limit);
        console.info('Gen Zero current population: ' + gen0Used);

        instance.events.Birth().on('data', function (event) {
            console.groupCollapsed('Birth Event:');
            console.info(event);
            let owner = event.returnValues.owner;
            let animalId = event.returnValues.animalId;
            let momId = event.returnValues.momId;
            let dadId = event.returnValues.dadId;
            let genes = event.returnValues.genes;

            console.groupEnd();
        }).on('error', console.error);

    });
    console.groupEnd();
});

function mintAnimal(){
    console.debug('mintAnimal() called...');
    console.groupCollapsed('mintAnimal():');
    var dnaStr = getDNA();
    instance.methods.createAnimalGen0(dnaStr).send({}, function (error, txHash){
        if(err)
            console.error(err);
        else {
            console.info('Gen-Zero Animal created at Tx:');
            console.info(txHash);
        }
    })
    console.groupEnd();
}