`cd /e/neuefische2020/capstone-project`

### Allgemeines Projekt setup mit git, parcel und co

-   Repo erstellen, clonen
-   `npm init`
-   `npm i parcel-bundler` (unter win7 probleme mit parcel Bundler, bei React App ist das eh unnötig)
-   Start script in package.json: "start": `parcel -d docs index.html` bzw. `"parcel --no-cache src/index.html --open"`
-   Build script in package.json: "build": `parcel build -d docs --public-url=./ index.html`
-   `index.html` und `styles.scss` erstellen, verlinken per <link rel="stylesheet" href="styles.scss">
-   `.gitignore erstellen:` - .DS_Store - node_modules - .cache
    wenn möglich alle assets in src-Ordner als sibling zum dist-Ordner
    npm start - script installiert automatisch sass als dependency, da es eine scss-Datei im <link> findet
    parcel startet Development Server unter localhost:1234 oder anderem Port, wenn besetzt

### React app erstellen:

1. `npx create-react-app my-app` im master des projekts
2. `cd my-app`
3. `npm start`

### Beispiel zum dynamischen Erzeugen von HTML-Elementen

_(Quelle: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-13.php)_

`HTML Code:`

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS Bin</title>
<style>
body {padding-top:50px}
</style>
</head>
<body>
<input type="text" id="text1"></input>
<input type="button" id="button1" value="Add" onclick="add_element_to_array();"></input>
<input type="button" id="button2" value="Display" onclick="display_array();"></input>
<div id="Result"></div>
</body>
</html>
```

`JavaScript Code:`

```js
var x = 0
var array = Array()

function add_element_to_array() {
    array[x] = document.getElementById("text1").value
    alert("Element: " + array[x] + " Added at index " + x)
    x++
    document.getElementById("text1").value = ""
}

function display_array() {
    var e = "<hr/>"

    for (var y = 0; y < array.length; y++) {
        e += "Element " + y + " = " + array[y] + "<br/>"
    }
    document.getElementById("Result").innerHTML = e
}
```

## Visualisierung der Branches in zsh

-   `git log --graph --oneline --full-history --all`
-   `git log --graph --full-history --all --pretty=format:"%h%x09%d%x20%s"`

### Mit Farben in Bash:

-   `git log --graph --full-history --all --color --pretty=format:"%x1b[31m%h`
