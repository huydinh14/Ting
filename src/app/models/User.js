const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const User = new Schema({
     username: {type: 'string', unique: true},
     fullName: {type: 'string', unique: true, default: ''},
     password: {type: 'string', unique: true, default:''},
     email: {type: 'string', unique: true},
     userImage: {type: 'string', default: 'default.png'},
     facebook: {type: 'string', default: ''},
     fbTokens: Array,
     google: {type: 'string', default: ''},
     googleTokens: Array,
     createdAt: {type: Date, default: Date.now},
     updatedAt: {type: Date, default: Date.now}
});

// User.method.encryptPassword = function(password) {
//      return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
// };
 
// User.method.validUserPassword = function(password) {
//      return bcrypt.compareSync(password, this.password);
// };

User.method({
     encryptPassword: function(password) {
       return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
     },
     validPassword: function(password) {
       return bcrypt.compareSync(password, this.password);
     }
   })

module.exports = mongoose.model('User', User);