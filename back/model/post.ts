import {
  Modules
} from '../config/modules';

let modules = Modules.get();

let PostSchema = new modules.mongoose.Schema({
  post: {
    type: String
  },
  user: {},
  updatedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { collection: 'Posts' });

export let Post = <any>modules.mongoose.model('Posts', PostSchema);
