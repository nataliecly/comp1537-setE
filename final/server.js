const express = require("express");
const app = express();

app.listen(4000, (err) => {
  if (err) console.log();
  console.log("Server is running on port 4000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const unicornsSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  loves: [String],
  weight: Number,
  gender: {
    type: String,
    enum: ["m", "f"],
  },
  vampire: Number,
  vaccinated: Boolean,
});

const unicornModel = mongoose.model("unicorns", unicornsSchema);

app.get("/unicorns", (req, res) => {
  unicornModel.find({ gender: "m" }, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

app.use(express.urlencoded());
app.use(express.json());

app.post("/genderUnicorns", (req, res) => {
  console.log(req.body);
  unicornModel.find({ gender: req.body.genderMenu }, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

app.use(express.static("./public"));
