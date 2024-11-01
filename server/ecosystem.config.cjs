module.exports = {
    apps: [
        {
            name: 'server-dev',
            script: 'yarn',
            args: 'develop',
            env: {
                NODE_ENV: 'development',
                ADMIN_PATH: '/admin',
                STRAPI_ADMIN_BACKEND_URL: 'http://localhost:1337/admin',
                STRAPI_TELEMETRY_DISABLED: 'true',
            },
        },
    ],
};