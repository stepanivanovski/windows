'use strict';

function tabs(parentSelector, tabsSelector, classActive, contentSelector, display = 'block') {
  const parent = document.querySelector(parentSelector),
        tab = document.querySelectorAll(tabsSelector),
        content = document.querySelectorAll(contentSelector);

  function hideTabs() {
    content.forEach((item) => {
      item.style.display = 'none';
    });

    tab.forEach((item) => {
      item.classList.remove(classActive);
    });
  }

  function openTab(i = 0){
    content[i].style.display =  display;
    tab[i].classList.add(classActive);
  }
  hideTabs();
  openTab();

  parent.addEventListener('click', (e) => {
    const target = e.target;
    if (target && (target.classList.contains(tabsSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabsSelector.replace(/\./, '')))) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabs();
          openTab(i);
        }
      });
    }
  });
}

export default tabs;
