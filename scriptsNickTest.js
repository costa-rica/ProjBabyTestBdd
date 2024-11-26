// Requi pour connecter
require("dotenv").config(); //;ENV LINK
const mongoose = require("mongoose");
const connectionString = process.env.DB_CONNECTION_STRING;
mongoose.set("strictQuery", true);

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Successfully connected to the Database 🥳 !"))
  .catch((errorMessage) => console.error(errorMessage));

// CarnetBebe Model
const carnetBebeSchema = mongoose.Schema({
  date: String,
  heureCoucher: String,
  repas: String,
  selle: String,
  couleurSelle: String,
  poids: Number,
  taille: Number, //cm
  notes: String,
  project: { type: mongoose.Schema.Types.ObjectId, ref: "projects" },
});

const CarnetBebe = mongoose.model("carnetBebes", carnetBebeSchema);

// Project Model:
const projectSchema = mongoose.Schema({
  proprietaire: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  editeur: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  lecteur: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  carnetBebe: [{ type: mongoose.Schema.Types.ObjectId, ref: "carnetBebes" }],
  rdv: [{ type: mongoose.Schema.Types.ObjectId, ref: "rdvs" }],
  document: [{ type: mongoose.Schema.Types.ObjectId, ref: "documents" }],
  token: String,
});

const Project = mongoose.model("projects", projectSchema);

// ici importe tout que tu veux essayer:

Project.findOne({}).then((data) => {
  console.log(`----- sans populate ----`);
  console.log(data);
  console.log(`----- sans populate fini ----`);
});
Project.findOne({})
  .populate("carnetBebe")
  .then((data) => {
    console.log(`----- avec populate ----`);
    console.log(data);
    console.log(`----- avec populate fini ----`);
  });
