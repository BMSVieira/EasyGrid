EasyGrid - Vanilla JS Grid
--
<p align="center">
<img width="400" src="https://github.com/BMSVieira/EasyGrid/blob/main/demo-template/images/easy_small.png">
</p>
<p align="center">
Powerful Responsive Grid Generator
</p>

Features:
-
- 🔧 Fully Customizable
- 💪 No Dependencies, built with VanillaJS
- 🌎 Tested in All Modern Browsers
- 💻 Responsive
- 📈 Fast & Reliable
- 📚 Does not need CSS or any CSS Framework

Demo:
-
https://bmsvieira.github.io/BVAmbient/

Installation:
-

1 - Include JavaScript Source.
```javascript
<script src="path/to/easygrid.js"></script>
```
2 - Include Styles.
```javascript
<link rel="stylesheet" href="path/to/easygrid.css">
```
4 - Set HTML.
```javascript
 <div id="grid" style="width:100%;"></div>
```
3 - Initilize.
```javascript
document.addEventListener("DOMContentLoaded", function() {
     var demo1 = new EasyGrid({
       selector: "#grid",
       width: "150",
       height: "250px",
       margin: "5",
       animations: {
         fadeInSpeed: "100"
       },
       colors: {
         background: "random"
       }
     });
});
```
Methods:
-
<b>Refresh:</b>
Refresh Grid Positioning

```javascript
demo1.Refresh();
```

<b>Add Items:</b>
Add a new item to grid

| Value | Description |
| --- | --- |
| `String` | Elements to add, can be HTML Elements, Images, etc... |

```javascript
demo1.AddItem("HTML Elements to Add");
```

<b>Clear:</b>
Removes all items and all columns

```javascript
demo1.Clear();
```

<b>SetupEasyGrid:</b>
Add responsive columns.
After use of SetupEasyGrid() it can be added new items again.

```javascript
demo1.SetupEasyGrid();
```
