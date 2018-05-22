describe('RANDOM GENERATORS TESTS', () => {
    const { rand, urand, mwc } = require('../');
    let n = 100; // in linux n should be lower than 10 depend on CPU type, n = 100 tested in macOS 10.13.4
    it('Making n random', done => {
        const check = c => {
            if (c === n) { done(); }
        };
        let count = 0;
        for (let i = 0; i < n; i++) {
            rand(1)
                .then(r => {
                    if (r >= 0 && r < 1) {
                        check(++count);
                    }
                })
                .catch(e => { console.error(e); });
        }
    });
    it('Making n urandom', done => {
        const check = c => {
            if (c === n) { done(); }
        };
        let count = 0;
        for (let i = 0; i < n; i++) {
            urand(1)
                .then(r => {
                    if (r >= 0 && r < 1) {
                        check(++count);
                    }
                })
                .catch(e => { console.error(e); });
        }
    });
    it('Making n multiply-with-carry', done => {
        const check = c => {
            if (c === n) { done(); }
        };
        let count = 0;
        for (let i = 0; i < n; i++) {
            mwc(1)
                .then(r => {
                    if (r >= 0 && r < 1) {
                        check(++count);
                    }
                })
                .catch(e => { console.error(e); });
        }
    });
});
