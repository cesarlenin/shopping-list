"use strict";
//Your challenge is to create an application that allows users to add, check, uncheck,
// and remove items from a shopping list. 
$(function () {

$('form').on('click','button', event => {
    event.preventDefault();
    let outPut =$('input').val();
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

$('.shopping-list').on('click','.shopping-item-toggle', event => {
    event.preventDefault();
    $(event.currentTarget).parents('li').find('.shopping-item').toggleClass('shopping-item__checked');
})

$('.shopping-list').on('click','.shopping-item-delete', event => {
    event.preventDefault();
    $(event.currentTarget).parents('li').remove();
})

})