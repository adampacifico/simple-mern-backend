import mongoose from "mongoose";
const Schema = mongoose.Schema;

const personSchema = new Schema(
  {
    lastname: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    selectedFile: {
      type: String,
      required: true,
    },
    datecreated:{
      type: Date,
      default: Date.now()
    }
  },
  { timestamps: true }
);

const Person = mongoose.model("Person", personSchema);
export default Person;
