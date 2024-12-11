
pragma solidity ^0.5.0;

// definição de contrato
contract generalStructure {
    
    // state variable
    uint public val;
    
    // struct state
    struct myStruct {
        string name; 
        uint myAge; 
        bool isMarried; 
        uint[] bankAccountsNumbers; // variável - matriz dinâmica de inteiro não assinado
    }
    
    // state structure (ou struct)
    myStruct  stateStructure = myStruct("Bob", 30, true, new uint[](2));
    
    myStruct  stateStructure1;
    
    
    // function 
    function getAge ()  returns (uint) {
    
       // local structure    
       myStruct memory localStructure = myStruct("Maria", 40 ,false, new uint[](2));
       
       // local pointer to State structure
       myStruct pointerStructure = stateStructure;
       
       // pointerlocalStructure é reference para localStructure
       myStruct memory pointerlocalStructure = localStructure;
       
       // alterando valor em localStructure
       localStructure.myAge = 30;
       
       // assigning values to state variable
       stateStructure1 =   myStruct("Ritesh", 10, true, new uint[](2));
       
       // retorna pointerlocalStructure.Age
       return pointerlocalStructure.myAge;

    }
    
}

