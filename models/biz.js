module.exports = function(sequelize, DataTypes) {
  var Biz = sequelize.define("Biz",
  {
    biz_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    biz_desc: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [10]
      }
    },
    biz_cat: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    biz_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    biz_stret: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    biz_city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    biz_state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    biz_lat: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    biz_long: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  }

    // {
    //   // We're saying that we want our Author to have Posts
    //   classMethods: {
    //     associate: function(models) {
    //       // An Author (foreignKey) is required or a Post can't be made
    //       Post.belongsTo(models.Author, {
    //         foreignKey: {
    //           allowNull: false
    //         }
    //       });
    //     }
    //   }
    // }
  );
  return Biz;
};
