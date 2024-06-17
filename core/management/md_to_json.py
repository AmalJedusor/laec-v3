#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Translate markdown into JSON.

Usage:
  md_to_json [options] <markdown_file>
  md_to_json -h | --help

Options:
  -h --help     Show this screen
  --version     Print version number
  -o <file>     Save output to a file instead of stdout
  -i <val>      Indent nested JSON by this amount. Use a negative number for
                most compact possible JSON. the [default: 2]
"""

from __future__ import print_function, absolute_import, unicode_literals


import sys
from contextlib import contextmanager
import json

import markdown_to_json
from markdown_to_json.vendor.docopt import docopt
from markdown_to_json.vendor import CommonMark

from markdown_to_json.markdown_to_json import Renderer, CMarkASTNester

import logging
logging.basicConfig(
    format="%(message)s", stream=sys.stderr, level=logging.INFO)


@contextmanager
def writable_io_or_stdout(filename):
    if filename is None:
        yield sys.stdout
        return
    else:
        try:
            f = open(filename, 'w', encoding="utf-8")
            yield f
            f.close()
        except:
            logging.error("Error: Can't open {0} for writing".format(
                filename))
            sys.exit(1)


def get_markdown_ast(markdown_file):
    try:
        f = open(markdown_file, 'r',encoding="utf-8")
        return CommonMark.DocParser().parse(f.read())
    except:
        logging.error("Error: Can't open {0} for reading".format(
            markdown_file))
        sys.exit(1)
    finally:
        f.close()


def jsonify_markdown(markdown_file, indent):
    nester = CMarkASTNester()
    renderer = Renderer()
    ast = get_markdown_ast(markdown_file)
    nested = nester.nest(ast)
    rendered = renderer.stringify_dict(nested)
    return json.dumps(rendered, indent=indent)+"\n"
