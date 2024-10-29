import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://renuramchandra649:Renuka@cluster0.ozr9i.mongodb.net/FoodOrder?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log("MongoDB Connected"));
}