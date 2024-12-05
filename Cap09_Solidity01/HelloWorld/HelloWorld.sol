pragma solidity ^0.8.2;

contract HelloWorld {

    string public message;

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

}