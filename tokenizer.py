import sys
import json
# from keras.models import load_model
import tensorflow_hub as hub
import numpy as np

module_url = "https://tfhub.dev/google/universal-sentence-encoder/4"

model = hub.load(module_url)

print ("module %s loaded" % module_url)

# to create embedings

def embed(input):
  return model(input)