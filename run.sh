#!/bin/bash

CONTAINER_NAME="playwright-test-container${3}"
IMAGE_NAME="${1}"
OUTPUT_FILE="playwright-resource-usage.txt${3}"

# Start the container
# docker run --name "$CONTAINER_NAME" \
#   -d "$IMAGE_NAME"\
#   npm run wdio

docker run --mount type=bind,src="$(pwd)/playwright.config.js",dst=/app/playwright.config.js --name "$CONTAINER_NAME" -d "$IMAGE_NAME"\
  npx playwright test


# Print column headers
echo "Time (s),CPU_Usage,Memory_Usage,Memory_Percent,Net_IO,Block_IO,PIDs" > "$OUTPUT_FILE" 

# Start monitoring loop
# while docker inspect --format '{{.State.Running}}' "$CONTAINER_NAME" &>/dev/null; do

start_time=$(date +%s)

while [ "$(docker inspect --format '{{.State.Running}}' "$CONTAINER_NAME" 2>/dev/null)" = "true" ]; do

  # timestamp=$(date '+%F::%T')
  current_time=$(date +%s)
  timestamp=$((current_time - start_time))

  STATS=$(docker stats --no-stream --format "{{.Name}},{{.ID}},{{.CPUPerc}},{{.MemUsage}},{{.MemPerc}},{{.NetIO}},{{.BlockIO}},{{.PIDs}}" 2>/dev/null | grep "$CONTAINER_NAME")
  # STATS=$(docker stats --no-stream --format "{{.CPUPerc}},{{.MemUsage}},{{.MemPerc}},{{.NetIO}},{{.BlockIO}},{{.PIDs}}" 2>/dev/null | grep "$CONTAINER_NAME")

  if [ -n "$STATS" ]; then
    echo "$timestamp,$STATS" >> "$OUTPUT_FILE"
  else
    echo "$timestamp ERROR timeout or no output" >> "$OUTPUT_FILE"
  fi
  
done
docker container stop $CONTAINER_NAME