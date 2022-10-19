const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../index');

class User extends Model { }

User.init({
  // định nghĩa các column trong table
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  full_name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: {
        msg: "Email không đúng định dạng"
      }
    }
  },
  passWord: {
    type: DataTypes.STRING,
    field: "pass_word"
  }

}, {
  sequelize, // tham số chứa biến kết CSDL
  modelName: 'User', // đặt tên cho model
  tableName: 'user', // map đúng với tên table trong CSDL
  timestamps: false // bỏ đi chức năng tự tạo 2 cột createDate và updateDate
});


module.exports = User;