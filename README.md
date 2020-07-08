# Gulp Automation for WordPress
Gulp Automation for WordPress Theme Development

# How to use it
=> After cloning the repo, place it inside your theme directory <code>wp-content/themes</code>.

=> Run <code>npm install</code> to install the dependencies.

=> Open up 'Gulpfile.js' and change the 'themename' variable with your theme slug (e.g custom-theme). That's it!

=> Go to the gulp directory and open a terminal and run <code>gulp watch</code>, it'll watch for any file changes inside your theme including sass and javascript files.

## BrowserSync
This tool comes with BrowserSync so you'll get live reloading feature out of the box as well.

## Considerations
If using Git for theme development and version control, make sure to add rule to ignore the gulp folder in your .gitignore file.

Hope this helps some of you guys with your WordPress Theme Development.

Cheers!