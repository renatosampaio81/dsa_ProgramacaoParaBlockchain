/*

Exercício 05 - Implemente o algorítimo de pesquisa linear (Linear Search).
Dado uma array, pequise por um item nesse array e imprima o item e seu índice.


Exercise 05 - Implement the Linear Search algorithm.
Given an array, search for an item in that array and print the item and its index.

*/

/*
//my solution
package main

import "fmt"

// função que implementa o algoritmo de pesquisa linear
func linearSearch(arr []int, target int) (int, error) {
	for i, item := range arr {
		if item == target {
			return i, nil // retorna o índice do item se encontrado
		}
	}
	return -1, fmt.Errorf("item %d não encontrado", target) // retorna um erro se o item não for encontrado
}

func main() {
	// exemplo de uso
	arr := []int{3, 5, 1, 4, 2}
	target := 4
	index, err := linearSearch(arr, target)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Printf("O item %d foi encontrado no índice %d\n", target, index)
	}
}
*/


//Teacher's Solution
package main

import "fmt"

func linearSearch(array []int, query int) int {
	for i, item := range array {
		if item == query {
			return i
		}
	}
	return -1
}

func main() {
	fmt.Println("Pesquisa Linear: ")
	array := []int{0, 2, 4, 6, 8, 10, 12, 14, 16, 18}
	index := linearSearch(array, 10)
	if index == -1 {
		fmt.Println("Número Não Encontrado")
	} else {
		fmt.Println("Index: ", index)
		fmt.Println("array[", index, "] = ", array[index])
	}
}