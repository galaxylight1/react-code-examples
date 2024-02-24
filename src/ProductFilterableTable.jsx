import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const products = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Vegetable", price: "$2", stocked: false, name: "Spinach"},
    {category: "Fruits", price: "$3", stocked: true, name: "Dragonfruit"}
];

export default function ProductFilterableTable() {
    return (
        <>
            <SearchBar products={products} />
            <ProductTable products={products} />
        </>
    );
}