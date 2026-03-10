- **Heading1-->**syntax 
- **Heading2 -->** puropse of the command
- **heading3 -->** example

# git config --global user.name
## it is used to set user  name for every git commut
###  config --global user.name "prathima"

# git config --global user.email
## it is used to associate email address with commits
###  git config --global user.email "n220460@rguktn.ac.in"

# git config --list
## shows all git configuration settings stored in the system
### git config --list 

# git config --unset 
## used to remove configuration value
### git config --unset user.name

# git init
## this creates a new git reposotory in the current folder
### git init

# git clone reposotory_url
## it is used to clone the existing folder
### git clone https://github.com/name/project.git

# git clone --branch branch-name reosotory url
## clones a specific branch insted of the defualt branch
### git  clone --branch branch-name  give url reosotory url

# git clone --depth 1 reposotary_url
## performs a shollow clone means downloading only latest commands
### git clone --depth 1 reposotary_url(downloading url)

# git status
##  shows the status of current reposotory
### git status

# git log
##  Displays the complete commit history of the reposotory
### git log

# git log  --oneline
## shows the commit history in single short line format it shows only id and commit message
### git log --oneline

# git log --graph
## displays the commit istory with visual branch structure(in projects it shows how branches connected and merged)
### git log --graph

# git show <commit_id>
## Displays the informaytion of specifit commit id
### git show a23qwe3

# git diff 
## shows the diffrence between file versions that are not staged at
### git diff

# git diff --stagged
## shows the difference between staged and last commit files
### git diff --stagged

# git blame <file_name>
## shows who modified each line of file
### git blame index.html

# git reflog
## shows the recent history(git commands) of reposotory or stores every action performed in git
### git reflog

# git shortlog
## shows the summary commits grouped by the user
###  git shortlog

**4.File tracking commands**




 
