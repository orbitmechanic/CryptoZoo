var web3= new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = '0x7D2f009Ac352428FeBD016D94489589a61fBaF98';

$(document).ready(function() {
    console.debug('Attaching MetaMask request accounts.');
    console.groupCollapsed('MetaMask Hooks:');
    window.ethereum.request({method: 'eth_requestAccounts'}).then(function(accounts){
        instance = new web3.eth.Contract(abi,contractAddress, {from:accounts[0]});
        user = accounts[0];

        console.info('Connected to MetaMask with instance:');
        console.info(instance);
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