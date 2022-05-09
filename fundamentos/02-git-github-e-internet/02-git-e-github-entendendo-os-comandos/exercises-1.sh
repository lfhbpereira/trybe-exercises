#!/bin/bash

cd trybe-exercises/fundamentos/02-git-github-e-internet/01-git-e-github-o-que-e-e-para-que-serve

git status

git checkout -b trybe-skills-changes

cat >> trybe-skills.txt
- HTML
- CSS
^D
git add trybe-skills.txt
git commit -m "Add new skills"
git push -u origin trybe-skills-changes

#Open a pull request at GitHub

git checkout main

git branch

git checkout -b trybe-skills-updates

cat >> trybe-skills.txt
- JavaScript
^D
git add trybe-skills.txt
git commit -m "Add another skill"
git push -u origin trybe-skills-updates
#Open a pull request at GitHub

#Merge the first pull request
#Try to merge the second pull request
#Resolve conflicts
#Mark as resolved
#Commit merge
#Merge the second pull request
