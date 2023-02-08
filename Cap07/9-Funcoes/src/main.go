package main

// Passagem por referência (ponteiros) = deixa a execućão com melhor performance
func main()  {

	mensagem := "Oi, tudo bem !?"
	dizerOi(&mensagem) //eu nao passo mensagem, eu passo a área de memória que está a var mensagem
	println(mensagem) //imprime a var que teve sua área de memória alterada

}


func dizerOi(msg *string) {
	
	println(*msg)

	*msg = "Hello Golang" //altero o conteúdo da var mensagem diretamente na área de memória
}


/* Passagem por parâmetros
func main()  {

	mensagem := "Oi, tudo bem !?"
	dizerOi(mensagem)

}


func dizerOi(msg string) {
	println(msg)
}
*/