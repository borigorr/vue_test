export type Product = {
    id: number,
    name: string
}

export type State = {
    products: Product[],
    selectProductName: string | null
}