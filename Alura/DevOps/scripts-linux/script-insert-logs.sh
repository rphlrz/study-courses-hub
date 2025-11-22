#!/bin/bash

# This script inserts sample log messages into the system log using the 'logger' command.
# It simulates various log levels (error, warning, info) and scenarios (failures, access denied, etc.)
# Useful for testing log monitoring and filtering scripts.

logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=error msg=\"error: Failed to start Apache service\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=warning msg=\"failed: Nginx service failed to restart\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=info msg=\"access denied: Database access attempt failed\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=error msg=\"unauthorized: SSH login attempt failed\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=info msg=\"System functioning correctly\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=warning msg=\"fail: Network driver error\""
