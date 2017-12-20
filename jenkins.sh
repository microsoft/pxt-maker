#!/usr/bin/env bash

# Set up NVM
export NVM_DIR="/home/dotnet-bot/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" 

nvm install 5

# Set up build environment variables
echo ---------- Setting build environment variables
echo Git branch: $GIT_BRANCH
echo isPR: $1

originRegex="^origin/.*"
branchRegex="^origin/\K.*(?=$)"
releaseBranchRegex = "^(master|v\d+)$"

if [[ "$GIT_BRANCH" =~ $originRegex ]]; then
    branchName=$(echo ${GIT_BRANCH} | grep -oP $branchRegex)
    echo Setting TRAVIS_BRANCH to ${branchName}
    export TRAVIS_BRANCH=${branchName}
else
    echo Setting TRAVIS_BRANCH to $GIT_BRANCH
    export TRAVIS_BRANCH=$GIT_BRANCH
fi

if [ "$1" == "false" ]; then
    echo Setting TRAVIS_PULL_REQUEST to false
    export TRAVIS_PULL_REQUEST=false

    if [[ "$TRAVIS_BRANCH" =~ $releaseBranchRegex ]]; then
        if [[ -z $PXT_RELEASE_REPO ]]; then
            echo Cannot find release repo\; skipping tag checks
        else
            gitTag=$(git describe --tags --exact-match 2> /dev/null)
            builtTag=$(git ls-remote --tags $PXT_RELEASE_REPO | grep -o "refs/tags/$gitTag$")

            echo Current tag: $gitTag
            echo Built tag: $builtTag

            if [[ ! -z $gitTag && -z $builtTag ]]; then
                echo Built tag not found\; building tag
                echo Setting TRAVIS_BRANCH to $gitTag
                export TRAVIS_BRANCH=$gitTag
                echo Setting TRAVIS_TAG to $gitTag
                export TRAVIS_TAG=$gitTag
            else
                echo Not a tag build
            fi
        fi
    fi
fi

# Perform build
npm install
npm test
