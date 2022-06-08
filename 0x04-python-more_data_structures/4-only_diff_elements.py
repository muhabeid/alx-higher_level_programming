#!/usr/bin/python3
def only_diff_elements(set_1, set_2):
    x = set_1 - set_2
    y = set_2 - set_1
    return x.union(y)