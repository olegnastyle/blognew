module.exports = {
    apps: [
        {
            name: 'server-dev',
            script: 'npm',
            args: 'run develop',
            env: {
                NODE_ENV: 'development',
                HOST: '0.0.0.0',
                PORT: 1337,
                DATABASE_URL: '.tmp/data.db',
            }
        },
    ],
};