#!/bin/sh

npm run build
cp -r ./dist/* .
git add .
git commit -m 'Publish website'
