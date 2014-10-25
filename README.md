# SwiftIRC Wiki

This is the (un)official repository for the SwiftIRC wiki project.

## Editing Content

To edit content, you will need a GitHub account. You can create one for free [here](https://github.com/ "GitHub"). Once you have created an account, tell zomg so you can get access to SwiftIRC's repos.

There are two methods for editing content and each has its pros and cons. New users may wish to follow The Easy Way while advanced users will find that The Harder Way allows them to modify much more than text.

### The Easy Way

For the sake of simplicity, we recommend that you edit the file directly through the GitHub website. Simply navigate to the file you wish to edit, make your changes, and commit them. Make sure to add a short message letting everyone know what you changed. It's important that you double check your changes and have others proof read them before committing them. Please do **NOT** use this method as a means of saving your work. You should only be committing things that are ready to be displayed to users.

#### Testing Changes

Testing your changes can be difficult without following the steps outlined in the The Hard Way section. However, the [Mou](http://25.io/mou/ "Mou") and [MarkdownPad](http://markdownpad.com/ "MarkdownPad") editors will allow you to preview what your changes might look like. Please note that these editors won't apply stylistic changes like colors and font sizes; they simply render text similar to basic HTML.

### The Harder (but better) Way

To do things properly, you'll need to install [Git](http://git-scm.com/downloads "Git Downloads") and a text editor that is NOT Microsoft Word, Word Pad, or Notepad. We recommend that you use [Sublime Text](http://www.sublimetext.com/2 "Sublime Text 2"). The following instructions assume that you're doing everything via command line. And frankly, you should be :3

Clone the repository to your computer:

```
git clone https://github.com/SwiftIRC/wiki.git
```

Make the appropriate edits to your files, then commit them. Please use one commit message per significant change e.g. rewriting parts of separate files at one time. Each document should have a different commitmessage outlining what you've changed. Small typo fixes can be grouped together in one commit.

Add your files and commit your changes like so:

```
git add index.md
git commit -m "Updated index to include new server."
```

You may make several commits this way. Once you're satisfied with your changes, push them to the repository on GitHub:

```
git push
```

In some setups, you may need to explicity push to the right place. To do so, issue the following command:

```
git push origin master
```

#### Branching

If you don't know what branches are, skip this. If you do, great.

Please use branches for significant change sets and push them into master once you are satisfied with everything. It'd be super swell if you also submitted a pull request for changes that warrant their own branch just to allow people to look over the changes. <3

## Development & Testing Changes

To edit and build documentation, you will need the following tools:

- [Ruby v2.0.0](https://www.ruby-lang.org/en/downloads/ "Ruby Downloads")
- [Ruby Gems](https://rubygems.org/pages/download "Ruby Gems Downloads")
- [Node.js/NPM](http://nodejs.org/download/ "Node.js Downloads")

Be aware that your Operating System may come with several of these tools. Once you've verified the tools are installed, issue the following commands:

```
git clone https://github.com/SwiftIRC/wiki.git # Check out the repo
gem install bundler # Install Bundler
bundle install # Install other gems
npm install # Install Node.js modules
bower install # Install Bower components
```
### Adding and Building Assets

The `bower` utlity is used to manage web assets such as Twitter Bootstrap and jQuery. In most cases, you will simply need to run the `bower install` utility in order to get these assets. If you with to add assets, you will need to edit the `bower.json` file and add the package as a dependency.

Once the assets have been downloaded, you will need to build them with the `grunt` utility. This will compule CSS and JavaScript, minify scripts as needed, and move assets that aren't included by Bower to the proper location. If you plan on editing CSS or JavaScript, you will need to issue the `grunt` command in order for those changes to appear on the site. Once edits are made, commit the changes you've made to anything in the `site_components` and `source/assets` directories.

### Previewing Changes

Jekyll provides a way to run a web server locally that will update the site when you make changes. To use this internal server, issue the following command within the project directory:

`jekyll serve --watch`

You should now see the site at `http://0.0.0.0:4000`. Once you make changes to content or assets, Jekyll will rebuild the page. You can then view the changes by refreshing the page in your browser.

## Deployment

This site is currently deployed to Heroku for accessibility. If you need access to the SwiftIRC account, let zomg know. Otherwise, you can deploy this to your own Heroku account.

Install the Heroku toolbelt to add your key to your account. If you already have the toolbelt installed, it might be best to use the `accounts` plugin to make managing different accounts easier. If you're using the plugin, make sure you've configured Heroku to use the right account with `heroku accounts:set MYACCOUNTNAME`.

You will need to add the Heroku repository to your git config. To do so, type: 

```
heroku git:remote -a swiftirc-wiki
```

Note: If you are deploying this to your account you will need to change `swiftirc-wiki` to your application's name.

We use a custom build pack in order to build Jekyll remotely and avoid having to commit rendered documents to Git. To use the build pack, issue the following command:

```
heroku config:set BUILDPACK_URL=https://github.com/SwiftIRC/heroku-buildpack-ruby-octopress
```

Commit your changes as usual to the repo, and issue the following command to push the changes to Heroku:

```
git push heroku master
```

At times, you may need to deploy a specific banch to Heroku instead of the `master` branch. This can be achieved by specifying the branch name like so:

```
git push heroku mybranch:master
```

### Heroku Logs

Heroku's logs can be viewed locally and are useful for finding errors after deployment. To view them, issue the following command in the working tree:

```
heroku logs
```

## Notes

Do not mess with the Gemfile.lock file unless you have changed the Gemfile. Don't change the Gemfile unless you know what you are doing. Same goes for the Procfile and config files!