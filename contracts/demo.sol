// SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.7;

contract demo{           
    uint val = 45;
    
    function getvalue() public view returns(uint){
        return val;
    }
    
    receive() payable external{                 //just to receive payment from low level transaction (i.e directly from calldata form transaction buttoon)
    }

    function checkbal() public view returns(uint){
        uint balance = msg.sender.balance/1000000000000000000;
        return balance;
    }
    
    function usage_send(address payable getter) payable public {
        bool result = getter.send(msg.value);                 
        require(result, "Transaction Just  Fucked by send");  
    } 

}
