# Computer Society UnB WebApp

WebApp for IEEE Computer Society Student Branch UnB (University of Brasília).

## Schedule

| Data       | Descrição            |
| ---------- | -------------------- |
| 01/08/2017 | Init               |
| 16/10/2017 | Início do Back-end   |
| 30/11/2017 | Demo com Ulisses     |

## Configuration

### Start VE

'''
$ python3 -m venv venv
$ source venv/bin/activate
'''

### Install basic environment

'''
$ pip install --upgrade pip
$ pip install django~=1.9.0
'''

### Start Django project

The first command start the project and the second create a module to act like a blog.

'''
$ django-admin startproject proj .
$ python manage.py startapp blog
$ python manage.py createsuperuser
'''

## Database

### Create

'''
$ python manage.py makemigrations blog
'''

### Update database

'''
$ python manage.py migrate
'''

## Run

After run the command bellow the server will be up on the address http://127.0.0.1:8000/.

'''
$ python manage.py runserver
'''


## Equipe responsável

- Gerentes do projeto :
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
