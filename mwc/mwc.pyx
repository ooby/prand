import numpy as np
cimport numpy as cnp

cdef cnp.uint32_t gw = 152315241 # any number except 0 or 0x464fffff
cdef cnp.uint32_t gz = 273283728 # any number except 0 or 0x9068ffff

def mwc(cnp.intp_t n):
    """Generate n random numbers using George Marsaglia's 
    multiply-with-carry method."""
    global gw, gz
    cdef cnp.uint32_t w, z, a, b
    cdef cnp.intp_t i
    cdef cnp.ndarray x = cnp.PyArray_SimpleNew(1, &n, cnp.NPY_FLOAT64)
    cdef cnp.float64_t *r = <cnp.float64_t*> cnp.PyArray_DATA(x)
    w,z = gw,gz
    for i in range(n): 
        z = 36969 * (z & 65535) + (z >> 16)
        w = 18000 * (w & 65535) + (w >> 16)
        a = (z << 16) + w
        z = 36969 * (z & 65535) + (z >> 16)
        w = 18000 * (w & 65535) + (w >> 16)
        b = (z << 16) + w
        r[i] = (a * 67108864.0 + b) / 9007199254740992.0
    gw,gz = w,z
    return x
