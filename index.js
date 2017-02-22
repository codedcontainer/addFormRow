//new object that will function similarly to the above object but
        //will not include a check on number of inputs already filled in the row.
        var addFormRow = function(formId){
            var self = this; 
            this.formId = formId;
            this.rowIndex = 0; //the default index is 0. We have not made a new row yet. 
            // declare the most common types of form elements
            this.formRowCopy; 
            this.rowParents; //empty array to hold array of form row parents. 
            //method that runs immediately (constructor)
            this.init = function(){
                this.copyFirstRow(); 
                this.compileRowParents();
                this.addRemoveButtonClick();   
            }; 
            //this is the first step before we even click to add a new row. 
            this.copyFirstRow = function(){
                //copy the first row of the form
                var firstRow =  document.getElementById(this.formId);  
                //if there is more than one repeat-group then always get the first index. \
                if (firstRow.length == undefined)
                {
                    this.formRowCopy = firstRow.cloneNode(true);
                }
            }; 
            this.setDataNum = function(){
                this.formRowCopy.setAttribute('data-num');
            };
            //after appending a row we will add 1; 
            this.addIndexes = function(){
               for ( var b = 0; b <= document.getElementsByClassName(this.formId).length -1; b++ ){
                    document.getElementsByClassName(this.formId)[b].setAttribute('data-num', b); 
               } 
            };
            //action to append the item to the group
            this.appendRow = function(){
               // console.log(this.formRowCopy);
                document.getElementById('pickup-inventory-form').append( this.formRowCopy ); 
                //after the items have been appended we will get a new array of row parents
                this.compileRowParents(); 
                this.addRemoveButtonClick(); 
            };
            // all icons need to be - besides the last item in the group. 
            this.setIcons = function(){
                // console.log( document.getElementsByClassName('repeat-group') );
                for (var a = 0; a <= document.getElementsByClassName(this.formId).length -1; a++){ 

                    var repeatNode = document.getElementsByClassName(this.formId)[a];
                    var button = repeatNode.getElementsByClassName('add-remove-button')[0]; 
                    if (button !== undefined ){ //ignore buttons that already have the remove button. 
                        button.setAttribute('class', 'remove-button');
                    }
                    // make sure the last item is a plus icon. 
                    if ( a == document.getElementsByClassName(this.formId).length -1 ){
                        var repeatNode = document.getElementsByClassName(this.formId)[a];
                        var button = repeatNode.getElementsByClassName('remove-button')[0]; 
                        button.setAttribute('class', 'add-remove-button');
                    }
                }
            }
            //when a new item row is added we need to generate a new new array of items
            //then we can restart the addRemovebuttonClick function.
            this.compileRowParents = function(){
                this.rowParents = document.getElementById('aRButtonParent');  //array of all elements by Id. 
            }
            //method when clicking on .add-remove button
            this.addRemoveButtonClick = function(){
                var rowParents = this.rowParents; 

                var buttonClick = document.getElementsByClassName(this.formId);
                    for ( var b = 0; b <= buttonClick.length -1; b++)
                    {
                        buttonClick[b].addEventListener('click',clickCallback, true);
                    }
                }
                 //buttonClick.addEventListener('click', clickCallback, true);  
                //is this an add button run the following code 
                 function clickCallback(e){
                    if ( e.target.getAttribute('class') == 'add-remove-button' ) {
                        self.addButtonClick(); 
                    }
                    else { 
                        if ( e.target.getAttribute('class') == 'remove-button'){
                             //if there is only one item left then do not run the remove button click. 
                        self.removeButtonClick(e); 
                        }
                    }  
                };                
             this.addButtonClick = function(){
                    self.copyFirstRow();  //copy the first row
                    self.appendRow(); 
                    self.addIndexes(); 
                    self.setIcons(); 
                    self.addRemoveButtonClick(); //need to be  able to run this again to account for the loop of elements;                        
            };
            this.removeButtonClick = function(e){
                e.srcElement.parentNode.parentNode.remove();
                self.addIndexes(); 
                self.setIcons(); 
            }
            this.init(); 
        } //end form row
        var newAddFormRow = addFormRow('repeat-group');      
