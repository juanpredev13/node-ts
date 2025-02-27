import express from "express";
import homeRoutes from "./routes/home.routes";

const app = express();

app.use("/", homeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
