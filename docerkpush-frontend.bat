@ECHO OFF

docker build -t registry.mitchg.dev/portfolio-frontend:latest .
docker tag portfolio-frontend:latest registry.mitchg.dev/portfolio-frontend:latest
docker push registry.mitchg.dev/portfolio-frontend:latest
PAUSE