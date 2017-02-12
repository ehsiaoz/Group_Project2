module.exports = function(sequelize, DataTypes) {
  var Offer = sequelize.define("Offer",
  {
    offer_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    offer_origPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    offer_dealPrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        isNumeric: true
      }
    },
    offer_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Offer;
};
