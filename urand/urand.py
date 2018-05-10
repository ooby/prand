import os
import numpy as np
import sys


def urand(n):
    a = np.fromstring(os.urandom(n*4), dtype=np.uint32) >> 5
    b = np.fromstring(os.urandom(n*4), dtype=np.uint32) >> 6
    return (a * 67108864.0 + b) / 9007199254740992.0


def main():
    print(urand(int(sys.argv[1])))
    sys.stdout.flush()


if __name__ == '__main__':
    main()
