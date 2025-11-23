#!/bin/bash

# Script to backup files
# Usage: ./backup-parameters-script.sh <backup_file_name> <files_to_backup>

if [ "$#" -lt 2 ]; then
    echo "The program $0 needs the backup file name and the files to backup as arguments."
    exit 1
fi

file_output="$1"
files=("${@:2}")

tar -czf "$file_output" "${files[@]}"

echo "Backup completed successfully. The file is $file_output"
