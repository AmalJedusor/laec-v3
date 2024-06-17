#!/bin/sh

while ! nc -z db 3306 ; do
    echo "Waiting for the MySQL Server"
    sleep 3
done

while ! nc -z es 9200 ; do
    echo "Waiting for Elasticsearch"
    sleep 3
done

python manage.py makemigrations
python manage.py migrate
python manage.py import-programme-v2
python manage.py import-programme-json
python manage.py import-gsheet
python manage.py import-plans-livrets
python manage.py rebuild_index --noinput
python manage.py collectstatic --no-input --clear

exec "$@"

#python manage.py runserver 0.0.0.0:8000
