import { Component, OnInit } from '@angular/core';
import { FormControl, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'NormalForm-Exercise';

  favoriteColor = new FormControl('',Validators.required);
  name:string='';

  constructor()
  {

  }

  ngOnInit(): void {
    
  }

  ngOnChange()
  {
  }

  ngDoCheck()
  {
    console.log(this.favoriteColor);
  }
}
