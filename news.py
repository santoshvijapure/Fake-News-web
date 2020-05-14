import sys
import json
from keras.models import load_model
import tensorflow_hub as hub
import numpy as np

tf_model = load_model('./keras_model.h5')

module_url = "https://tfhub.dev/google/universal-sentence-encoder/4"

model = hub.load(module_url)

print ("module %s loaded" % module_url)

# to create embedings

def embed(input):
  return model(input)


def my_function(news):
    print(news)
    encoded_vec=embed(news).numpy()
    result=tf_model.predict(encoded_vec)[0][0]
    if result > 0.5 :
        return 1
    else:
        return 0
    # sys.stdout.flush()

my_function(sys.argv[1])
