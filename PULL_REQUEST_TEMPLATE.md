**Before submitting a pull request,** please make sure the following is done:

Flow (current branch) action

(master) git pull origin master
(master) git checkout -b X
(X) hacemos los cambios que ibamos a hacer
(X) git add .
(X) git commit -m "He arreglado tal cosa"
(X) git checkout master
(master) git pull origin master
(master) git checkout X
(X) git merge master
(X) git push origin X
Vas a github y abres un pull request
una vez hecho el pull request, vas a master, y borras la rama en la que estabas: git branch -D X
y a continuación: git pull origin master

No hay que pushear la rama sino has acabado con tu tarea.
