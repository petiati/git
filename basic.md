* Első feladat, meg kell nyitni a könyvtárat, ahova dolgozni fogunk. Utána a VS Code terminálban ki kell adni egy 'git init' parancsot.
A 'git status' paranccsal bármikor le lehet kérdezni, hogy mi az aktuális státusz. Most mivel még nem volt "commit" ezért azt mondja, hogy nincs semmi hozzáadva, de itt eza file, ami változott.

* Ha hozzá akarjuk adni a git-hez amit csináltunk , akkor azt a "git add ." paranccsal tehjetjük meg. A pont helyére írhatunk file nevet is, ha a pontot használjuk, akkor mindent ment ami a könyvtárban van.
* Ha "el akarjuk menteni" 'git commit -m "leírás" '  ezzel a paranccsal lehet
* 'git log' ezzel a paranccsal a logot lehet megnézni
* 'git checkout <ID>' ezzel a paranccsal vissza lehet menni egy korábbi verzióhoz. Az ID-t a 'git log' fogja megadni.
* 'git checkout -- .' ezzel a paranccsal vissza tudunk menni a legutolsó verzióhoz.
* 'git reset --hard <ID>' ezzel óvatosan kell bánni, mert úgy tudunk visszamenni egy verzióhoz, hogy a későbbi módosításokat töröljük!

<p> Elágazások: </p>
* 'git branch' parancs az aktuális elágazásokat mutatja meg.


