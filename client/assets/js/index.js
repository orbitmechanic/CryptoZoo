var web3= new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = '0x8Dcd51cF8De72E213f89E72F3cfcaa68608a1c68';

var gen0PopMax;
var gen0Pop;

$(document).ready(function() {
    console.debug('Attaching MetaMask request accounts.');
    console.groupCollapsed('index.js-> document.ready():');
    window.ethereum.autoRefreshOnNetworkChange = false;
    window.ethereum.request({method: 'eth_requestAccounts'}).then(async (accounts) => {
        let instance = new web3.eth.Contract(abi, contractAddress, { from: accounts[0] });
        user = accounts[0];

        console.info('Connected to MetaMask with instance:');
        console.info(instance);

        console.debug('Querying generation 0 population limit...')
        gen0PopMax = await instance.methods.genZeroPopMax();
        console.info('Population 0 limit is:' + gen0PopMax);

        console.debug('Querying generation 0 population...')
        gen0Pop = await instance.methods.genZeroPop();
        console.info('Population 0 is:' + gen0Pop);

        instance.events.Birth().on('data', function (event) {
            console.groupCollapsed('Birth Event:');
            console.info(event);

            let owner = event.returnValues.owner;
            let animalId = event.returnValues.animalId;
            let momId = event.returnValues.momId;
            let dadId = event.returnValues.dadId;
            let genes = event.returnValues.genes;

            $('#animalCreation').css('display','block');
            $('#animalCreation').text(
                'Owner: ' + owner +
                'Animal Id: ' + animalId +
                'Mother Id: ' + momID +
                'Father Id: ' + dadId +
                'Genes: ' + genes
            );

            console.groupEnd();
        }).on('error', console.error);

        await instance.methods.genZeroPop();

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