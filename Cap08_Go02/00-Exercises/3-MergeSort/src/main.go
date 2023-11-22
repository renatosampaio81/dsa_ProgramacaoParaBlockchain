/*

Exercício 03 - Implemente o famoso algorítimo Merge Sort para ordenar uma lista de valores.

Exercise 03 - Implement the famous Merge Sort algorithm to sort a list of values.

*/

/*
//my solution
package main

import (
	"fmt"
)

func mergeSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	middle := len(arr) / 2
	left := make([]int, middle)
	right := make([]int, len(arr)-middle)

	for i := 0; i < len(arr); i++ {
		if i < middle {
			left[i] = arr[i]
		} else {
			right[i-middle] = arr[i]
		}
	}

	left = mergeSort(left)
	right = mergeSort(right)

	return merge(left, right)
}

func merge(left, right []int) []int {
	var result []int

	for len(left) > 0 || len(right) > 0 {
		if len(left) > 0 && len(right) > 0 {
			if left[0] <= right[0] {
				result = append(result, left[0])
				left = left[1:]
			} else {
				result = append(result, right[0])
				right = right[1:]
			}
		} else if len(left) > 0 {
			result = append(result, left[0])
			left = left[1:]
		} else if len(right) > 0 {
			result = append(result, right[0])
			right = right[1:]
		}
	}

	return result
}

func main() {
	arr := []int{3, 6, 1, 8, 4, 2, 9, 7, 5}
	fmt.Println("Unsorted array:", arr)

	sortedArr := mergeSort(arr)
	fmt.Println("Sorted array:", sortedArr)
}
*/

//Teacher's Solution
package main

import "fmt"

func merge(a[]int, b[]int) []int {
	var r = make([]int, len(a)+len(b))
	var i = 0
	var j = 0

	for i < len(a) && j < len(b) {
		if a[i] <= b[j] {
			r[i+j] = a[i]
			i++
		} else {
			r[i+j] = b[j]
			j++
		}
	}

	for i < len(a) {
		r[i+j] = a[i]
		i++
	}
	for j < len(b) {
		r[i+j] = b[j]
		j++
	}

	return r
}

func Mergesort(items []int) []int {
	if len(items) < 2 {
		return items
	}

	var middle = len(items)/2
	var a = Mergesort(items[:middle])
	var b = Mergesort(items[middle:])
	return merge(a, b)
}

func main() {
	fmt.Println(Mergesort([]int{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}), "\n")
}