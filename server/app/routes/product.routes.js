const { Product } = require("../models/index.js");
 
module.exports = app => {
    const Productpriya = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Productpriya.create);
  
    // Retrieve all Tutorials
    router.get("/", Productpriya.findAll);
   
  
    // Retrieve all published Tutorials
    //router.get("/Product_Name", skProduct.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", Productpriya.findOne);
    // Update a Tutorial with id
    router.put("/:id", Productpriya.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", Productpriya.delete);
  
    // Delete all Tutorials
    router.delete("/", Productpriya.deleteAll);
  
    app.use('/api/Productspriya', router);
  };