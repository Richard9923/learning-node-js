
import { getPosts } from './postController';

const {generateRandomNumber, celciusToFahrenheit} = require('./utils');

console.log(`Random Number: ${generateRandomNumber()}`);
console.log(`Celcius to fahrenhiet: ${celciusToFahrenheit(0)}`);