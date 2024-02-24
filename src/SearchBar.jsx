export default function SearchBar({ products }) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <input type="text" placeholder="Search..." style={{width: "200px"}} />
                <label>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </label>
            </div>
        </>
    );
}