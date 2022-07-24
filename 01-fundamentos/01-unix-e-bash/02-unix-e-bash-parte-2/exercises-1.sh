#!/bin/bash

cd unix_tests

cat > skills2.txt
Internet
Unix
Bash
^D

cat >> skills2.txt
HTML
CSS
JavaScript
SQL
Python
^D
sort < skills2.txt

wc -l skills2.txt

sort skills2.txt | head -3 > top_skills.txt

cat > phrases2.txt
Living in Brazil
Listening to music
Studying Unix
Walking around
^D

grep -i br phrases2.txt | wc -l

grep -iv br phrases2.txt | wc -l

cat >> phrases2.txt
Canada
Denmark
^D

cat phrases2.txt countries.txt > bunch_of_things.txt

sort bunch_of_things.txt
