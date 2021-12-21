#!/bin/bash

#########################################################
#  Take user input, save in .txt convert to json and    #
#  send data in ELK                                     #
#                                                       #
#  Developed by Alexandru Manea - Luxoft DXC            #
#########################################################

echo 'Read the user input'

echo '------------------------'
echo '------------------------'
echo '------------------------'
echo '------------------------'

#Read tge machine timestamo
timestamp() {
  date +"%FT%T.%3NZ" # current time
}

#Redirect the function into a variable  and then into text.txt file to be processed
time="$(timestamp)"
echo "@timestamp,$time" >> test.txt


#1
echo "Enter your name: "
read Executer

#2
echo "VU1 or VU2: "
read VU

#3
echo "Start-Time, Please respect this format yyyy-mm-ddThh:mm:ss"
read Start

#4
echo "End-Time, Please respect this format yyyy-mm-ddThh:mm:ss"
read End

#5
echo "Module: "
read Module

#6
echo "Status: "
read Status

#7
echo "Task Description: "
read Task



echo '------------------------'
echo '------------------------'
echo '------------------------'
echo "Executer,$Executer" >> test.txt
echo "VU,$VU" >> test.txt
echo "Start-Time,$Start" >> test.txt
echo "End-Time,$End" >> test.txt
echo "Module,$Module" >> test.txt
echo "Status,$Status" >> test.txt
echo "Task Description,$Task" >> test.txt


#Converting .txt to .json file
echo 'Start Converting'
jq -R -n -c '[inputs|split(",")|{(.[0]):.[1]}] | add' test.txt > vm2es.json


echo '------------------------'
echo '------------------------'
echo '------------------------'


#Concatenate the output
echo 'Cat the json file'
cat vm2es.json

echo '------------------------'
echo '------------------------'
echo '------------------------'
echo 'Sending into elasticsearch, INDEX=remotesqe'
 curl -XPOST "localhost:19200/vm2sqe/_doc/" -H 'Content-Type: application/json' -d @vm2es.json

echo '------------------------'
echo '------------------------'
echo '------------------------'
#Delete the file
echo 'Now I do the cleaning ;)'
rm -rf test.txt
rm -rf vm2es.json

echo '------------------------'
echo '------------------------'
echo '------------------------'
echo 'Success!'
