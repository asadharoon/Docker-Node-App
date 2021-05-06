const { exec } = require("child_process");
let args = process.argv;
args.splice(0, 2);
let str = args.join(" ");
function cb(err, strout, stdin) {
    if (err) {
        console.log(err);
        return;
    }

}
exec(`git add .`, cb);
exec(`git commit -m "${str}"`, cb);
exec("git push origin main");

