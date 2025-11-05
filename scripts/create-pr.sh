#!/bin/bash
# Create a PR using amp in a private thread

set -e

CMD="amp -x --dangerously-allow-all --visibility private < .agents/commands/create-pr.md"

echo "Running: $CMD"

result=$(eval "$CMD" 2>&1)

echo ""
echo "$result"
