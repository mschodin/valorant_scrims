# README

Relavent information:

* Ruby version
   - 2.6.6
   
* Database creation
   - `bundle exec rake db:migrate`

* How to run the test suite
   - `bundle exec rspec`
   - `yarn test`

* Services (job queues, cache servers, search engines, etc.)

### Deploying Branches to Heroku Steps
(steps for creating an app and initializing it are in HW4 these are for pushing a branch and changing app refs)

`heroku git:remote -a app-name`    // connect to app you want to deploy to \
`git remote -v`    // shows that heroku is using the right app \
`git push -f heroku branch-name:main`  // pushes branch to main of Heroku app 

### Commands to run in development
1. Enable WSL - Run powershell as administrator and enter the command:\
`dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`\
2. Download Ubuntu from the Microsoft Store\
3. Launch Ubuntu and complete installation and setup\
4. Run these commands to update apt and download ruby packages:\
`sudo apt-get update`\
`sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev`\
`cd`\
`git clone https://github.com/rbenv/rbenv.git ~/.rbenv`\
`echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc`\
`echo 'eval "$(rbenv init -)"' >> ~/.bashrc`\
`exec $SHELL`\
`git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build`\
`echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc`\
`exec $SHELL`\
`rbenv install --verbose 2.6.6`\
`rbenv global 2.6.6`\
`gem install bundler -v '~> 1.17.3'`\
`rbenv rehash`\

1. Follow the instructions on the following website to set up WSL with Ubuntu, and install Ruby on Rails. Use ruby version 2.6.6, rails version 6.1.1, and bundler version 1.17.3:
`https://medium.com/swlh/install-ruby-on-rails-on-windows-10-through-wsl-23502e801fe8`\
To install specific bundler version replace the `gem install bundler` command with `gem install bundler -v '~> 1.17.3'`\
1. When working with JavaScript we are using yarn to install our packages. Install Yarn with:\
`curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`\
`echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`\
`sudo apt update && sudo apt install yarn`
2. To add frontend js libraries use:
`yarn add <library-name>`
3. To install all gems and npm libraries specified in gem file and package.json use:
`yarn install`\
`bundle install`
4. Install redis
`sudo apt install redis-server`
 then run a redis server to control the cables
`redis-server`
5. Commands to run the server:
 * Run the server: `bundle exec rails server`
 * To see JS changes automatically get packed by webpack run: `./bin/webpack-dev-server`

### Commands to run in development
1. When working with JavaScript we are using yarn to install our packages. Install Yarn with:\
`curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`\
`echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`\
`sudo apt update && sudo apt install yarn`
2. To add frontend js libraries use:
`yarn add <library-name>`
3. To install all gems and npm libraries specified in gem file and package.json use:
`yarn install`\
`bundle install`
4. Install redis
`sudo apt install redis-server`
 then run a redis server to control the cables
`redis-server`
5. Commands to run the server:
 * Run the server: `bundle exec rails server`
 * To see JS changes automatically get packed by webpack run: `./bin/webpack-dev-server`
