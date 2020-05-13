#!/bin/bash

grep 'https\|http' ./sample/sample.txt | awk '{if($3==""){print $1} else {print $3}}' > ./sample/generate/urls.txt