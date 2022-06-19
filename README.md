# Github-repo-automation
![foxdemo](https://res.cloudinary.com/rodennis/image/upload/v1655658353/Screen_Shot_2022-06-19_at_12.03.14_PM_zidz8n.png)

## Contents
---
* [Why](#why)
* [Running the program](#to-run-the-program)
* [Who uses github repo automation](#who-uses-github-repo-automation)
* [How it works](#how-it-works)

## Why
---
* I wanted to speed up the process of creating and cloning a repository
* I wanted to learn more about sh files, and Bash
* It was a fun project
## To run the program
---
```

run git clone git@github.com:rodennis/github-repo-automation.git

cd github-repo-automation

run npm install

```
## Who uses github repo automation
---
* Anyone
* Everyone

## How it works
---

1. Prompts for a repo name
2. Makes a POST request to the github API endpoint, with the neccessary paramaters for creating a repository. Read more about API params here - https://docs.github.com/en/rest
3. Creates a new folder at the provided path (wherever you keep your projects).
4. Calls bash file (script.sh)
5. Script.sh makes a get request to the github api endpoint for all of given users repos.
6. The result is then sorted and sliced to retrieve the repository name.
7. Script.sh then makes a git clone command and clones the repository into the given file path. 