# Laravel Echo Server (with updated socket.io 4+ and customized HTTP API)

This package was forked from:
https://github.com/tlaverdure/laravel-echo-server

# How to set up?
1. Clone the package.
``` shell
git clone https://git.syncwords.xyz/OleksiiFedorchak/sw-live-notifications.git {directory}
```
2. Go into project folder.
``` shell
cd {directory}
```
4. Copy and customize .env file.
``` shell
cp .env.example .env
```
5. Install npm dependencies.
``` shell
npm i
```
6. Run server.
``` shell
node run.js
```

# Using with Supervisor.
1. Go into supervisor folder
``` shell
cd supervisor
```
2. Customize .conf file based on provided example and copy config file into your supervisor conf.d folder:
``` shell
cp laravel-notifications-supervisor.conf.example /etc/supervisor/conf.d/laravel-echo-server.conf
```
3. Reread and start supervisor.
``` shell
supevisorctl reread
supevisorctl update
supevisorctl start laravel-echo-server:*
```

Sometimes you may also need to run this command before above commands.
``` shell
supevisorctl reload
```

# Important
Please make sure you provided correct host addresses in the .env file of sw live dashboard Laravel project!
