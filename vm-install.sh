sudo yarn global add pm2;
yarn install;
yarn build;
sudo pm2 start "yarn start";