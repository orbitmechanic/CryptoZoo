var web3= new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = '0x7D2f009Ac352428FeBD016D94489589a61fBaF98';

$(document).ready(function() {
    window.ethereum.request({method: 'eth_requestAccounts'}).then(function(accounts){
        instance = new web3.eth.Contract(abi,contractAddress, {from:accounts[0]});
        user = accounts[0];

        console.log(instance);

        instance.methods.createAnimalGen0(dnaStr).send({}, function (error, txHash){
            if(err)
                console.log(err);
            else {
                console.log(txHash);
            }
        })
    });
});