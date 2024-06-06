export function calculatePrice(price: number, discount?: number) {
    if (!discount) {
        return price
    } else {
        return price - price / 100 * discount
    }
}