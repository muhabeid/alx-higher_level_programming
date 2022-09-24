#!/usr/bin/python3
"""
    list 10 commits (from the most recent to oldest) of the repository
    “rails” by the user “rails”
"""

import requests
from sys import argv

if __name__ == "__main__":
    repo = argv[1]
    user = argv[2]
    url = 'https://api.github.com/repos/{}/{}'.format(user, repo)
    url += '/commits?per_page=10'
    r = requests.get(url)
    for c in r.json():
        print("{}: {}".format(c.get("sha"
                                    ), c.get("commit"
                                             ).get("author"
                                                   ).get("name")))
