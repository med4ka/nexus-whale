package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	
	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET")
		c.Next()
	})

	r.GET("/api/eth", func(c *gin.Context) {
		
		ethPriceIDR := 52000000.0

		resp, err := http.Get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=idr")
		if err == nil {
			defer resp.Body.Close()
			body, _ := ioutil.ReadAll(resp.Body)

			
			var data map[string]map[string]float64
			if json.Unmarshal(body, &data) == nil {
				if price, ok := data["ethereum"]["idr"]; ok && price > 0 {
					ethPriceIDR = price 
				}
			}
		}

		prices := []float64{
			ethPriceIDR * 0.90, 
			ethPriceIDR * 0.93, 
			ethPriceIDR * 0.89, 
			ethPriceIDR * 0.96, 
			ethPriceIDR * 0.95, 
			ethPriceIDR * 0.99, 
			ethPriceIDR,       
		}

		c.JSON(200, gin.H{
			"price_idr": ethPriceIDR,
			"chart":     prices,
		})
	})

	fmt.Println("Web anda jalan di http://localhost:8080")
	r.Run(":8080")
}
