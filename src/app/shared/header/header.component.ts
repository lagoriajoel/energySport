import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
 
  ngOnInit(): void {
    
  }

  header_variable: boolean = false;


  @HostListener('document:scroll', ['$event'])
  onscroll(){
     
   if( document.body.scrollTop > 0 || document.documentElement.scrollTop >0){
   
    this.header_variable = true
   }
    else this.header_variable=false;
    }

    
  }

