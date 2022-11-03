// ########### BUTTONS ########### //
const all = document.querySelector('.all');
const activated = document.querySelector('.activated');
const disabled = document.querySelector('.desactives');

// ########### SORTING ########### //
function sortingItems(status) {
  const items = document.querySelectorAll(".accordion-item");
  for (let i = 0; i < items.length; i++) {       
    if (items[i].className != status) {
      items[i].hidden = true;
    } else {
      items[i].hidden = false;
    }  
  }  
};

// ########### EVENT ON CLICK ########### //
all.addEventListener('click', () => {
  const items = document.querySelectorAll(".accordion-item");
  for (let i = 0; i < items.length; i++) {    
    items[i].hidden = false;
  }  
});

activated.addEventListener('click', () => {
  sortingItems('accordion-item activated');  
});

disabled.addEventListener('click', () => {
  sortingItems('accordion-item disabled');
});

// ########### SEARCH BAR ########### //
function search() {
  const input = document.getElementById('search').value.toLowerCase();
  const items = document.querySelectorAll(".accordion-item");  
  for (i = 0; i < items.length; i++) {
    if (!items[i].innerText.toLowerCase().includes(input)) {
      items[i].hidden = true;
    } else {
      items[i].hidden = false;
    }
  }
}
