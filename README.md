# tailor-server

### Add a new fragment sub-module

1. Create a git repo following respecting the patern name `fragment-<module name>`
2. Add the new submodule to this project by forcing add the the ignored folder package
```
git submodule add -f git@github.com:arenac/fragment-<module name>.git packages/fragment-<module name>
```
3. Go to the new folder `packages/fragment-<module name>`
4. Initialize the project
`npm init -y`
5. Add the .gitignore within the `node_modules` as contend
6. Commit and push to origin master the first time
7. You might nedd to add manually the new submodule in the .gitmodules. To do so, just follow the previous examples, like 
```
[submodule "packages/fragment-<module name>"]
	path = packages/fragment-<module name>
	url = git@github.com:arenac/fragment-<module name>.git
```