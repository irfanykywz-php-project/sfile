import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/css/bootstrap-table.css',
                'resources/js/bootstrap-table.js',
                'resources/js/admin/files.js',
                'resources/js/admin/payment.js',
                'resources/js/admin/user.js',
                'resources/css/user/profile.css',
                'resources/js/user/profile.js',
                'resources/js/file.js',
                'resources/js/upload.js',
                'resources/js/upload-guest.js',
            ],
            refresh: true,
        }),
    ],
});
