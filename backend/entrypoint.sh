#!/bin/bash
set -e

until PGPASSWORD='db_msc_2025_checklist@1.0' psql -h db -U django_user -d django_db_dev -c "SELECT 1" > /dev/null 2>&1; do
  echo "📡 PostgreSQL no disponible - reintentando en 1s..."
  sleep 1
done

echo "✅ PostgreSQL está listo y accesible con django_user!"

echo "📦 Aplicando migraciones..."
python manage.py migrate --no-input

echo "🌐 Iniciando servidor Django..."
exec python manage.py runserver 0.0.0.0:8000