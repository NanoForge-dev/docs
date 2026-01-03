#!/bin/bash

set -e

OUTPUT_DIR=${1:-gh-pages}

# Regular sphinx build

sphinx-build -b html . "$OUTPUT_DIR"

# Copy following files into output directory

INCLUDES_FILES=$(find . -type f | grep '\.gh-include$')

while IFS= read -r file; do
    while IFS= read -r include_file; do
        dest_file="$OUTPUT_DIR/$(dirname "$file")/$include_file"
        mkdir -p "$OUTPUT_DIR/$(dirname "$file")"
        cp "$(dirname "$file")/$include_file" "$dest_file"
    done < "$file"
done <<< "$INCLUDES_FILES"
