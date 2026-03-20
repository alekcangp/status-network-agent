// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title StatusNotebook
 * @dev A simple smart contract notebook for storing text entries on Status Network
 * 
 * All data is stored as text entries - the LLM analyzes and retrieves relevant info
 * Features gasless transactions on Status Network
 */
contract StatusNotebook {
    // Struct for a text entry
    struct TextEntry {
        string text;
        address author;
        uint256 timestamp;
    }
    
    // Storage
    TextEntry[] private entries;
    address private owner;
    
    // Events
    event TextStored(address indexed author, string text, uint256 timestamp);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }
    
    constructor() {
        owner = msg.sender;
    }
    
    /**
     * @dev Store a text entry
     * @param _text The text to store
     */
    function store(string memory _text) external {
        require(bytes(_text).length > 0, "Text cannot be empty");
        
        entries.push(TextEntry({
            text: _text,
            author: msg.sender,
            timestamp: block.timestamp
        }));
        
        emit TextStored(msg.sender, _text, block.timestamp);
    }
    
    /**
     * @dev Get total entry count
     */
    function getCount() external view returns (uint256) {
        return entries.length;
    }
    
    /**
     * @dev Get entry by index
     * @param _index The index of the entry
     */
    function getEntry(uint256 _index) external view returns (string memory text, address author, uint256 timestamp) {
        require(_index < entries.length, "Index out of bounds");
        TextEntry storage entry = entries[_index];
        return (entry.text, entry.author, entry.timestamp);
    }
    
    /**
     * @dev Get all entries (for LLM analysis)
     */
    function getAllEntries() external view returns (TextEntry[] memory) {
        return entries;
    }
    
    /**
     * @dev Get the latest entry
     */
    function getLatest() external view returns (string memory text, address author, uint256 timestamp) {
        require(entries.length > 0, "No entries stored");
        TextEntry storage entry = entries[entries.length - 1];
        return (entry.text, entry.author, entry.timestamp);
    }
    
    /**
     * @dev Get contract info
     */
    function getInfo() external view returns (address _owner, uint256 _entryCount) {
        return (owner, entries.length);
    }
}
