import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts("site1");
                setProducts(data);
            } catch (err) {
                setError("Error loading products");
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Products for Site 1</h1>
            {products.map((product) => (
                <div key={product.name}>
                    <h2>{product.name}</h2>
                    <p>Categories: {product.categories.map((c) => c.name).join(", ")}</p>
                    <p>Presentations: {product.presentations.map((p) => p.name).join(", ")}</p>
                    {product.siteData.length > 0 && (
                        <>
                            <p>Description: {product.siteData[0].descriptions}</p>
                            <p>Uses: {product.siteData[0].uses}</p>
                            <img src={product.siteData[0].images} alt="Product" />
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductsPage;
