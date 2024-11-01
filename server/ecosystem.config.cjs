module.exports = {
    apps: [
        {
            name: 'server-dev',
            script: 'yarn',
            args: 'develop',
            env: {
                NODE_ENV: 'development',
                HOST: '0.0.0.0',
                PORT: 1337,
            }
        },
    ],
};