// Objects Literals

const palavra = 'id';

const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [palavra]: 10, // [palavra] é um operador dinâmico = é como se [palavra] fosse na verdade id, que é o valor de palavra fora do objeto
};
