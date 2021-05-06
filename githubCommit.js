const { exec } = require("child_process");
let args = process.argv;
args.splice(0, 2);
let str = args.join(" ");
exec("git add .");
exec(`git commit -m "${str}"`);
exec("git push origin main");
