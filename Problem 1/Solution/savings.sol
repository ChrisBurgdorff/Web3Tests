pragma solidity ^0.8.7;
// SPDX-License-Identifier: MIT

contract Savings {

    address payable savingsOwner;
    uint64 savingsGoal;
    uint64 currentBalance;
	uint256 maturityTime;
    
    constructor (uint64 _savingsGoal, uint256 _maturityTime) {
        savingsOwner = payable(msg.sender);
        savingsGoal = _savingsGoal;
		maturityTime = _maturityTime;
        currentBalance = 0;
    }

    function payout() internal {
        savingsOwner.transfer(address(this).balance);
        currentBalance = 0;
    }

    function deposit(uint64 amount) payable public {
        require(msg.value == amount);
        currentBalance += amount;
        if (address(this).balance >= savingsGoal && block.timestamp >= maturityTime) {
            payout();
        }
    }
}