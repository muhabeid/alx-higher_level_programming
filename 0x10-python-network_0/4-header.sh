#!/bin/bash
# Display the body after sent a header variable and GET request
curl -s -X GET -L -H "X-HolbertonSchool-User-Id: 98" "$1"
