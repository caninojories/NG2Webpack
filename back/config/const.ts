import {
  Modules
} from './modules';
import * as args from '../services/argv';

export const port = process.env.port || args.getArgv('--port') || '8082';
let path = $dirname;
path     = Modules.get().path.dirname(path)
export const root = path;

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
