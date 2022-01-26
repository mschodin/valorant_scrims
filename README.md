# README

Web app created using Ruby & React to allow users to create accounts, customize profiles, create teams with other users, and schedule and manage scrimmages against other teams.

Relavent information:

* Ruby version
   - 2.6.6
   
* Rails version
   - 6.1.1

* Bundler version
   - 1.17.3

### Setup WSL
A. Install Ubuntu version 20 \
B. Enable WSL by entering this command in powershell: `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`\
C. Restart PC\
D. Open Ubuntu from windows explorer\
E. Go through basic Ubuntu setup\
F. WSL should now work. Check by typing `wsl` in powershell.\

### Commands to setup and run in development
1. Use WSL (Ubuntu v20) to run the app, instructions for setting up WSL are below.\
Use ruby version 2.6.6, rails version 6.1.1, and bundler version 1.17.3\

2. Run the following commands in WSL:\
`sudo apt-get update`\
`sudo apt-get install git-core libpq-dev ruby-dev zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev nodejs yarn`\
`curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -`\
`curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`\
`echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`\
`sudo apt update && sudo apt install yarn`

4. Setup is complete, run these commands to install ruby gems and npm libraries:\
`yarn install`\
`bundle install`

5. Next are routes and database migration:\
`bundle exec rake routes`\
`bundle exec rails db:migrate`

6. Now start your local dev server by running:\
`bundle exec rails server`

7. In a separate terminal start the webpack dev server to see javascript changes in real time:
`./bin/webpack-dev-server`\

8. Go to `localhost:3000` to view the dev server website
