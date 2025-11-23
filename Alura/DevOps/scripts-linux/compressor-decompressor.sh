#!/bin/bash

# Script to compress and decompress files
# Usage: ./compressor-decompressor.sh <operation> <file_output> <files>

read -p "Enter the operation: 'compress' or 'decompress'" operation

case $operation in
    compress)
        read -p "Enter the file to compress (.tar.gz): " file_output
        read -p "List of files to compress: " files
        tar -czf $file_output $files
        echo "Compression completed successfully. The file is $file_output"
    ;;
    decompress)
        read -p "Enter the file to decompress (.tar.gz): " file
        read -p "Enter the directory to decompress to: " directory
        tar -xzf $file -C $directory
        echo "Decompression completed successfully in $directory. The file is $file"
    ;;
    *)
    echo "Invalid operation"
    echo "Select 'compress' or 'decompress'"
    exit 1
    ;;
esac




