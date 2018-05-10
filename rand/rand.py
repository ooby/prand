import numpy as np
import sys


def rand(n):
    with open('/dev/random', 'rb') as rnd:
        a = np.fromstring(rnd.read(n*4), dtype=np.uint32) >> 5
        b = np.fromstring(rnd.read(n*4), dtype=np.uint32) >> 6
        return (a * 67108864.0 + b) / 9007199254740992.0


def main():
    print(rand(int(sys.argv[1])))
    sys.stdout.flush()


if __name__ == '__main__':
    main()
