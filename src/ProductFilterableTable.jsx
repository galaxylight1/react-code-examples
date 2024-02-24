import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const products = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Vegetable", price: "$2", stocked: true, name: "Spinach"},
    {category: "Fruits", price: "$3", stocked: false, name: "Dragonfruit"}
];

export default function ProductFilterableTable() {
    return (
        <>
            <SearchBar products={products} />
            <ProductTable products={products} />
        </>
    );
}