package main

import "fmt"

func main()  {
	
	MyMap := make(map[int]string) //dicionário com indexaćão utilizando núm. inteiros e conteúdo strings

	fmt.Println(MyMap)

	MyMap[52] = "primeiro"
	MyMap[23] = "segundo"

	fmt.Println(MyMap)
	
}