#!/usr/bin/python3
"""
    takes in a URL, sends a request to the URL and displays the
    value of the variable X-Request-Id in the response header
"""

import requests
from sys import argv

if __name__ == "__main__":
    r = requests.post(argv[1], data={'email': argv[2]})
    print(r.text)
