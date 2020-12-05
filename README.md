
<p align="center">
<img width="400" src="https://github.com/BMSVieira/EasyGrid/blob/main/demo-template/images/easy_small.png">
</p>

🟨 Features:
-
- 🔧 Fully Customizable
- 💪 No Dependencies, built with VanillaJS
- 🌎 Tested in All Modern Browsers
- 💻 Responsive
- 📈 Fast & Reliable
- 📚 Does not need CSS or any CSS Framework

Demo:
-
https://bmsvieira.github.io/EasyGrid/

🟨 Installation:
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
       height: "250",
       margin: "5",
       animations: {
         fadeInSpeed: "100"
       },
       colors: {
         background: "random"
       }
     });
     
     // Add items to Grid
     demo1.AddItem({
        items: "HTML Elements"
     });
});
```
🟨 Methods:
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
| `String` | Add a new item |
| `Array` / `Object` | Add multiple items at once  |

```javascript

// Single Element
var Elements = "HTML Element";
// Array of Elements
var Elements = ["1", "2", "3", "4", "5", "6", "7", "8"];

demo1.AddItem({
   items: Elements,
   onComplete: function(){
     console.log("Completed!");
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

🟨 Settings:
-
| Option | Type | Options Available | Description |
| --- | --- | --- | --- |
| `selector` | `String`  | `---` |  Specify ID of the element|
| `width` | `Integer` | `Integer` | Width (px) of the elements|
| `height` | `Integer` | `random` or `Integer` |  Height (px) of the elements|
| `margin` | `Integer` | `Integer` |  Margin (px) between elements|
| `config` > `fetchFromHTML` | `Boolean` | --- |  Fetch elements inside main div to EasyGrid|
| `animations` > `fadeInSpeed` | `Integer` | `1000ms` |  FadeIn Speed when new item is added|
| `colors` > `background` | `String` | `random`, `HEX`, `RGBA` |  Background color of the element|

<b>Full Example:</b>

```javascript
document.addEventListener("DOMContentLoaded", function() {
        var demo1 = new EasyGrid({
             selector: "#grid",
             width: "150",
             height: "250",
             margin: "5",
             config: {
              fetchFromHTML: true
             },
             animations: {
               fadeInSpeed: "100"
             },
             colors: {
               background: "random"
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

  </div>
```
