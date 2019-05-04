# ReClean 2.0
### React Server-Side Rendering App for Wordpress 5+ (REST-API)
---

* Live demo: **https://reclean.herokuapp.com/**
* Current version: **2.0-indev**
* Current state: (deep) **INDEV**
* Author: **Amadeusz Blanik** <amadeusz@blanik.me> (https://blanik.me)
* License: **GPL v3**

## First run

1. yarn install
2. yarn dev
3. Ready on http://localhost:8081

If you want to run it on VPS or VM just try `sh vm-install.sh` and then set reverse proxy to port 8081.

### Update
Just type `sh update.sh` in your terminal.

or paste
```
git pull;yarn install;yarn build;sudo pm2 stop "reaclean";sudo pm2 start "reaclean"
```
into your terminal.