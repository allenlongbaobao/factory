echo "Starting MongoDB.."
nohup ../mongodb-linux-i686-2.4.5/bin/mongod --port=12345 --dbpath=./data > ./log/info 2> ./log/error &
echo "MongoDB start running!"

echo "starting factory"
node app.js
echo "factory is started!"

