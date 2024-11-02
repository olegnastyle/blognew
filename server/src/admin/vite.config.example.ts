import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Важно: всегда возвращайте изменённую конфигурацию
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src', // Установка алиаса для пути к src
      },
    },
    server: {
      proxy: {
        // Настройка прокси для API Strapi
        '/api': {
          target: 'https://825f3fb1e2d0.vps.myjino.ru', // Убедитесь, что это базовый URL
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, '') // Удаляем '/api' из пути
        }
      }
    }
  });
};