#!/bin/bash

ps

sleep 30 &

ps
kill 3075

sleep 30
^Z
bg %1

sleep 300 &

sleep 200
^Z
sleep 100
^Z

jobs
fg %1
^Z

bg %3

fg %3
^Z
kill %1 %2 %3
