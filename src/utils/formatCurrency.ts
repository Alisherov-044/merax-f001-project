export function formatCurrency(price: number) {
    const formatter = Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 })

    return formatter.format(price)
}