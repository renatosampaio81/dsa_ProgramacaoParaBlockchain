package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Wello Go!"))
	})
	log.Println("Servidor iniciado. Aguarde as solicitações em http://localhost:8000")
	http.ListenAndServe(":8000", nil)
}
