/*-------------------------

EasyGrid - VanillaJS Grid
https://bmsvieira.github.io/easygrid/

Made by: Bruno Vieira

--------------------------- */


class EasyGrid {

    constructor({
        selector = 'defaultId',
        width = '260',
        height = "auto",
        margin = "60",
        animations = {
            fadeInSpeed: "100"
        },
        colors = {
              background: "rgb(96, 120, 134)"
        }
    }) 
    {
        // Define Variables
        this.selector = selector.substring(1);
        this.width = width;
        this.height = height;
        this.margin = margin;
        this.animation = animations;
        this.colors = colors;

        // Global Variables
        var randomID = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;
        var selector = this.selector;
        var width = this.width;
        var height = this.height;
        var margin = this.margin;
        var animations = this.animation;
        var colors = this.colors;
        var ncolumns, additem;
        var widthM = 0;;
        var countAddblock=0;

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
        function getRandomColor() {
              var letters = '0123456789ABCDEF';
              var color = '#';
              for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
              }
              return color;
        }

        // Add items to easy grid
        var AddItems = this.AddItems = function AddItems(content, resized_item)
        {
            if(resized_item == undefined) {resized_item = 0;}

            // Get width of div
            var rect_main = document.getElementById(selector);
            var ChildItems = 0, bvgridLess = "easygrid_column_1";;
            var maxColumns = document.querySelectorAll("#"+selector + ' .easygrid_column ').length;

            document.querySelectorAll("#"+selector + ' .easygrid_column ').forEach((item) => {
                if(item.childElementCount > ChildItems)
                {
                    // If it is last element, goes back to 1
                    if(item.id == "easygrid_column_"+maxColumns)
                    {
                        bvgridLess = "easygrid_column_1";
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
            if(colors.background == 'random') { var bgColor = getRandomColor(); } else {  var bgColor = colors.background; }

            // Check if height is random or not
            if(height == "random") { var heightToApply = Math.floor(Math.random() * (300 - 100 + 1)) + 100+"px"; } else { var heightToApply = height; }

            // Insert New Item
            newItem.insertAdjacentHTML('beforeend', "<div id='block_"+countAddblock+"' style='background-color:"+bgColor+"; margin-bottom:"+margin+"px; height:"+heightToApply+"' class='easygrid_block'>"+content+"</div>"); 
        
            var block = document.getElementById("block_"+countAddblock);

            // Fade In Item
            fadeIn(block, animations.fadeInSpeed);
        }

        // Setup Columns
        var SetupColumns = this.SetupColumns = function SetupColumns(content)
        {
            // Get width of div
            var rect_main = document.getElementById(selector);

            // Save div Width
            widthM = rect_main.offsetWidth;

            // Get number of columns possible to fit
            var ncolumns = rect_main.offsetWidth / Number(width);
            ncolumns = Math.floor(ncolumns);

            // Set main columns
            for (var i = 1; i <= Math.floor(ncolumns); i++) {
                document.getElementById(selector).insertAdjacentHTML('beforeend', "<div id='easygrid_column_"+i+"' style='padding-left:"+margin+"px; width:100%;' class='easygrid_column'></div>");  
            }

            return ncolumns;
        }

        // Startup EasyGrid
        this.SetupGrid = function(number) {

            // Setup Columns
            this.SetupColumns();

        };

        // Refresh Grid when resized
        var RefreshGrid = this.RefreshGrid = function RefreshGrid()
        {
            var rect_main_new = document.getElementById(selector);
            var rect_check_width = rect_main_new.offsetWidth;
            var countBlocks = 0;
            countAddblock = 0;

            if(rect_check_width != widthM)
            {
                // Get get all elements from current columns
                var itemsArray = [];
                document.querySelectorAll("#"+selector + ' .easygrid_column ').forEach((item) => {

                    var idColumn = item.id;
                    document.querySelectorAll("#"+idColumn + ' .easygrid_block').forEach((itemBlock) => {

                        // Increase block count
                        countBlocks++;
                    });

                });

                // Grab All elements to array
                for (var bl = 1; bl <= countBlocks; bl++) {
                    var BlockCompleteElem = document.getElementById("block_"+bl);
                    itemsArray.push(BlockCompleteElem);
                }

                // Clear current grid and apend items again in the same order
                document.getElementById(selector).innerHTML = "";

                // Setup Columns
                SetupColumns();

                // Loop trough array and append items
                var arrayLength = itemsArray.length;
                for (var array_block = 0; array_block < arrayLength; array_block++) {
                    AddItems(itemsArray[array_block].innerHTML, 1);
                }

                widthM = rect_check_width;
            } else { return; }
        }
          window.onresize = RefreshGrid;

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
    AddItem(content) {

        // Add Item to grid
        this.AddItems(content);
    }

    // Start up Easygrid from scrath
    SetupEasyGrid() {

        // Setup Columns
        this.SetupColumns();
    }

    // Clear Grid
    Clear() {

        // Clear current grid and apend items again in the same order
        document.getElementById(this.selector).innerHTML = "";
    }
}