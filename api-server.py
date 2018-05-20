# -*- coding: utf-8 -*-

from __future__ import absolute_import
from __future__ import division, print_function, unicode_literals

from sumy.parsers.html import HtmlParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.sum_basic import SumBasicSummarizer as Summarizer
from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words

import flask
from flask import request, jsonify
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
app.config['DEBUG'] = True
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app)

LANGUAGE = "english"
SENTENCES_COUNT = 15


def summary(url):
  parser = HtmlParser.from_url(url, Tokenizer(LANGUAGE))
  stemmer = Stemmer(LANGUAGE)

  summarizer = Summarizer(stemmer)
  summarizer.stop_words = get_stop_words(LANGUAGE)

  res = []

  for sentence in summarizer(parser.document, SENTENCES_COUNT):
    print(type(sentence))
    res.append(sentence._text)

  return res

@app.route('/', methods=["POST"])
@cross_origin()
def main():
  content = request.get_json()
  url = content['url']
  res = summary(url)
  print(res)
  return jsonify(res)

app.run()
