#!/bin/bash
set -e

# Install dependencies if node_modules does not exist
if [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  npm install
fi

# Compile TypeScript and bundle frontend assets
npm run build

# Start the server in background
node dist/server.js &
SERVER_PID=$!

# Ensure the server is stopped on exit
trap 'kill $SERVER_PID' EXIT

# Wait a moment for the server to be ready
sleep 2

# Run Cypress tests
npm test
