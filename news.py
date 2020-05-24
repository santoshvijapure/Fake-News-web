import sys
import json
from keras.models import load_model
import tensorflow_hub as hub
import numpy as np
import tokenizer
tf_model = load_model('./keras_model.h5')

def my_function(news):
    print(news)
    encoded_vec=tokenizer.embed(news).numpy()
    result=tf_model.predict(encoded_vec)[0][0]
    if result > 0.5 :
        return 1
    else:
        return 0
    # sys.stdout.flush()

my_function(sys.argv[1])
