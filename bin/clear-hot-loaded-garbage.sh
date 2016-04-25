#!/usr/bin/env bash

// Since this project is using write-file-webpack-plugin
// every hot loading run by dev-server is writing a file into dist folder.
// This script clears that files.
// This script should run before start and deploy process.
// @TODO Convert to node.js script. Check how to solve the issue w/o scripts.

find ./ -type f -name "*.hot-update*" -delete
