// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PrivateStateVariable {
    string private privateVariable;

    constructor(string memory initialValue) {
        privateVariable = initialValue;
    }

    function setVariable(string memory newVariable) public {
        privateVariable = newVariable;
    }

    function getVariable() public view returns (string memory) {
        return privateVariable;
    }
}
