'use strict';

import './slider';
import modals from './modules/modal';
import tabs from './modules/tabs';
import form from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import image from './modules/image';
//import { transformFromAst } from 'babel-core';

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  let modalState = {};
  let deadline = '2021-11-31';

  modals();   
  tabs('.glazing_slider ', '.glazing_block', 'active', '.glazing_content');
  tabs('.decoration_slider', '.no_click', 'after_click', '.decoration_content > div > div');
  form('.form', 'input[name = "user_phone"]', modalState);
  tabs('.balcon_icons', '.balcon_icons_img', 'do_image_more', 'div.big_img > img', 'inline-block');
  changeModalState(modalState);
  timer('.container1', deadline);
  image('.works');
  });
 
