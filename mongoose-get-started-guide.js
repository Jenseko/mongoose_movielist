
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/mongooseStarter");


// aktuelle Schreibweise - Erstellung eines Schemas
const catSchema = new mongoose.Schema(
    {
        name: String, age: { type: Number, required: true, default: 0 },
    });

const Cat = mongoose.model("Cat", catSchema);

// const kitty = new Cat({ name: "Zildjian", age: 120 });
// kitty
//     .save()
//     .then(() => console.log('meow'))
//     .catch((e) => console.error(e));


// im find() können 3 {} stehen, die der 3 Zeilen in MongoDB (Filter - Project - Sort) entsprechen
// es wird immer der erste Eintrag, der gefunden wird, zurückgegeben
// const cats = await Cat.find({ age: 120 }, { name: 1 }, {});
// console.log(cats);

const cats = await Cat.find();
console.log(cats);