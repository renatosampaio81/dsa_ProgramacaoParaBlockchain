package main

func main()  {

	lista2 := make(map[string]string) //map

	lista2["primeiro"] = "Aprendendo"
	lista2["segundo"] = "Linguagem"
	lista2["terceiro"] = "Go"

	for k, v := range lista2 { // v é o intervalo da lista2
		println(k, v)
	}

	/*
	lista := []string{"primeiro", "segundo", "terceiro"} //array

	for idx, v := range lista {
		println(idx,v)
	}
	*/

	/*
	i := 0

	for {
		i++
		println(i)

		if i>10 {
			break
		}
	}
	*/

	/*
	for i := 0; i <5; i++ {
		println(i)
	}
	*/

}
