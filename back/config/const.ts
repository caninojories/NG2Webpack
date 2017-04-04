import {
  Modules
} from './modules';

export const port = process.env.port || Modules.get().args.port || '8082';
export const root = Modules.get().path.normalize(__dirname + '/../../');
export const apiVersion = '/api/v1/';
export let  env;
export const sha256  = {
  secret : process.env.ENCODEDHASH || '6e259c44f97ff663ab5f4668a6134a2e63a71877956464c9c3820f17a0893c19' || '12345',
  updateString : process.env.ENCODEDHASHSTRING || '54321'
}

export const cipher = {
  algorithm: 'aes-256-ctr',
  secret : process.env.ENCODEDHASH || '6e259c44f97ff663ab5f4668a6134a2e63a71877956464c9c3820f17a0893c19' || '12345'
}
