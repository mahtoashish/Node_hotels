const express = require('express')
const app = express();// app is an instance
const db = require("./db");

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies (req.body)
const Person = require('./models/person');
const menu = require('./models/menu');


app.get('/', function (req, res) {
  res.send('Welcome to our Hotel')
})


//person data
// POST route to add a person  in database
// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body;//create a new object of person class with data from

//     // Create a new person document using the mongoose model
//     const newPerson = new Person(data);//but by this way it prefilled 

//     // newPerson.name=data.name;// we can define this way also by each data member sepreately 

//     //save the person to the database
//     const responce = await newPerson.save();
//     console.log('data saved');
//     res.status(200).json(responce);

//   }
//   catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: "internal server error" });
//   }
// })


// //GET method to get the person 
// app.get('/person', async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log("Data fatched");
//     res.status(200).json(data);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: "internal server error" });
//   }
// })


// //get the specific persons by there work type
// app.get('/person/:workType', async (req, res) => {
//   try {
//     const workType = req.params.workType; // Extract the work type from URL parameter and trim any extra whitespace

//     if (['chef', 'waiter', 'manager'].includes(workType)) {
//       const response = await Person.find({ work: workType });
//       console.log("Response fetched for workType:", workType);
//       res.status(200).json(response);
//     } else {
//       console.log("Invalid Work Type:", workType);
//       res.status(400).json({ error: "Invalid Work Type" });
//     }
//   } catch (err) {
//     console.error("Error fetching data:", err.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });



// Menu items
// to display the menu items for particular restaurant
// app.get('/menu', async (req, res) => {
//   try {
//     const item = await menu.find();
//     console.log('Menu Items Fetched')
//     res.status(200).json(item);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: "internal server error" });
//   }
// });

// // POST the menu item to the database
// app.post("/menu", async (req, res) => {
//   try {
//     const item = req.body;//create a new object of item class with data from

//     // Create a new item document using the mongoose model
//     const newitem = new menu(item);//but by this way it prefilled 

//     //save the item to the database
//     const responce = await newitem.save();
//     console.log('Item saved');
//     res.status(200).json(responce);


//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "internal server error" });
//   }
// });


const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes=require('./routes/menuRoutes');
app.use( '/menu', menuRoutes );

app.listen(3000, () => { console.log("Listening at port 3000!"); })
