#!/bin/bash

# This script processes log files by filtering for errors and sensitive data,
# redacting sensitive information, and generating statistics.
# It combines the processed logs into a single file and archives them.

LOG_DIR="../myapp/logs"
PROCESSED_DIR="../myapp/processed-logs"
TEMP_DIR="../myapp/temp-logs"

mkdir -p $PROCESSED_DIR
mkdir -p $TEMP_DIR

find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' file; do
    grep "ERROR" "$file" > "${file}.filtered"
    grep "SENSITIVE_DATA" "$file" >> "${file}.filtered"

    sed -i 's/User password is .*/User password is REDACTED/g' "${file}.filtered"
    sed -i 's/User password reset request with token .*/User password reset request with token REDACTED/g' "${file}.filtered"
    sed -i 's/API key leaked: .*/API key leaked: REDACTED/g' "${file}.filtered"
    sed -i 's/User credit card last four digits: .*/User credit card last four digits: REDACTED/g' "${file}.filtered"
    sed -i 's/User session initiated with token: .*/User session initiated with token: REDACTED/g' "${file}.filtered"

    sort "${file}.filtered" -o "${file}.filtered"

    uniq "${file}.filtered" > "${file}.unique"

    word_count=$(wc -w < "${file}.unique")
    line_count=$(wc -l < "${file}.unique")

    filename=$(basename "${file}.unique")

    echo "File: $filename" >> "${PROCESSED_DIR}/log_stats_$(date +%F).txt"
    echo "Line count: $line_count" >> "${PROCESSED_DIR}/log_stats_$(date +%F).txt"
    echo "Word count: $word_count" >> "${PROCESSED_DIR}/log_stats_$(date +%F).txt"
    echo "--------------------------" >> "${PROCESSED_DIR}/log_stats_$(date +%F).txt"

    if [[ "$filename" == *frontend* ]]; then
        sed 's/^/[FRONTEND] /' "${file}.unique" >> "${PROCESSED_DIR}/combined_logs_$(date +%F).log"
    elif [[ "$filename" == *backend* ]]; then
        sed 's/^/[BACKEND] /' "${file}.unique" >> "${PROCESSED_DIR}/combined_logs_$(date +%F).log"
    else
        cat "${file}.unique" >> "${PROCESSED_DIR}/combined_logs_$(date +%F).log"
    fi
done

sort -k2 "${PROCESSED_DIR}/combined_logs_$(date +%F).log" -o "${PROCESSED_DIR}/combined_logs_$(date +%F).log"

mv "${PROCESSED_DIR}/combined_logs_$(date +%F).log" "$TEMP_DIR/"
mv "${PROCESSED_DIR}/log_stats_$(date +%F).txt" "$TEMP_DIR/"

tar -czf "${PROCESSED_DIR}/logs_$(date +%F).tar.gz" -C "$TEMP_DIR" .

rm -r "$TEMP_DIR"