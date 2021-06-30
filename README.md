Rodando com docker de mysql, 

docker run --name mysql -e MYSQL_USER=giosql -e MYSQL_ROOT_PASSWORD=giovanni123 -e MYSQL_DATABASE=dados-save -p 8081:3306 -d mysql:latest
