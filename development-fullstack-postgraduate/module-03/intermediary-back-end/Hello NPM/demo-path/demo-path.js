import { basename, dirname } from 'path';

let file_name = basename('./teste.txt');
let filename = basename('/test/something');

let dir = dirname('/test/something') // /test
let directory = dirname('/test/something/file.txt') // /test/something

console.log("file name 1 = " + file_name);
console.log("file name 2 = " + filename);

console.log("directory 1 = " + dir);
console.log("directory 2 = " + directory);