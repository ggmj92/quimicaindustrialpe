export const fetchProducts = async () => {
    try {
        const response = await fetch("http://localhost:5001/api/public/productos");
        const data = await response.json();
        console.log('API Response:', data);
        console.log('Number of products:', data.data?.length);

        const productsArray = data.data;

        if (Array.isArray(productsArray)) {
            const formattedProducts = productsArray.map((product) => ({
                _id: product._id,
                name: product.name,
                presentations: product.presentations,
                categories: product.categories,
                image: product.images.site1,
                description: product.descriptions.site1,
                use: product.uses.site1,
            }));
            console.log('Formatted products:', formattedProducts);
            return formattedProducts;
        } else {
            throw new Error("Fetched data is not an array");
        }
    } catch (error) {
        console.error('Error in fetchProducts:', error);
        throw new Error(`Error fetching products: ${error.message}`);
    }
};


