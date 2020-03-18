"use strict";
//Your challenge is to create an application that allows users to add, check, uncheck,
// and remove items from a shopping list. 

$('.addButton').click(function(event){
    event.preventDefault();
    let outPut =$('input').val();
    //console.log(outPut);
    $('.shopping-list').append(
        `<li>
        <span class="shopping-item">${outPut}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    )
})