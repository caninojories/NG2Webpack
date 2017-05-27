import {
  Modules
} from '../config/modules';

let modules = Modules.get();

let UserSchema = new modules.mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  password: String,
  updatedAt: Date,
  createdAt: {
     type: Date,
     default: Date.now
  }
}, { collection: 'Users' });

UserSchema.pre('save', function(next) {
  let user = this;

  if (!user.isModified('password')) {
    return next();
  }

  modules.bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    modules.bcrypt.hash(user.password, salt, function(error, hash) {
      if (error) {
        return next (error);
      }

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.toJSON = function() {
  let user = this.toObject();
  delete user.password;

  return user;
};

UserSchema.methods.comparePassword = function(password, callback) {
  modules.bcrypt.compare(password, this.password, callback);
};

export let User = <any>modules.mongoose.model('Users', UserSchema);
