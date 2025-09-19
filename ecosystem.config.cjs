module.exports = {
  apps: [
    {
      name: 'taberna-training-game',
      script: 'npx',
      args: 'wrangler pages dev dist --ip 0.0.0.0 --port 3000',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      max_restarts: 3,
      restart_delay: 1000
    }
  ]
}