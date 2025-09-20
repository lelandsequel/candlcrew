#!/bin/bash
cd /home/user/webapp
npx netlify dev --port 3000 > netlify-dev.log 2>&1 &
echo "Netlify dev started in background"
echo "Logs: tail -f netlify-dev.log"
echo "Check status: curl http://localhost:3000/api/health"