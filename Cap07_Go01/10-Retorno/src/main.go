package main

func main() {

	result := soma(1,2,3,4,5)
	println(result)
	
}


func soma(termos ...int) int { // "..." indica que eu nao sei qtos parâmetros eu vou receber, mas que eles sao int e que retornará valor int tmb 

	resultado := 0

	for _, termo := range termos { //o "_," indica que o for vai processar tudo aquilo que for retornado
		resultado += termo
	}

	return resultado

}