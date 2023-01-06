#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build:gh

# navigate into the build output directory
cd dist-gh

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy to github pages'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:SashaJarvi/vue-inline-calendar.git main:gh-pages

cd -
