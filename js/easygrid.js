/*-------------------------

EasyGrid - VanillaJS Grid
https://bmsvieira.github.io/easygrid/

Made by: Bruno Vieira

--------------------------- */

class EasyGrid {

    constructor({
        selector = 'defaultId',
        dimensions = {
          width: "150",
          height: "100",
          margin: "5",
          minHeight: "100",
          maxHeight: "300"
        },
        config = {
            fetchFromHTML: true
         },
        animations = {
            fadeInSpeed: "100",
            addItemSpeed: "100"
        },
        style = {
            background: "rgb(96, 120, 134)",
            borderRadius: '5'
        }
    }) 
    {
        // Define Variables
        this.selector = selector.substring(1);
        this.animation = animations;
        this.style = style;
        this.config = config;
        this.dimensions = dimensions;

        // Selector
        var randomID = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;
        var selector = this.selector;
        // Dimensions
        var width = this.dimensions["width"];
        var requestedWidth = this.dimensions["width"];
        var height = this.dimensions["height"];
        var margin = this.dimensions["margin"];
        var minHeight = this.dimensions["minHeight"];
        var maxHeight = this.dimensions["maxHeight"];
        // Animations
        var animations = this.animation;
        // Style
        var style = this.style;
        // Config
        var config = this.config;
        var ncolumns, additem;
        var widthM = 0;
        var widthM2 = 0;
        var countAddblock=0;
        var _this = this;

        // Apply style to main grid container
        document.getElementById(selector).style.paddingRight = margin+"px";

        // Fade in Function
        function fadeIn(el, time) {
          el.style.opacity = 0;

          var last = +new Date();
          var tick = function() {
            el.style.opacity = +el.style.opacity + (new Date() - last) / time;
            last = +new Date();

            if (+el.style.opacity < 1) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
          };
          tick();
        }

        // Generates a random hex color
        function getRandomColor(type) {

            switch(type) {
              case "random": // In case its Random color

                      var letters = '0123456789ABCDEF';
                      var color = '#';
                      for (var i = 0; i < 6; i++) {
                        color += letters[Math.floor(Math.random() * 16)];
                      }
                      return color;

                break;
                case "shadesOfGrey": // In case its Shades of Grey

                    var v = (Math.random()*(256)|0).toString(16);//bitwise OR. Gives value in the range 0-255 which is then converted to base 16 (hex).
                    return "#" + v + v + v;

                break;
            } 
        }

        // Add items to easy grid
        var AddItems = this.AddItems = function AddItems(content)
        {
            // Update variable values in case it was change with method
            height = _this.dimensions["height"];
            minHeight = _this.dimensions["minHeight"];
            maxHeight = _this.dimensions["maxHeight"];
            margin = _this.dimensions["margin"];
            style = _this.style;

            // Get width of div
            var rect_main = document.getElementById(selector);
            var ChildItems = 0, bvgridLess = "easygrid_column_1_"+randomID;

            var maxColumns = document.querySelectorAll("#"+selector + ' .easygrid_column ').length;

            document.querySelectorAll("#"+selector + ' .easygrid_column ').forEach((item) => {
                if(item.childElementCount > ChildItems)
                {
                    // If it is last element, goes back to 1
                    if(item.id == "easygrid_column_"+maxColumns+"_"+randomID)
                    {
                        bvgridLess = "easygrid_column_1_"+randomID;
                        ChildItems = item.childElementCount;  
                    } else {
                        bvgridLess = item.id;
                        ChildItems = item.childElementCount;  
                    }
                }

                // Save position when find column with less blocks
                if(item.childElementCount < ChildItems)
                {
                    bvgridLess = item.id;
                    ChildItems = item.childElementCount;  
                }
            });


            // Append Style
            var newItem = document.getElementById(bvgridLess);

            // Add Countblocks
            countAddblock++;

            // Check Color
            if(style.background == 'random' || (style.background == 'shadesOfGrey')) { var bgColor = getRandomColor(style.background); } else {  var bgColor = style.background; }

            // Check if height is random or not
            if(height == "random") { var heightToApply = Math.floor(Math.random() * (Number(maxHeight) - Number(minHeight) + 1)) + Number(minHeight)+"px"; } else { var heightToApply = height+"px"; }

            // Insert New Item
            newItem.insertAdjacentHTML('beforeend', "<div id='block_"+countAddblock+"_"+randomID+"' style='opacity:0; background-color:"+bgColor+"; margin-bottom:"+margin+"px; border-radius:"+style.borderRadius+"px; height:"+heightToApply+"' class='easygrid_block'>"+content+"</div>"); 
        
            var block = document.getElementById("block_"+countAddblock+"_"+randomID);

            // Fade In Item
            fadeIn(block, animations.fadeInSpeed);

        }

        // Setup Columns
        var SetupColumns = this.SetupColumns = async function SetupColumns()
        {
            // Update variable values in case it was change with method
            width = _this.dimensions["width"];
            requestedWidth = _this.dimensions["width"];
            margin = _this.dimensions["margin"];

            // Get width of div
            var rect_main = document.getElementById(selector);

            // Save div Width
            widthM = rect_main.offsetWidth;

            // Get number of columns possible to fit
            var ncolumns = rect_main.offsetWidth / Number(width);
            ncolumns = Math.floor(ncolumns);

            // Check if width of container is less than request item width
            if(widthM < requestedWidth){ ncolumns = 1; if(widthM < requestedWidth/2) { ncolumns = 2; } } else { width = requestedWidth;}

            // Set main columns
            for (var i = 1; i <= Math.floor(ncolumns); i++) {
                document.getElementById(selector).insertAdjacentHTML('beforeend', "<div id='easygrid_column_"+i+"_"+randomID+"' style='padding-left:"+margin+"px; width:100%;' class='easygrid_column'></div>");  
            }

        }

        // Startup EasyGrid
        this.SetupGrid = function(number) {

            // Setup Columns
            this.SetupColumns();

            // If Fetch from HTML is true, it will fetch all HTML items inside main div
            if(config.fetchFromHTML == true)
            {
                // Set original items to display none
                document.querySelectorAll("#"+selector + ' .easygrid_fetch').forEach((item_original) => {
                    item_original.style.display = "none";
                });

                document.querySelectorAll("#"+selector + ' .easygrid_fetch').forEach((item_fetch) => {
                    
                    // Fetch items from HTML and add to EasyGrid
                    AddItems(item_fetch.innerHTML);
                    // Remove original item
                    item_fetch.remove();

                });
            }
        };

        // Main throttle function
        function throttle (func, interval) {
          var timeout;
          return function() {
            var context = this, args = arguments;
            var later = function () {
              timeout = false;
            };
            if (!timeout) {
              func.apply(context, args)
              timeout = true;
              setTimeout(later, interval)
            }
          }
        }

        // My function that will run repeatedly at each fixed interval of time.
        var ResizeWindow = throttle(function() {
            console.clear();
            var rect_main_new = document.getElementById(selector);
            var rect_check_width = rect_main_new.offsetWidth;


            if(rect_check_width != widthM2)
            {

                // Get get all elements from current columns
                var countBlocks = 0;
                countAddblock = 0;
                var itemsArray = [];

                document.querySelectorAll("#"+selector + ' .easygrid_column ').forEach((item) => {

                    var idColumn = item.id;
                    document.querySelectorAll("#"+idColumn + ' .easygrid_block').forEach((itemBlock) => {

                        // Increase block count
                        var str2 = itemBlock.id;
                        itemsArray.push(({'element': itemBlock.innerHTML, 'sort': str2.split("_").pop()}));

                    });

                });

                // Sort array
                itemsArray.sort(function(a, b) { return a.sort - b.sort; });

                // Empty grid
                document.getElementById(_this.selector).innerHTML = "";

                // Setup Columns
                SetupColumns();

                // Loop trough array and append items
                var arrayLength = itemsArray.length;
                for (var array_block = 0; array_block < arrayLength; array_block++) {
                    AddItems(itemsArray[array_block]["element"]);
                }

            } else { return; }

            widthM2 = rect_check_width;

        }, 100); // Adjust interval of time

        // Add EventListener
        window.addEventListener('resize', ResizeWindow);

        // ** SETUP GRID **
        this.SetupGrid();
    }

    // ** METHODS **

    // Refresh Grid
    Refresh(content) {

        // Refresh grid positioning
        this.RefreshGrid();
    }

    // Add New Item
    async AddItem(content) {

        // Function to Sleep
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        // OnComplete Callback
        function onComplete(callback) { 
            if (typeof callback == "function") { callback();}
        } 

        // Check if content is object
        if(content.items && typeof(content.items) === 'object')
        {
            // Loop object and add invidual items
            var prop = Object.keys(content.items).length;

            // Loop object and add invidual items
            var prop = Object.keys(content.items).length;
            for (var i = 0; i < prop; i++) {

                // Check if object is empty
                if(content["items"][i] != "")
                {
                    // Add Item to grid
                    this.AddItems(content["items"][i]);
                    await sleep(this.animation.addItemSpeed); // Wait
                }
            }

            // if is "onComplete" is a function, call it back.
            if (typeof content.onComplete == "function") { onComplete(content.onComplete); }

        } else {

            // Add Item to grid
            this.AddItems(content.items);

            // if is "onComplete" is a function, call it back.
            if (typeof content.onComplete == "function") { onComplete(content.onComplete); }
        }
    }

    // Start up Easygrid from scrath
    SetupEasyGrid() {

        // Setup Columns
        this.SetupColumns();
    }

    // Clear Grid
    Change(content) {

        // Check if content is object
        if(content && typeof(content) === 'object')
        {
            // Clear grid in case someone want to change while is adding items
            document.getElementById(this.selector).innerHTML = "";

            // Update values
            this.dimensions = content.dimensions;
            this.style = content.style;

            // Setup Columns with new width
            this.SetupColumns();

        } else {
            console.log("Properties must be Object, Check documentation.")
        }
    }

    // Clear Grid
    Clear() {

        // Clear current grid and apend items again in the same order
        document.getElementById(this.selector).innerHTML = "";
    }
}