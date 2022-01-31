import mongoose from "mongoose";
import Person from "../models/model.js";

// read persons
export const readPersons = async (req, res) => {
  try {
    const persons = await Person.find().sort({ datecreated: -1 });
    res.status(200).json(persons);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// create person
export const createPerson = async (req, res) => {
  const person = new Person(req.body);
  try {
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    res.status(408).json({ error: error.message });
  }
};

// update person
export const updatePerson = async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`The ${id} not valid`);
  }

  const person = { firstname, lastname, age, description, _id: id };
  await Person.findByIdAndUpdate(id, person, { new: true });
  res.json(person)
};

// delete person
export const deletePerson = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`The ${id} not valid`);
  }
  await Person.findByIdAndDelete(id);
  res.json({message: "Person deleted successfully"})
};