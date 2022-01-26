module.exports = (sequelize, Sequelize) => {
    
    const Category = sequelize.define("Categorypriya", {
      
        Category_Id: {
          type: Sequelize.INTEGER
        },
        Category_Name: {
          type: Sequelize.STRING
        },
        Range : {
          type: Sequelize.STRING
        }
    },
      {
        timestamps: false,
      });
      
    return Category;
    
  };
