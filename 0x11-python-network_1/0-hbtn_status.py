#!/usr/bin/python3
"""
     fetches https://intranet.hbtn.io/status
"""

from urllib import (request)

if __name__ == "__main__":
    req = request.Request("https://intranet.hbtn.io/status")
    with request.urlopen(req) as response:
        body = response.read()

    print("Body response:")
    print("\t- type: {}".format(type(body)))
    print("\t- content: {}".format(body))
    print("\t- utf8 content: {}".format(body.decode('utf8')))
