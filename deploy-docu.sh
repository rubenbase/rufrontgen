#!/bin/sh

git checkout master # you can avoid this line if you are in master...
echo -ne '#####                     (33%)\r'
sleep 1
git subtree split --prefix website/build/ -b gh-pages # create a local gh-pages branch containing the splitted output folder
echo -ne '#############             (66%)\r'
sleep 1
git push -f origin gh-pages:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin
echo -ne '###################       (80%)\r'
sleep 1
git branch -D gh-pages # delete the local gh-pages because you will need it: ref
echo -ne '#######################   (100%)\r'
echo -ne '\n'
echo 'Done.'
