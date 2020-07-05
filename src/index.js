import { bar } from './bro';
import './styles/main.scss';


bar.addEventListener("click", show);

function show(){
    document.querySelector(".vertHorzMenu").classList.toggle("showMenu");
  }