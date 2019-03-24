git pull
yarn install
yarn build
sudo pm2 stop "reaclean"
sudo pm2 start "yarn start" --name "reaclean"