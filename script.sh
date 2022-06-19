#!/usr/bin/env 

# makes request to github api for all of your repos to retrieve the most recently created
# replace <username> with your github username
result=$(curl -s https://api.github.com/users/<username>/repos | jq -r 'sort_by(.created_at) | reverse | .[0]|.html_url | .[28:100] ')

# runs git clone command at the given file path which should be the same as foldername in index.js
# replace <username> with your github username
git clone git@github.com:<username>/"$result".git /Users/rodneytodd/personal_projects/sandbox/"$result"

# exit bash file
exit 0