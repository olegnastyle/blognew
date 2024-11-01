export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: 'https://825f3fb1e2d0.vps.myjino.ru/api',
  // admin: {
  //   url: 'https://825f3fb1e2d0.vps.myjino.ru/admin',
  // },
  app: {  
    keys: env.array('APP_KEYS'),
  },
});
