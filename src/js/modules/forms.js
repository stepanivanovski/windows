'use strict';
import checkNumInputs from './checkNumbImputs';

function form(formSelector, inputSelector, modalState) {
  const forms = document.querySelectorAll(formSelector);
        
        
                   
  const massage = {
  loading: 'Загрузка',
  done: 'Спасибо за ваши данные, с вами обязательно свяжутся',
  error: 'Ошибка'
  };

  checkNumInputs(inputSelector);
  
  const element = document.createElement('div');
    
  forms.forEach((item, i) => {
      item.addEventListener('submit', (e) => {
      e.preventDefault();
      item.prepend(element);
      sendForm(i, massage, item, element);
    });
  });
    
  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: data,
    });
  
    // return await res.json();
    return await res.text();
  };
  
  function sendForm(i, massage, item, element) {
    const form = new FormData(forms[i]); 
    if (item.getAttribute('data-calc') == 'end') {
      for (let key in modalState) {
        form.append(key, modalState[key]);
      }
    } 
    //const json = JSON.stringify(Object.fromEntries(form.entries()));
    
    postData('assets/server.php', form)
     .then((data) => {
      console.log(data);
      element.textContent = massage.done;
    })
    .catch(() => {
      console.log('Все плохо');
        element.textContent = massage.error;
    })
    .finally(() => {
      item.reset();
      setTimeout(() => {
        element.textContent = '';
      },3000);
    });  
  }
}

export default form;  


const num = new Date();
console.log(num);