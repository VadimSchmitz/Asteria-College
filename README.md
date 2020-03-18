# Project Asteria College

## First set-up
Fill following cmd's

        > Composer i
        
        > npm i
        
*Copy .env.example to .env*
        
*Fill DB fields*

Then:
        
        > php artisan key:generate
        
        > php artisan jwt:secret  (if this doesn't work first > composer require tymon/jwt-auth)
        
        > php artisan migrate:refresh —seed
        
        > composer dumpautoload
        
        > php artisan serve
        
        > npm run watch

Authomatic window wil open and every change it refreshes


## Auteurs

* **Evan Verdoorn** - *HBO-ICT* - [verd0049](https://github.com/verd0049)
* **Levi Deurloo** - *HBO-ICT* - [levideurloo](https://github.com/levideurloo)
* **Vadim Schmitz** - *HBO-ICT* - [VadimSchmitz](https://github.com/VadimSchmitz)
* **Anissa Boufrahi** - *HBO-ICT* - [Anfaza](https://github.com/Anfaza)
* **Mariska Harnam** - *HBO-ICT* - [MariskaH](https://github.com/MariskaH)
* **Calvin Hannewijk** - *HBO-ICT* - [PizzaDragon](https://github.com/PizzaDragon)
