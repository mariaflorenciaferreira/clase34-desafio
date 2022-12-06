## comandos


### modo cluster
#### forever server.js 8080 --m cluster

### modo fork
#### forever server.js 8080 --m fork

### detener
#### forever stopall

### PM2 (usar en gitbash)

### modo fork
#### pm2 start server.js --name="serverFork" --watch -- 8081

### modo cluster
#### pm2 start server.js --name="serverCluster" --watch -i max -- 8081

### detener servidores
#### pm2 stop serverFork
#### pm2 stop serverCluster

### borrar servidores
#### pm2 delete serverFork
#### pm2 delete serverCluster

### nginx
#### tasklist /fi "imagename eq nginx.exe"
#### taskkill /F /IM nginx.exe

