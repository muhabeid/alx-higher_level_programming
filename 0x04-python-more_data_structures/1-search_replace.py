#!/usr/bin/python3
def search_replace(my_list, search, replace):
    new_list = my_list.copy()
    for idx in range(len(my_list)):
        if my_list[idx] == search:
            new_list[idx] = replace

    return new_list