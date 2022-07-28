#!/bin/bash

cat > trybe-skills.txt
O que eu vou aprender na Trybe:
- Unix
- Bash
- Git
^D

ls -l

cd ../../..
git init
touch README.md
git add .
git commit -m "Initial commit"

#Create a repository at GitHub

git remote add origin "git@github.com:lfhbpereira/trybe-exercises.git"
git remote -v
git push -u origin main
