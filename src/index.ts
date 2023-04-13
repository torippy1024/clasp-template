import hello from './hello';

global.hello = hello;

global.printPrivateVariable = () => {
  const secretVariale = process.env.SECRET_VARIABLE;
  console.log(secretVariale);
};
