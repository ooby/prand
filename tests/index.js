describe('RANDOM GENERATORS TESTS', () => {
    const { rand, urand, mwc } = require('../');
    it('Making 100 random', done => {
        const check = c => {
            if (c === 100) { done(); }
        };
        let count = 0;
        for (let i = 0; i < 100; i++) {
            rand(1)
                .then(r => {
                    if (r >= 0 && r < 1) {
                        check(++count);
                    }
                })
                .catch(e => { console.error(e); });
        }
    });
    it('Making 100 urandom', done => {
        const check = c => {
            if (c === 100) { done(); }
        };
        let count = 0;
        for (let i = 0; i < 100; i++) {
            urand(1)
                .then(r => {
                    if (r >= 0 && r < 1) {
                        check(++count);
                    }
                })
                .catch(e => { console.error(e); });
        }
    });
    it('Making 10 multiply-with-carry', done => {
        const check = c => {
            if (c === 10) { done(); }
        };
        let count = 0;
        for (let i = 0; i < 10; i++) {
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
