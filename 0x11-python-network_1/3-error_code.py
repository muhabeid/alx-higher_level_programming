#!/usr/bin/python3
"""
    Takes in a URL, sends a request to the URL and displays the body
    of the response (decoded in utf-8).
"""

from urllib import (request, parse, error)
from sys import argv

if __name__ == "__main__":
    req = request.Request(argv[1])
    try:
        with request.urlopen(req) as response:
            body = response.read()

        print(body.decode('utf8'))
    except error.HTTPError as e:
        print("Error code: {}".format(e.code))
