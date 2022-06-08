#!/usr/bin/python3
def uniq_add(my_list=[]):
    add = 0
    _uniq = set(my_list)
    for x in _uniq:
        add += x

    return add