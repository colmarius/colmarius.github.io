#!/bin/sh

git checkout -B master
npm run build
cp -r ./dist/* .
git add .
git commit -m 'Publish website'
