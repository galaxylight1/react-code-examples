import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const products = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: true, name: "Brocolli"},
    {category: "Fruits", price: "$3", stocked: false, name: "Dragonfruit"}
];

export default function ProductFilterableTable() {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <>
            <SearchBar products={products} filterText={filterText} inStockOnly={inStockOnly} />
            <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
        </>
    );
}