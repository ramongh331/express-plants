require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;
console.log(process.env.PORT, process.env.VARIABLE);
// any variable in the .env file has to be all caps.

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];

// app.get("/awesome", (req, res) => {
//   res.send(`
//       <h1>Plants are awesome</h1>
//       <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
//       `);
// });
// // if there is a .get with a colon (:) at the top, that .get will go first.

// app.get("/:indexOfPlantsArray", (req, res) => {
//   if (plants[req.params.indexOfPlantsArray]) {
//     res.send(plants[req.params.indexOfPlantsArray]);
//   } else {
//     res.send(`cannot find anything in index`);
//   }
// });
// when you add the index number into the url you will get back the index number value.
// localhost:3001/2 populated Elephant-Foot Yam
// you cannot have multiple res.sends. When there are multiple whatever the first res.send is will be ran.
//You can run an if conditional.

// Example #1 of multiple parameters:
// app.get("/:ia/:instructor", (request, response) => {
//   console.log(request.params);
//   response.send(
//     `the ia is ${request.params.ia} and the instrcutor is ${request.params.instructor}`
//   );
// });
// // using interpolation we can grab the params in the response.send

// Example #2 of Multiple Parameters
app.get("/hello/:firstname/:lastname", (req, res) => {
  console.log(req);
  res.send(`hello my name is ${req.params.firstname} ${req.params.lastname}`);
});

// req.query example
app.get("/reqqueryexample/:firstname/:lastname", (req, res) => {
  console.log(
    "The req.query is " +
      req.query.title +
      " and not to be confused with req.params"
  );
  res.send(
    `hello my name is ${req.params.firstname} ${req.params.lastname} and my titles is ${req.query.title}`
  );
});
// /reqqueryexample/ramon/hernandez?title=lord
// you need the ? for the req.query
// the word at the end of req.query... is going to be the key used after the question mark. Ex. req.query.house is ?house=
// to add multiple queries in the url put an &. Ex. ?color=blue&name=ramon

app.listen(PORT, () => {
  console.log(`currently listening to ${PORT}`);
});
