#!/usr/bin/python3
def complex_delete(a_dictionary, value):
    copy = a_dictionary.copy()
    for k in copy:
        if copy[k] == value:
            del a_dictionary[k]
    return a_dictionary