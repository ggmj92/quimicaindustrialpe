export const fetchProducts = async (site = "site1") => {
    try {
        const url = new URL("http://localhost:3000/productos");
        if (site) url.searchParams.append("site", site);

        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
