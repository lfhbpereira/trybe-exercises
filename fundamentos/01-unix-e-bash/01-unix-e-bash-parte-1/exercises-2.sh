#!/bin/bash

cd unix_tests
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

cat countries.txt

less countries.txt

less countries.txt
/Zambia

grep Brazil countries.txt

grep -i brazil countries.txt

grep -iv fox phrases.txt

wc -w phrases.txt

wc -l phrases.txt

touch empty.tbt empty.pdf

ls

ls *.txt

ls *.tbt *.txt

man ls
