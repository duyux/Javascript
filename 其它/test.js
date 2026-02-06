//const utf8ToBase64=window.btoa('hello world')
const utf8ToBase64=Buffer.from('Hello World!','utf-8').toString('base64')
console.log(utf8ToBase64)