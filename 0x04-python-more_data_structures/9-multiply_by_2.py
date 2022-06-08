#!/usr/bin/python3
def multiply_by_2(a_dictionary):
    new_dict = {}
    for key in a_dictionary:
        new_dict[key] = a_dictionary[key] + a_dictionary[key]
    return new_dict