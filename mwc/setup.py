from distutils.core import setup
from Cython.Build import cythonize

setup(
    name='Multiply with carry random',
    ext_modules=cythonize('mwc/mwc.pyx'),
)
