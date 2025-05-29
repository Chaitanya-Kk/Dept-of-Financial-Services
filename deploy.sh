#!/bin/bash

# Deployment script for DFS website

echo "Starting deployment..."

# Build the project
npm run build

# Sync files to server
rsync -avz --delete ./dist/ user@server:/var/www/dfs-website/

# Clear cache
ssh user@server "sudo service nginx reload"

echo "Deployment complete!"