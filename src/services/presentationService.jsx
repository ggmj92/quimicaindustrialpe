export const fetchPresentations = async () => {
    try {
        const response = await fetch("http://localhost:3000/presentaciones");
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};