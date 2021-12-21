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

### Commands to setup and run in development
1. Follow the instructions on the following website to set up WSL with Ubuntu, and install Ruby on Rails.\
Use ruby version 2.6.6, rails version 6.1.1, and bundler version 1.17.3\
To install specific bundler version replace the `gem install bundler` command with `gem install bundler -v '~> 1.17.3'`\
Instructions found here: `https://medium.com/swlh/install-ruby-on-rails-on-windows-10-through-wsl-23502e801fe8`\

Those instructions are gone. Here are the new ones:\
A. Install Ubuntu version 20 \
B. Enable WSL by entering this command in powershell: `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`\
C. Restart PC\
D. Open Ubuntu from windows explorer\
E. Go through basic Ubuntu setup\
F. WSL should now work. Check by typing `wsl` in powershell.\
G. Run this command in wsl: `sudo apt-get install libpq-dev ruby-dev`\

You may need these: `sudo apt install curl\
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -\
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -\
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list\

sudo apt-get update\
sudo apt-get install git-core zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev nodejs yarn`\

2. When working with JavaScript we are using yarn to install our packages. Install Yarn with:\
`curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`\
`echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`\
`sudo apt update && sudo apt install yarn`
4. Setup is complete, run these commands to install ruby gems and npm libraries:
`yarn install`\
`bundle install`\
5. Next are routes and database migration:
`bundle exec rake routes`\
`bundle exec rails db:migrate`\
6. Now start your local dev server by running:
`bundle exec rails server`\
7. In a separate terminal start the webpack dev server to see javascript changes in real time:
`./bin/webpack-dev-server`\
8. Go to `localhost:3000` to view the dev server website
