# Personal Project
Nama : Muhamad Irfan  
Nomor Absen : 157  
Judul : Sfile Clone  
Deskripi : aplikasi berbagi file

# Setup
- laragon (PHP version 8.3.6)
- composer (Composer version 2.7.6 )
- nodejs (v20.12.2)
- npm (10.5.0)

# How to Run
1. setup environment
   - open .env file
   - set database configuration in ``DB_CONNECTION``
   - set google auth in ``GOOGLE_CLIENT_ID`` & ``GOOGLE_CLIENT_SECRET``
   - set mail in ``MAIL_MAILER``
   - set facebook app_id in ``FACEBOOK_APP_ID``
   - set captcha key and secret in ``RECAPTCHA_SITE_KEY`` & ``RECAPTCHA_SECRET_KEY``

2. Open project in terminal
3. Run command
   - npm install
   - npm run build
   - composer install
   - php artisan migrate:fresh --seed
   - php artisan key:generate
   - php artisan serve
4. Open http://localhost:8000

# Login
```
# admin
email: admin@admin.com
pass: 1234

# guest
email: guest@guest.com
pass: 1234

# user
email: user@user.com
pass: 1234
```

# Preview
<details>
<summary>Home</summary> 

![alt Preview](https://github.com/irfanykywz-php-project/157-muhamad-irfan/blob/main/preview.png?raw=true)  
</details>

<details>
<summary>Profile</summary>

![alt Preview](https://github.com/irfanykywz-php-project/157-muhamad-irfan/blob/main/preview-panel.png?raw=true)
</details>

<details>
<summary>Admin</summary>

![alt Preview](https://github.com/irfanykywz-php-project/157-muhamad-irfan/blob/main/preview-admin.png?raw=true)
</details>
