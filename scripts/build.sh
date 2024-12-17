#!/usr/bin/bash

git checkout main

echo install [1/2]
yarn install
echo build [2/2]
yarn build