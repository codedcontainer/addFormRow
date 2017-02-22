## Purpose
The JavaScript object makes it easy to duplicate a row and add new rows to a form. Just click on the "+" or "-" icon next to the row to either add a new row or delete a previous one.

## SetUp 
Just add the following HTML format and include the main.js and main.css file. There are no dependencies needed. Can be used with or without Bootstrap or other framework. 

    <div class="form-group repeat-group" id="repeat=group" data-Num="0">
    <div id="aRButtonParent">
    <div class="add-remove-button" id="add-remove-button"></div>
     <input type="text" name="" />
    </div>
    <div class="">       
      <input type="other form controls" />
    </div> 
    </div>

## Features
* Uses only around 103 lines of pure JavaScript. 
* Jquery dependency is not needed.

## ToDo
* Add the ability of the user to initialize the object per form element.
* Add JQuery equivalent plugin 

