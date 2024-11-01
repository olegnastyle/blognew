export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  //'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://825f3fb1e2d0.vps.myjino.ru'], // Укажите разрешенные источники
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Разрешенные методы
      allowedHeaders: ['Content-Type', 'Authorization'], // Разрешенные заголовки
      credentials: true, // Разрешить отправку куки
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];