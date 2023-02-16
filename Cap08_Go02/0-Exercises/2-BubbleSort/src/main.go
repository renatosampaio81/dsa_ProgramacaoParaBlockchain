/*
Exercício 02 - Implemente o famoso algorítimo Buble Sort para ordenar uma lista de valores.


Exercise 02 - Implement the famous Buble Sort algorithm to sort a list of values.
*/

/*
//my solution
package main

import "fmt"

func bubbleSort(arr []int) {
    n := len(arr)

    // Passa pela lista várias vezes
    for i := 0; i < n-1; i++ {
        // Realiza uma passagem
        for j := 0; j < n-i-1; j++ {
            // Compara pares adjacentes
            if arr[j] > arr[j+1] {
                // Troca se estiverem na ordem errada
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
}

func main() {
    arr := []int{64, 25, 12, 22, 11}

    fmt.Println("Lista antes da ordenação:", arr)

    bubbleSort(arr)

    fmt.Println("Lista após a ordenação:", arr)
}
*/

// Teacherś solution
package main

import (
	"fmt"
)

func bubbleSort(arrayzor []int) {
	swapped := true
	for swapped {
		swapped = false
		for i := 0; i < len(arrayzor)-1; i++ {
			if arrayzor[i+1] < arrayzor[i] {
				Swap(arrayzor, i, i + 1)
				swapped = true
			}
		}
	}
}

func Swap(arrayzor []int, i, j int) {
	tmp := arrayzor[j]
	arrayzor[j] = arrayzor[i]
	arrayzor[i] = tmp
}

func main() {
	arrayzor := []int{1, 6, 2, 4, 9, 0, 5, 3, 7, 8}
	fmt.Println("Array Original: ", arrayzor)
	bubbleSort(arrayzor)
	fmt.Println("Array Ordenado: ", arrayzor)
}
