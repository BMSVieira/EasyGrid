
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
- 🗂 Filtering
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
Add a new item to grid<br>
If `filter` is enabled, it will automatically add to all classes that match the existing filters, otherwise, all filters starting with `egfilter_` will be added and available for use.

| Value | Description |
| --- | --- |
| `String` | Add a new item |
| `Array` / `Object` | Add multiple items at once  |

```javascript

// Single
var Elements = "HTML Element";
// Array
var Elements = ["HTML Element 1", "HTML  Element 2", "HTML  Element 3", "HTML  Element 4"];
// Filter
// In this example, it will add a new item to existing "egfilter_red" filter and a new filter called "egfilter_orange" ready to be used.
var Elements = ['<div class="egfilter_red egfilter_orange"><img style="width:100%;" src="demo-template/images/black.png"></div>'];

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
After use of `SetupEasyGrid()` it can be added new items again.

```javascript
demo1.SetupEasyGrid();
```

<b>Filter:</b>
Filter all elements that match specific class.<br>

```javascript
demo1.Filter();
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
| `config` > `filter` | `Boolean` | --- |  Enables filter, fetchFromHTML is automatically enabled when using filters|
| `animations` > `fadeInSpeed` | `Integer` | `Integer` |  Speed(ms) that the item takes to appear completely after being added|
| `animations` > `addItemSpeed` | `Integer` | `Integer` |  Speed(ms) at which each item is added|
| `style` > `background` | `String` | `random`, `shadesOfGrey`, `HEX`, `RGBA` |  Item's Background color|
| `style` > `borderRadius` | `Integer` | `Integer` |  Item's Border Radius|
| `responsive` > `breakpoint` | `Integer` | `Integer` |  Responsive breakpoint, interrupts natural flow of EasyGrid and adds desired columns|
| `responsive` > `columns` | `Integer` | `Integer` |  Number of columns after breakpoint|

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
              fetchFromHTML: true, // FetchFromHTML is automatically Enabled when using filters
              filter: true
             },
             animations: {
               fadeInSpeed: "100",
               addItemSpeed: "100"
             },
             style: {
               background: "random",
               borderRadius: "5"
             },
             responsive: [
                {
                  breakpoint: 500,
                  columns: 2
                },
                {
                  breakpoint: 300,
                  columns: 1
                }
            ]
        });
});
```

<b>FetchFromHTML Example:</b><br>
To fetch elements from html, it has to be placed inside main div with a specific class called: `easygrid_fetch`

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

<b>Filters Example:</b><br>
All classes that will serve as a filter, must begin with `egfilter_`<br>
Whenever you want to show all items use `egfilter_all`, it is created automatically and contains all elements, does not need to be specified in each item.


```html
<!--  Main Div -->
<div id="grid" class="easygrid_bvgrid"> 

     <!-- This item will be fetched to EasyGrid and then removed -->
     <div class="easygrid_fetch egfilter_blue egfilter_red egfilter_purple"> HTML CODE HERE </div>
     <!-- This item will be fetched to EasyGrid and then removed -->
     <div class="easygrid_fetch egfilter_blue egfilter_red"> HTML CODE HERE </div>
     <!-- This item will be fetched to EasyGrid and then removed -->
     <div class="easygrid_fetch egfilter_blue"> HTML CODE HERE </div>
     <!-- This item will be fetched to EasyGrid and then removed -->
     <div class="easygrid_fetch egfilter_green egfilter_blue"> HTML CODE HERE </div>
     <!-- This item will be fetched to EasyGrid and then removed -->
     <div class="easygrid_fetch egfilter_green egfilter_blue"> HTML CODE HERE </div>
     <!-- This item will be fetched to EasyGrid and then removed -->
     <div class="easygrid_fetch egfilter_green"> HTML CODE HERE </div>
     <!-- This item will be fetched to EasyGrid and then removed -->
     <div class="easygrid_fetch egfilter_purple"> HTML CODE HERE </div>
     <!-- This item will be fetched to EasyGrid and then removed -->
     <div class="easygrid_fetch egfilter_red"> HTML CODE HERE </div>
     <!-- This item will be fetched to EasyGrid and then removed -->
     <div class="easygrid_fetch egfilter_red"> HTML CODE HERE </div>
     <!-- This item will be fetched to EasyGrid and then removed -->
     <div class="easygrid_fetch egfilter_red"> HTML CODE HERE </div>

</div>
```
