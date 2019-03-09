# Environment set-up

In order to set up your environment so that you are able to run the code along with the tests, it's best to execute the following commands.

*Note:* when asked to update or upgrade any of the systems (brew, node, npm), please agree and do update/upgrade them.

## Install node & npm

Linux
```
sudo apt-get install nodejs
```

Mac (via brew)
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install node
```

In order to check whether you installed them correctly, check using:
```
brew -v
node -v
npm -v
npx -v
```

## Install gulp

```
npm install --global gulp-cli
```

## Clone repository

```
git clone https://github.com/TudorMaiereanu/JUB-TDD-kata-marsrover.git
```

## Enter repo and install required packages

```
cd REPO
npm install
```

The command above will install all the packages required for this kata project under the folders named ```node_modules```, ```typings```, ```dist``` which will be only stored locally on your machine and not pushed to the forked Github repository as stated in the ```.gitignore``` file.

## Run tests

As the kata is test oriented, you should make sure that the jasmine test configuration is set properly. You can check that by running all the test files (*.spec.ts):

```
npm run test
```

## File structure

For each ```*.spec.ts``` file you are supposed to have a ```*.ts``` file containing the class itself along with all the methods you are supposed to implement in order for each individual test to pass.

## Way of working

It is advised to implement the classes and methods in the order of the tests' description and also as mentioned in [MILESTONES.md](https://github.com/TudorMaiereanu/JUB-TDD-kata-marsrover/blob/master/MILESTONES.md), as that would guarantee a clean implementation of the functionalities of the project. 
