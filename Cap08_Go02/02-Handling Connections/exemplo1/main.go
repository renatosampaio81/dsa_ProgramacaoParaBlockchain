// Usando http.Handle para tratar conexoes em aplicacoes web

package main

import (
	"fmt"
	"net/http"
)

// A struct myHandler tem um campo boasvindas do tipo string
type myHandler struct {
	boasvindas string
}

// A função ServeHTTP implementa a interface http.Handler
func (mh myHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte(fmt.Sprintf("%s world", mh.boasvindas)))
}

func main() {
	// Criando uma instância de myHandler com uma mensagem de boas-vindas
	handler := myHandler{boasvindas: "Hello"}

	// Registrando o handler para a rota "/"
	http.Handle("/", handler)

	// Iniciando o servidor na porta 8000
	http.ListenAndServe(":8000", nil)
}
