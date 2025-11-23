#!/bin/bash

# This script is a placeholder for a bash script.
# This script will be used to create backups of some directories present in the system.
# The backup is stored in a file called backup.tar.gz.

# Example usage:
# ./script.sh

directory_backup="/home/raphael/devops"
file_name="backup_$(date +%Y-%m-%d_%H-%M-%S).tar.gz"

tar -czf $file_name $directory_backup
echo "Backup created: $file_name"


