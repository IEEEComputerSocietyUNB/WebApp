# Computer Society UnB WebApp

WebApp for IEEE Computer Society Student Branch UnB (University of Brasília).

## Schedule

| Date       | Description          |
| ---------- | -------------------- |
| 01/08/2017 | Init                 |
| 16/10/2017 | Init of Back-end     |
| 30/11/2017 | Demo with Ulisses    |

## URLS

```
/ -> Home with a list of posts
/post/new/ -> New post
```

## Configuration

### Start VE

```
$ python3 -m venv venv
$ source venv/bin/activate
```

## Database

We're using Postgres 9.5.4.

### Create and update on Django

```
$ python manage.py makemigrations
$ python manage.py migrate
```

## Server

We're using Heroku.

```
$ heroku login
$ git push heroku master
```

## Run

After run the command bellow the server will be up on the address http://127.0.0.1:8000/.

```
$ python manage.py runserver
```

## Team

- Project managers :
  - Dayanne Fernandes da Cunha
    - E-mail: dayannefernandesc@gmail.com
    - GitHub: [Dayof](https://github.com/Dayof)
    - Função : Back-end

  - Cristiano Silva Jr.
    - E-mail: cristianoalvesjr@gmail.com ou cristiano.a.junior@ieee.org
    - GitHub: [ishiikurisu](https://github.com/ishiikurisu)
    - Função : Front-end

  - Talitha Pumar Antunes
    - E-mail: tapumar@gmail.com
    - GitHub: [tapumar](https://github.com/tapumar)
    - Função : Back-end

  - Alexandre Augusto de Sá dos Santos
    - E-mail: lexander.santos@gmail.com
    - GitHub: [alexandrebarbaruiva](https://github.com/alexandrebarbaruiva)
    - Função : Front-end
