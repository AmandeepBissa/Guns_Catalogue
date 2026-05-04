const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let guns = [
  { id: 1, category: "Pistols", name: "Colt M1911", feature: "Semi-Automatic", price: 100, link: "Colt.html" },
  { id: 2, category: "Pistols", name: "Ruger GP100", feature: "Revolver", price: 100, link: "Ruger.html" },
  { id: 3, category: "Assault Rifles", name: "AK-47", feature: "7.62x39mm", price: 200, link: "AK47.html" },
  { id: 4, category: "Assault Rifles", name: "M4 Carbine", feature: "5.56mm", price: 200, link: "M4.html" },
  { id: 5, category: "Shotguns", name: "Stevens 301", feature: "Single-Barrel", price: 300, link: "Stevens.html" },
  { id: 6, category: "Shotguns", name: "Stoeger Coach Gun", feature: "Double-Barrel", price: 300, link: "Stoeger.html" },
  { id: 7, category: "Snipers", name: "M24 SWS", feature: "Military grade", price: 400, link: "M24.html" },
  { id: 8, category: "Snipers", name: "AX308", feature: "Police grade", price: 400, link: "AX308.html" }
];

// TEST
app.get("/", (req, res) => {
  res.send("Guns API is running...");
});

// GET ALL
app.get("/guns", (req, res) => {
  res.json(guns);
});

// POST
app.post("/guns", (req, res) => {
  const newGun = {
    id: Date.now(),
    ...req.body
  };
  guns.push(newGun);
  res.status(201).json(newGun);
});

// DELETE
app.delete("/guns/:id", (req, res) => {
  const id = parseInt(req.params.id);
  guns = guns.filter(g => g.id !== id);
  res.send("Deleted");
});

// START
app.listen(3000, () => {
  console.log("Server running on port 3000");
});