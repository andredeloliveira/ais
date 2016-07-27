import { Mongo } from 'meteor/mongo';

const Produtos = new Mongo.Collection('produtos');

export default Produtos;
