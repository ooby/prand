// const spawn = require('child_process').spawn;
// module.exports = n => {
//     return new Promise((resolve, reject) => {
//         let py = spawn('python', ['mwc/mwc.py', n.toString()]);
//         let result = '';
//         py.stderr.on('data', se => {
//             console.log(`stderr: ${se}`);
//         });
//         py.stdout.on('data', d => {
//             result += d;
//         });
//         py.stdout.on('end', () => {
//             let r;
//             if (n > 1) { r = result.replace(/\n/g, '').replace(/[\[\]]/g, '').replace(' ', '').split(' ').filter(i => !!i); }
//             else { r = result.replace(/[\[\]]/g, '').replace(/^ /, ''); }
//             resolve(r);
//         });
//     });
// };
// TEMPORARY DUMMY
// MULTIPLY WITH CARRY HAVE NO CRYPTOSTRENGTH!!!
module.exports = n => {
    return new Promise((resolve, reject) => {
        let r = 1 / (n + 1);
        resolve(r);
    });
};
