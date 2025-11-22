#!/bin/bash

# This script performs system monitoring by checking logs, network connectivity,
# disk usage, and hardware metrics (RAM, CPU, I/O).
# It generates reports in a specified directory.

LOG_DIR="system_monitoring"
mkdir -p $LOG_DIR

function monitor_logs() {
    grep -E "fail(ed)?|error|denied|unauthorized" /var/log/syslog | awk '{print $1, $2, $3, $5, $6, $7}' > $LOG_DIR/system_logs_monitoring.txt
    grep -E "fail(ed)?|error|denied|unauthorized" /var/log/auth.log | awk '{print $1, $2, $3, $5, $6, $7}' > $LOG_DIR/auth_logs_monitoring.txt
}

function monitor_network() {
    if ping -c 1 8.8.8.8 > /dev/null; then
        echo "$(date): Active connectivity." >> $LOG_DIR/network_monitoring.txt
    else
        echo "$(date): No internet connection." >> $LOG_DIR/network_monitoring.txt
    fi

    if curl -s --head https://www.alura.com.br/ | grep "HTTP/2 200" > /dev/null; then
        echo "$(date): Connection to Alura successful." >> $LOG_DIR/network_monitoring.txt
    else
        echo "$(date): Failed to connect to Alura." >> $LOG_DIR/network_monitoring.txt
    fi
}

function monitor_disk() {
    echo "$(date)" >> $LOG_DIR/disk_monitoring.txt
    df -h | grep -v "snapfuse" | awk '$5+0 > 70 {print $1 " is at " $5 " usage."}' >> $LOG_DIR/disk_monitoring.txt
    echo "Disk usage in main directory:" >> $LOG_DIR/disk_monitoring.txt
    du -sh /home/gabi >> $LOG_DIR/disk_monitoring.txt
}

function monitor_hardware() {
    echo "$(date)" >> $LOG_DIR/hardware_monitoring.txt
    free -h | grep Mem | awk '{print "Total RAM Memory: " $2 ", Used: " $3 ", Free: " $4}' >> $LOG_DIR/hardware_monitoring.txt
    top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print "CPU Usage: " 100 - $1 "%"}' >> $LOG_DIR/hardware_monitoring.txt
    echo "Read and write operations:" >> $LOG_DIR/hardware_monitoring.txt
    iostat | grep -E "Device|^sda|^sdb|^sdc" | awk '{print $1, $2, $3, $4}' >> $LOG_DIR/hardware_monitoring.txt
}

function execute_monitoring() {
    monitor_logs
    monitor_network
    monitor_disk
    monitor_hardware
}

execute_monitoring