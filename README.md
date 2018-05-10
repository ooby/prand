## PRAND random generators with device entropy sources, 'nix only

### Prerequisites
- `python`, `numpy`, `cython`

### Install
```bash
npm i prand
```

1. `rand` uses `/dev/random` as entropy, returns `n` random numbers in `[0, 1)` range
```javascript
const rand = require('prand').rand;
let n = 5;
rand(n)
    .then(r => {
        console.log(r);
    })
    .catch(e => { console.error(e); });
```

2. `urand` (pseudo-random) uses `/dev/urandom` as entropy, returns `n` pseudo-random numbers in `[0, 1)` range
```javascript
const urand = require('prand').urand;
let n = 8;
urand(n)
    .then(r => {
        console.log(r);
    })
    .catch(e => { console.error(e); });
```
3. `mwc` (multiply-with-carry) and `mersenne-twister` are deprecated

[background](https://stackoverflow.com/questions/22680441/using-the-hardware-rng-from-python)