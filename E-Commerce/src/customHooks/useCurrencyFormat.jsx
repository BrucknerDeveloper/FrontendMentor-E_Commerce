import React from "react"

export default function useCurrencyFormat() {
    function formatCurrency(number) {
        return Intl.NumberFormat("en-US",{
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
         }).format(number)
    }
    
     return [formatCurrency]
}
