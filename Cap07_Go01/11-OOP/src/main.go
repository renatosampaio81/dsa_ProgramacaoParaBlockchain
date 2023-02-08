// 3- Methods

package main

func main() {
	mensagem := messagePrinter{"Hello Go"} // struct = {}  |  func = ()
	mensagem.printMessage()
}

type messagePrinter struct {
	message string
}

func (mp *messagePrinter) printMessage() { // method using struct as parameter
	println(mp.message)
}



// 2- Object Creation Using Constructor
/*
package main

import "fmt"

func main() {
	user1 := myUser()
	user1.username["first_name"] = "Renato"

	fmt.Println(user1)
	
}

type user struct {
	username map[string]string
}

func myUser() *user { // Constructor
	result := user{}
	result.username = map[string]string{}

	return &result
}
*/


// 1- Basic Instantiation
/*
package main

func main() {
	user1 := user{"Renato"}
	//user1.username = "Renato"

	println(user1.username)
	
}

type user struct {
	username string
}
*/