


### 8 Students Do: Push(That Portfolio though) previously existing Git project to GitHub (Maybe 15 mins)

* On your local machine in a local git Repository

* Suppose you've been working locally on a project, using git to save / version your work, but you haven't created a repo on GitHub for it yet.

* Return to your local git repo for the project

* Demonstrate that the local git repository is in fact a git repository, but you can't push. (Use "git status", then try "git push")

* If it's not a git repository, make sure to use "git init" to initialize a new repository, then use "git add *" to add all your files in this folder to the "staging" area. Use "git commit" to "save" the changes in your staging area.

* Use "git remote" to show there are no remotes.

* Make sure all files are added & committed on local repository

* Make sure you've copied the link to the git repo from GitHub.com (Same one used for cloning)

* git remote add origin <URL@github.com>

* show "git remote" and there is now a remote added.

* Use "git remote -v" to verify the remote, it will show (fetch/push) both for the new remote "origin"

* Use "git status" check for any local file changes

* Try to push it to your new remote. Use "git push" ---------> Results in a FAIL

* What happened!?

* Solution: The "remote repository" has "new files", specifically the "README.md" that is not available in your local git repository

* You need to do a "git pull" to get "the newest updates from the remote repository"

* Now that you've "pulled" the most recent updates, you should be able to push to your newly added remote. Do a "git push"

* Most likely Git will then prompt you with a message about a "default value for an upstream origin". Git provides you a suggested command to use to resolve this "setting" so that it never has to ask you again. Just copy it and paste it again and you should finally have pushed the remote repository.

