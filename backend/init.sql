SET client_min_messages TO NOTICE;

DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'django_user') THEN
        EXECUTE format('CREATE USER django_user WITH PASSWORD %L', 'db_msc_2025_checklist@1.0');
        RAISE NOTICE 'Usuario django_user creado exitosamente';
    ELSE
        EXECUTE format('ALTER USER django_user WITH PASSWORD %L', 'db_msc_2025_checklist@1.0');
        RAISE NOTICE 'Contraseña de django_user actualizada';
    END IF;
END
$$;

SELECT 'CREATE DATABASE django_db_dev OWNER django_user'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'django_db_dev')\gexec

GRANT ALL PRIVILEGES ON DATABASE django_db_dev TO django_user;
ALTER USER django_user CREATEDB;

DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'postgres_admin') THEN
        EXECUTE format('CREATE USER postgres_admin WITH PASSWORD %L', 'db_msc_2025_checklist@1.1');
        RAISE NOTICE 'Usuario postgres_admin creado exitosamente';
    ELSE
        EXECUTE format('ALTER USER postgres_admin WITH PASSWORD %L', 'db_msc_2025_checklist@1.1');
        RAISE NOTICE 'Contraseña de postgres_admin actualizada';
    END IF;
END
$$;