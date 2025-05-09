import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@appComponents': path.resolve(__dirname, './src/component'),
            '@appConfig': path.resolve(__dirname, './src/config'),
            '@appStore': path.resolve(__dirname, './src/store'),
            '@appImages': path.resolve(__dirname, './src/images'),
            '@appInterfaces': path.resolve(__dirname, './src/interfaces'),
            '@appConst': path.resolve(__dirname, './src/const/'),
            '@appHelpers': path.resolve(__dirname, './src/helpers/'),
            '@appHooks': path.resolve(__dirname, './src/hooks/'),
            '@appRoutes': path.resolve(__dirname, './src/routes/'),
            '@appUtils': path.resolve(__dirname, './src/utils/')
        }
    },
    server: {
        port: 3000
    }
});
