
const { Category} = require("../models/categoryindex.js");
 
module.exports = app => {
    
    const Categorypriya=require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial

    router.post("/", Categorypriya.create);
  
    // Retrieve all Tutorials
    
    router.get("/", Categorypriya.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/Product_Name", Categorypriya.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", Categorypriya.findOne);
    // Update a Tutorial with id
    router.put("/:id", Categorypriya.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", Categorypriya.delete);
  
    // Delete all Tutorials
    router.delete("/", Categorypriya.deleteAll);
  
    app.use('/api/Categoryspriya', router);
  };