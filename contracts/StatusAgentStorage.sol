// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title StatusAgentStorage
 * @dev A simple storage contract for AI agent to interact with on Status Network
 * This contract allows the AI agent to store and retrieve values, demonstrating
 * gasless transactions on Status Network.
 */
contract StatusAgentStorage {
    uint256 private storedValue;
    address private owner;
    
    // Event to track agent interactions
    event ValueStored(address indexed agent, uint256 value, uint256 timestamp);
    event ValueRetrieved(address indexed agent, uint256 value, uint256 timestamp);
    
    constructor() {
        owner = msg.sender;
    }
    
    /**
     * @dev Store a value (AI agent calls this)
     * @param _value The value to store
     */
    function store(uint256 _value) external {
        storedValue = _value;
        emit ValueStored(msg.sender, _value, block.timestamp);
    }
    
    /**
     * @dev Retrieve the stored value
     * @return The stored value
     */
    function retrieve() external returns (uint256) {
        emit ValueRetrieved(msg.sender, storedValue, block.timestamp);
        return storedValue;
    }
    
    /**
     * @dev Get the stored value (view function, no gas)
     * @return The stored value
     */
    function getStoredValue() external view returns (uint256) {
        return storedValue;
    }
    
    /**
     * @dev Get owner address
     * @return The contract owner
     */
    function getOwner() external view returns (address) {
        return owner;
    }
}
