# Computer Society UnB WebApp

WebApp for IEEE Computer Society Student Branch UnB (University of Brasília).

## Schedule

| Date       | Description          |
| ---------- | -------------------- |
| 01/08/2017 | Init                 |
| 16/10/2017 | Init of Back-end     |
| 16/10/2017 | Deploy of the WebApp |
| 30/11/2017 | Demo with Ulisses    |

## Configuration

### Start VE

```
$ python3 -m venv venv
$ source venv/bin/activate
```

## Installing the requirements

```
pip install -r requirements.txt
```

## Database

We're using Postgres. Therefore, install [Postgres](https://www.postgresql.org/download/).
After installation, the port selected for the project is 5432.

### Create and update on Django

```
$ python manage.py makemigrations
$ python manage.py migrate
```

## Server

We're using Heroku > https://ieeecsunb.herokuapp.com.

```
$ heroku login
$ git push heroku master
$ heroku ps:scale web=1 # one dyno
$ heroku open
$ heroku run python manage.py migrate
```

## Run

After running the command below the server will be up on the address http://127.0.0.1:8000/.

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
