# Partidos
Aplicación para organizar partidos de fútbol

## Prerrequisitos

### Instalar NVM ###

```
wget-qO-https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

### Instalar MySQL ###

Habrá que instalar MySQL añadiendo un usuario 'root', y password 'root'
```
sudo apt-get update
sudo apt-get install mysql-server
```

## Descargar
```
git clone http://github.com/luigonsec/partidos.git
cd partidos
```
## Montar Base de Datos
```
cd bd
mysql -u root -p root < bd.sql
```

## Instalar
Dentro del directorio que se genera tras la descarga, ejecutar

```
nvm use
npm install
```

## Ejecutar
```
npm start
```

## Testear

```
npm test
```
