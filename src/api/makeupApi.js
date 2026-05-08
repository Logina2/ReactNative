export const getProducts = async () => {
    try {
        const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
        return await response.json();
    } catch (error) {
        console.error("Error fetching data: ", error);
        return [];
    }
};