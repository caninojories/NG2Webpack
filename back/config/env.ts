let fs = require('fs');

export class ENV {
  constructor() {}

  compile() {
    let encodedhash = process.env.ENCODEDHASH || '6e259c44f97ff663ab5f4668a6134a2e63a71877956464c9c3820f17a0893c19';

    fs.writeFile('back/config/env.config.ts',
      'export let CONFIG = {' +
      '"ENCODEDHASH": "' + encodedhash.toString() + '"}'
      , 'utf8', () => {
      /*
        * Done here
        */
        console.log('done...');
    });
  }
}

new ENV().compile();
