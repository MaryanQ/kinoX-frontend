const isProduction = import.meta.env.MODE === "production";

// Define the API URL for development mode
const DEV_API_URL = "https://kinocinema.azurewebsites.net";

const URL = isProduction ? import.meta.env.VITE_PROD_API_BASE_URL : DEV_API_URL;

const MODE = isProduction ? "Production" : "Development";
console.info(MODE + " API URL: " + URL);
console.info("ENV", import.meta.env);
export const API_URL = URL;
