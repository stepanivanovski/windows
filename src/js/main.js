'use strict';

import './slider';
import modals from './modules/modal';
import tabs from './modules/tabs';
import form from './modules/forms';
//import { transformFromAst } from 'babel-core';

window.addEventListener('DOMContentLoaded', () => {
  modals();   
  tabs('.glazing_slider ', '.glazing_block', 'active', '.glazing_content');
  tabs('.decoration_slider', '.no_click', 'after_click', '.decoration_content > div > div');
  form('.form', 'input[name = "user_phone"]');
  });
 
