export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://825f3fb1e2d0.vps.myjino.ru/',  // Замените на ваш URL
  admin: {
    url: 'https://825f3fb1e2d0.vps.myjino.ru/admin',  // Замените на ваш URL для админки
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
});
