#!/bin/bash
mkdir tmp
cp -R build/* tmp
mkdir build/bbscopy
cp -R tmp/* build/bbscopy
rm -rf tmp
