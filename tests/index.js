describe('RANDOM GENERATORS TESTS', () => {
    const { rand, urand, mwc } = require('../');
    it('Making 5 random', done => {
        const check = c => {
            if (c === 5) { done(); }
        };
        let count = 0;
        for (let i = 0; i < 5; i++) {
            rand(1)
                .then(r => {
                    if (r >= 0 && r < 1) {
                        check(++count);
                    }
                })
                .catch(e => { console.error(e); });
        }
    });
    it('Making 5 urandom', done => {
        const check = c => {
            if (c === 5) { done(); }
        };
        let count = 0;
        for (let i = 0; i < 5; i++) {
            urand(1)
                .then(r => {
                    if (r >= 0 && r < 1) {
                        check(++count);
                    }
                })
                .catch(e => { console.error(e); });
        }
    });
    it('Making 5 multiply-with-carry', done => {
        const check = c => {
            if (c === 5) { done(); }
        };
        let count = 0;
        for (let i = 0; i < 5; i++) {
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
