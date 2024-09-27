package main

import (
	"fmt"
	"net/http"
	"strconv"
)

func main() {
	http.HandleFunc("/", useMemory)
	http.ListenAndServe(":80", nil)
}

func useMemory(w http.ResponseWriter, r *http.Request) {
	// Simulate memory usage by allocating a large slice
	var memUsage []int
	for i := 0; i < 1000000; i++ {
		memUsage = append(memUsage, i)
	}

	// Print and return the last element of the slice
	last := memUsage[len(memUsage)-1]
	fmt.Printf("Last element: %d\n", last)

	// Convert the result to a string and write it to the response
	w.Write([]byte(strconv.Itoa(last)))
}