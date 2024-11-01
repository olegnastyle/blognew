module.exports = {
    apps: [
        {
            name: "nuxt-dev",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development"
            }
        },
        {
            name: "nuxt-prod",
            script: "npm",
            args: "run start",
            env: {
                NODE_ENV: "production"
            }
        }
    ]
}