# How to help

### Setting up your fork

To work on this project, set up your own fork (private copy of the project associated with your account) and make edits to that fork. 

After you have forked the project to your account, clone it down to your local machine.

When a new version of the project is released,  you will want to incorporate those changes into your forked version of the repo. To establish a link between your local repo and the main project repo on github:

```console
git remote add upstream <original_repo_url>
```

where the original repo url is either 
`https://github.com/SanDiegoCodeSchool/loopback-headless-cms`  
  
OR  
  
`git@github.com:SanDiegoCodeSchool/loopback-headless-cms.git`  
depending on whether or not you have ssh enabled.

To pull in the changes from the original or *`upstream`* repo, the following commands will save your current changes to a branch called "stash" and pull the latest code to your master branch:

```console
git checkout -b stash
git add .
git commit -m "stashing changes"
git push -u origin stash
git checkout master
git fetch --all
git reset --hard origin/master
```

Once you have finalized the changes that you want included in the next release, create a pull request to the staging branch of the original repo. (*You may need to use the "compare across forks" link on the Pull Request screen in order to execute this step.*)

### Working on an active ticket

All of the proposed tickets are managed as issues through github's interface. Once a ticket has been approved and added to the backlog, it will pe prioritized in the queue under Projects > Backlog. 

If you know that you will be able to handle a ticket, you may assign it to yourself in the issue page and begin working. If you are attempting a solution but are unsure if you will be successful, leave the issue unassigned while you code away.

Once you have completed your work, submit a pull request to the staging branch as outlined above. 

### Submitting a bug/feature request

All feature requests and bug reports can be submitted as issues on the original repo.