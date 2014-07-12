# Facebook custom tab app creator

Unfortunately Facebook doesn't provide a UI for adding an FB app to an FB Page Tab (https://developers.facebook.com/docs/appsonfacebook/pagetabs/)[https://developers.facebook.com/docs/appsonfacebook/pagetabs/].

This app makes the process a bit less painful.

## Dev stack:

- NPM
- Yeoman (with angular-require generator)
- Grunt (automatisation and build tools)
- Bower (dependency managment)
- Bourbon for SCSS
- Compass Ruby gem (for compiling SCSS and generating bitmap/svg sprites)

## Setting up the project

1. Install Node and NPM using Homebrew ([http://brew.sh/](http://brew.sh/)):

        $ brew install node
        
2. Install Compass

        $ gem install compass


3. Install all the node packages (in the repository's root folder)

        $ npm install
        
3. Install all the project dev dependencies (in the repository's root folder)

        $ bower install
        


## Building the app

        $ grunt build
        
## Running the app using local server

        $ grunt serve