#!/bin/bash

# Script to monitor nginx
# Usage: ./monitor-nginx.sh

if pgrep nginx &> /dev/null
then
    echo "Nginx is RUNNING $( date +'%Y-%m-%d %H:%M:%S' )"
else
    echo "Nginx is NOT running $( date +'%Y-%m-%d %H:%M:%S' )"
fi
