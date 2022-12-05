import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nomathsequence',
  templateUrl: './nomathsequence.component.html',
  styleUrls: ['./nomathsequence.component.css']
})
export class NomathsequenceComponent implements OnInit {

  private element: any = '';
  private dot1state: boolean = false;
  private dot2state: boolean = false;
  private dot3state: boolean = false;
  private dot4state: boolean = false;
  private dot5state: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

turn1(){
  if(this.dot2state == false){
    this.element = document.getElementById('dot_2');
    this.element.className = 'dot_recto';
    this.dot2state = true
  }
  else{
    this.element = document.getElementById('dot_2');
    this.element.className = 'dot_verso';
    this.dot2state = false
  }
  if(this.dot1state == false){
    this.element = document.getElementById('dot_1');
    this.element.className = 'dot_recto';
    this.dot1state = true
  }
  else{
    this.element = document.getElementById('dot_1');
    this.element.className = 'dot_verso';
    this.dot1state = false
  }
}

turn2(){
  if(this.dot1state == false){
    this.element = document.getElementById('dot_1');
    this.element.className = 'dot_recto';
    this.dot1state = true
  }
  else{
    this.element = document.getElementById('dot_1');
    this.element.className = 'dot_verso';
    this.dot1state = false
  }
  if(this.dot3state == false){
    this.element = document.getElementById('dot_3');
    this.element.className = 'dot_recto';
    this.dot3state = true
  }
  else{
    this.element = document.getElementById('dot_3');
    this.element.className = 'dot_verso';
    this.dot3state = false
  }
  if(this.dot2state == false){
    this.element = document.getElementById('dot_2');
    this.element.className = 'dot_recto';
    this.dot2state = true
  }
  else{
    this.element = document.getElementById('dot_2');
    this.element.className = 'dot_verso';
    this.dot2state = false
  }
}

turn3(){
  if(this.dot2state == false){
    this.element = document.getElementById('dot_2');
    this.element.className = 'dot_recto';
    this.dot2state = true
  }
  else{
    this.element = document.getElementById('dot_2');
    this.element.className = 'dot_verso';
    this.dot2state = false
  }
  if(this.dot4state == false){
    this.element = document.getElementById('dot_4');
    this.element.className = 'dot_recto';
    this.dot4state = true
  }
  else{
    this.element = document.getElementById('dot_4');
    this.element.className = 'dot_verso';
    this.dot4state = false
  }
  if(this.dot3state == false){
    this.element = document.getElementById('dot_3');
    this.element.className = 'dot_recto';
    this.dot3state = true
  }
  else{
    this.element = document.getElementById('dot_3');
    this.element.className = 'dot_verso';
    this.dot3state = false
  }
}

turn4(){
  if(this.dot3state == false){
    this.element = document.getElementById('dot_3');
    this.element.className = 'dot_recto';
    this.dot3state = true
  }
  else{
    this.element = document.getElementById('dot_3');
    this.element.className = 'dot_verso';
    this.dot3state = false
  }
  if(this.dot5state == false){
    this.element = document.getElementById('dot_5');
    this.element.className = 'dot_recto';
    this.dot5state = true
  }
  else{
    this.element = document.getElementById('dot_5');
    this.element.className = 'dot_verso';
    this.dot5state = false
  }
  if(this.dot4state == false){
    this.element = document.getElementById('dot_4');
    this.element.className = 'dot_recto';
    this.dot4state = true
  }
  else{
    this.element = document.getElementById('dot_4');
    this.element.className = 'dot_verso';
    this.dot4state = false
  }
}

turn5(){
  if(this.dot4state == false){
    this.element = document.getElementById('dot_4');
    this.element.className = 'dot_recto';
    this.dot4state = true
  }
  else{
    this.element = document.getElementById('dot_4');
    this.element.className = 'dot_verso';
    this.dot4state = false
  }
  if(this.dot5state == false){
    this.element = document.getElementById('dot_5');
    this.element.className = 'dot_recto';
    this.dot5state = true
  }
  else{
    this.element = document.getElementById('dot_5');
    this.element.className = 'dot_verso';
    this.dot5state = false
  }
}

}
