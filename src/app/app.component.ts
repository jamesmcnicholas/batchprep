import { Component } from '@angular/core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'batchprep';
  faLightbulb = faLightbulb;
  isDark = false;

  toggleDarkMode(){
    const cards = document.getElementsByClassName("card");
    var headers = document.getElementsByTagName("h2");
    var subheaders = document.getElementsByTagName("h4");

    if(this.isDark) {
      document.body.style.backgroundColor = "#ffffff"
      this.isDark = false;
    } else {
      document.body.style.backgroundColor = "#21252b"
      this.isDark = true;
    }

    Array.prototype.forEach.call(cards, function(el) {  
      el.classList.toggle("dark-mode");  
    });

    Array.prototype.forEach.call(headers, function(el) {  
      el.classList.toggle("dark-mode");  
    });

    Array.prototype.forEach.call(subheaders, function(el) {  
      el.classList.toggle("dark-mode");  
    });


  }
}



