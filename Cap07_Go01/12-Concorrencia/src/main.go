/*
	Para Programaćão Assincrona em Go temos duas opções:

	1- Goroutines - executar parte do nosso código de forma concorrente
	2- Channels - compartilhar dados entre diferentes threads em diferentes CPUs (bem mais avançado)

	Concorrência e Paralelismo não são a mesma coisa !

	-> Concorrência é usada por funções que realizam diversas atividades ao mesmo tempo em uma ou mais CPUs.
	A linguagem Go atribui uma quantidade de tempo para cada função e então passa para a função seguinte e segue esse processo
	até o fim da execução do programa.

	-> Paralelismo é usado quando enviamos diferentes tarefas para diferentes CPUs, que então são executadas em paralelo.

*/

package main

import "time"
//import "runtime"

func main() {
	//runtime.GOMAXPROCS(8) // Paralelismo

	go abcGen() // Goroutines

	time.Sleep(60 * time.Millisecond) // eu quero ver o resultado antes de voce terminar o programa

}

func abcGen() {  // generates all the letters of the alphabet
	for l := byte('a'); l <= byte('z'); l++ {
		println(string(l))
	}
}
