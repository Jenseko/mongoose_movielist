import mongoose from "mongoose";
import MovieDetail from "../Models/MovieDetail.js";

mongoose.connect("mongodb://127.0.0.1:27017/video")
    .then((connection) => console.log("Connected"));

const movies = await MovieDetail.find();

console.log(movies);