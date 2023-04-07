#!/bin/sh

git checkout -B main
npm run build
cp -r ./dist/* .
git add .
git commit -m 'Publish website'
