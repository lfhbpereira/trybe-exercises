#!/bin/bash

mkdir unix_tests
cd unix_tests

touch trybe.txt

cp trybe.txt trybe_backup.txt

mv trybe.txt trybe_alt.txt

mkdir backup

mv trybe_backup.txt ./backup

mkdir backup2

mv ./backup/trybe_backup.txt ./backup2/trybe_backup.txt

rmdir backup

mv backup2 backup

pwd
ls

rm -r backup

clear

head -5 skills.txt

tail -4 skills.txt

rm *.txt
