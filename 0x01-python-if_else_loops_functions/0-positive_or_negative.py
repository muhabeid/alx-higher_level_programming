#!/usr/bin/python3
import random 
number = random.ranint(-10, 10)

if number > 0:
  print(f"{number:d} is positive")
elif number < 0:
  print("f{number:d} is negative")
else:
  print(f"{number:d} is zero")