
<p align="center">
<img width="400" src="https://github.com/BMSVieira/EasyGrid/blob/main/demo-template/images/easy_small.png">
</p>
<p align="center" size="20pt"><font size="20pt"><b><a href="https://github.com/BMSVieira/EasyGrid#%EF%B8%8F-features">Features</a></b>  ▪️  <b><a href="https://github.com/BMSVieira/EasyGrid#%EF%B8%8F-demo">Demo</a></b>  ▪️  <b><a href="https://github.com/BMSVieira/EasyGrid#%EF%B8%8F-installation">Installation</a></b>   ▪️  <b><a href="https://github.com/BMSVieira/EasyGrid#%EF%B8%8F-methods">Methods</a></b>  ▪️  <b><a href="https://github.com/BMSVieira/EasyGrid#%EF%B8%8F-settings">Settings</a></b></font></p>


◼️ Features:
-
- 🔧 Fully Customizable
- 💪 No Dependencies, built with VanillaJS
- 🌎 Tested in All Modern Browsers
- 💻 Responsive
- 📈 Fast & Reliable
- 📚 Does not need CSS or any CSS Framework

◼️ Demo:
-
https://bmsvieira.github.io/EasyGrid/

◼️ Installation:
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
       dimensions: {
         width: "150",
         height: "270",
         margin: "5",
         minHeight: "20", // if height is "random"
         maxHeight: "40"  // if height is "random"
       },
       animations: {
         fadeInSpeed: "100",
         addItemSpeed: "100"
       },
       style: {
         background: "transparent",
         borderRadius: "5"
       }
     });
     
     // Add items to Grid
     demo1.AddItem({
        items: "HTML Element"
     });
});
```
◼️ Methods:
-
<b>Refresh:</b>
Refresh Grid Positioning

```javascript
demo1.Refresh();
```

<b>AddItem:</b>
Add a new item to grid

| Value | Description |
| --- | --- |
| `String` | Add a new item |
| `Array` / `Object` | Add multiple items at once  |

```javascript

// Single
var Elements = "HTML Element";
// Array
var Elements = ["HTML Element 1", "HTML  Element 2", "HTML  Element 3", "HTML  Element 4"];

demo1.AddItem({
   items: Elements,
   onComplete: function(){
     console.log("Completed!");
   } 
});
```

<b>Change:</b>
Applies changes to current Grid

```javascript
demo1.Change({
     dimensions: {
      width: "150",
      height: "random",
      margin: "15",
      minHeight: "100", // if height is "random"
      maxHeight: "300"  // if height is "random"
     },
     style: {
       background: "random",
       borderRadius: "5"
     }
});
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

◼️ Settings:
-
| Option | Type | Options Available | Description |
| --- | --- | --- | --- |
| `selector` | `String`  | `---` |  Specify ID of the element|
| `dimensions` > `width` | `Integer` | `Integer` | Width (px) of the elements|
| `dimensions` > `height` | `Integer` | `random` or `Integer` |  Height (px) of the elements|
| `dimensions` > `margin` | `Integer` | `Integer` |  Margin (px) between elements|
| `dimensions` > `minHeight` | `Integer` | `Integer` |  Min. Height (px) of the elements if height is `random`|
| `dimensions` > `maxHeight` | `Integer` | `Integer` |  Max. Height (px) of the elements if height is `random`| 
| `config` > `fetchFromHTML` | `Boolean` | --- |  Fetch elements inside main div to EasyGrid|
| `animations` > `fadeInSpeed` | `Integer` | `Integer` |  Speed(ms) that the item takes to appear completely after being added|
| `animations` > `addItemSpeed` | `Integer` | `Integer` |  Speed(ms) at which each item is added|
| `style` > `background` | `String` | `random`, `shadesOfGrey`, `HEX`, `RGBA` |  Item's Background color|
| `style` > `borderRadius` | `Integer` | `Integer` |  Item's Border Radius|

<b>Full Example:</b>

```javascript
document.addEventListener("DOMContentLoaded", function() {
        var demo1 = new EasyGrid({
             selector: "#grid",
             dimensions: {
              width: "150",
              height: "270",
              margin: "5",
              minHeight: "20", // if height is "random"
              maxHeight: "40"  // if height is "random"
             },
             config: {
              fetchFromHTML: true
             },
             animations: {
               fadeInSpeed: "100",
               addItemSpeed: "100"
             },
             style: {
               background: "random",
               borderRadius: "5"
             }
        });
});
```

<b>FetchFromHTML Example:</b><br>
To fetch elements from html, it has to be placed inside main div and with a specific class called: `easygrid_fetch`

```html
<!--  Main Div -->
<div id="grid" class="easygrid_bvgrid">

    <!-- This item will be fetched to EasyGrid and then removed -->
    <div class="easygrid_fetch" style="display:none;">
        <!-- HTML Elements -->
    </div>
    <!-- This item will be fetched to EasyGrid and then removed -->
    <div class="easygrid_fetch" style="display:none;">
        <!-- HTML Elements -->
    </div>
 
</div>
```
