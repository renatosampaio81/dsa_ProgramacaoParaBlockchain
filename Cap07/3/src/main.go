package main

/*
const (
	primeiro = "primeiro"
	segundo = "segundo"
	terceiro = "terceiro"
)
*/

const (
	primeiro = iota //indexador de constantes
	segundo
	terceiro
)

func main(){
	println(primeiro)
	println(segundo)
	println(terceiro)
}