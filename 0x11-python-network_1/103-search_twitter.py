#!/usr/bin/python3
"""
    Search 5 twits
"""

import requests
from sys import argv
import base64

if __name__ == "__main__":
    c_key = argv[1]
    c_secret = argv[2]
    str_search = argv[3]
    headers = {}
    url = 'https://api.twitter.com/1.1/search/tweets.json?q='
    url += '{}&count=5'.format(str_search)
    header = {}
    r = requests.get(url, headers=header)
    for c in r.json():
        print("[{}] {} by {}".format(c.get("id"
                                           ), c.get("text"
                                                    ), c.get("user"
                                                             ).get("name"
                                                                   )))
