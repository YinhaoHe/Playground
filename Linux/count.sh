#!/bin/bash

seconds=15
echo "Linux is shutting down after ${seconds}s"          
date_1=$((`date +%s` + $seconds))

while [ "$date_1" -ge `date +%s` ]; do
echo -ne "$(date -u --date @$(($date_1 - `date +%s` )) +%H:%M:%S)\r"
     done

echo -e "Do you really want to shutdown the system? Press [Y/y] to shutdown or [n/N] to cancel/exit:" 
read var
if [[ "$var" == "y" ]] || [[ "$var" == "Y" ]]
then
sudo poweroff
elif [[ "$var" == "n" ]] || [[ "$var" == "N" ]]
then
exit 1
fi