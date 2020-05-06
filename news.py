import sys
import json

def my_function(news):
    print(news)
    sys.stdout.flush()

my_function(sys.argv[1])