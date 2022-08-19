# Savings Account Contract

Write a smart contract that stores Ether for a user and fulfills the following criteria:

- Anyone can deposit Ether into the contract, but no one can manually withdraw.

- The owner (originator) does not get any Ether until the balance reaches a preset *savings goal*

- The owner can not get any Ether before a preset *maturity date* is reached.

- Once a deposit makes the contract balance equal to (or more than) the *savings goal*, the entire balance is sent to the owner, **only if the maturity date has passed.**

Set the *savings goal* and the *maturity date* on deployment of the contract.

Don't use a more permissive visibility than necessary for any variables or functions.
