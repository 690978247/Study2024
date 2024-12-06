const os = require('os')

console.log(os.EOL); // 换行符

console.log(os.arch()); // 系统

console.log(os.cpus().length); // cpu

console.log(os.freemem() / 2 ** 30);  // 当前还剩多少内存 字节

console.log(os.homedir()); // 用户目录

console.log(os.hostname); // 主机名称

console.log(os.tmpdir()); // 临时目录