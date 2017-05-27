let argv = process.argv;

export let getArgv = function (arg) {
  let argument;
  let data = argv.filter(filter => {
    argument = filter.split('=')[0];

    if (argument && argument === arg) {
      return true;
    }

    return false;
  })[0];

  return data ? data.split('=')[1] : false;
};
