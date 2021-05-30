'use strict';
function form(formSelector, inputSelector) {
  const forms = document.querySelectorAll(formSelector),
        PhoneInputs = document.querySelectorAll(inputSelector);
                   
  const massage = {
  loading: 'Загрузка',
  done: 'Спасибо за ваши данные, с вами обязательно свяжутся',
  error: 'Ошибка'
  };

  PhoneInputs.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/ig, '');
    });
  });

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

