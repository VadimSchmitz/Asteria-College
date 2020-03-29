# Asteria College <img style="align: right; float: right" src="https://img.shields.io/badge/php-%5E7.2.3-purple" alt="PHP Version">

#### First set-up
Follow the instructions to run the project yourself for development.

$ `composer install`

$ `npm install`
***
 
#### Create a .env File
```textmate
Copy .env.example to .env 
Fill in the database settings
```

#### Set the Application Keys & prepare database
$ `php artisan key:generate`

$ `php artisan jwt:secret`

$ `php artisan migrate:refresh —seed`

$ `composer dump-autoload`
***
#### Run the project
$ `php artisan serve`

$ `npm run watch`
*** 
Now, a window wil open and every time you edit something it wil automaticly compile and reload


### Development Team

* **Evan Verdoorn** - *HBO-ICT* - [verd0049](https://github.com/verd0049)
* **Levi Deurloo** - *HBO-ICT* - [levideurloo](https://github.com/levideurloo)
* **Vadim Schmitz** - *HBO-ICT* - [VadimSchmitz](https://github.com/VadimSchmitz)
* **Anissa Boufrahi** - *HBO-ICT* - [Anfaza](https://github.com/Anfaza)
* **Mariska Harnam** - *HBO-ICT* - [MariskaH](https://github.com/MariskaH)
* **Calvin Hannewijk** - *HBO-ICT* - [PizzaDragon](https://github.com/PizzaDragon)
