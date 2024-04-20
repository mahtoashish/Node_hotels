const express = require("express");
const router = express.Router();
const menu = require('./../models/menu');

// to display the menu items for particular restaurant
router.get('/', async (req, res) => {
    try {
        const item = await menu.find();
        console.log('Menu Items Fetched')
        res.status(200).json(item);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "internal server error" });
    }
});


// POST the menu item to the database
router.post("/", async (req, res) => {
    try {
        const item = req.body;//create a new object of item class with data from

        // Create a new item document using the mongoose model
        const newitem = new menu(item);//but by this way it prefilled 

        //save the item to the database
        const responce = await newitem.save();
        console.log('Item saved');
        res.status(200).json(responce);


    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "internal server error" });
    }
});

router.get('/:taste', async (req, res) => {
    try {
        const tasteType = req.params.taste;
        if (['spicy', 'normal', 'mild', 'sweet'].includes(tasteType)) {
            const response = await menu.find({ taste: tasteType });
            console.log("Item fetched:", tasteType);
            res.status(200).json(response);
        }
        else {
            console.log("Invalid Taste type!", tasteType);
            res.status(400).json({ error: "Invalid Taste type!" })
        }
    }
    catch (err) {
        console.error("Error fetching data:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


//PUT
// update or make the changes in the menu
router.put('/:name', async (req, res) => {
    try {
        const menuId = req.params.name;
        const updateMenuItem = req.body;
        const response = await menu.findByIdAndUpdate(menuId, updateMenuItem,
            {
                new: true,
                runValidators: true,
            });
        if (!response) {
            return res.status(404).json({ error: 'Item not found' });
        }
        console.log("Menu Upadated");
        res.status(200).json(response);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });

    }
});


// Delete
// to delete the record from the data 
router.delete("/:name", async (req, res) => {
    try {
        const  menuId=req.params.name;
        const response=await menu.findByIdAndDelete(menuId);
        if(!response){
           return res.status(404).send("No Record Found");
       }
       console.log("Item Deleted");
       res.status(200).json(response);  
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;