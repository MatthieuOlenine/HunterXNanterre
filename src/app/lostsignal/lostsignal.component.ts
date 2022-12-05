import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lostsignal',
  templateUrl: './lostsignal.component.html',
  styleUrls: ['./lostsignal.component.css']
})
export class LostsignalComponent implements OnInit {

  private signalid1 : any = 'signal';
  private signalid2 : any = 'Signal';
  private signalid3 : any = 'SIGNAL';
  public signalTerm : any = '';
  private element : any = '';
  private doeslight : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

send_signal(event : any){
  this.signalTerm = (event.target as HTMLInputElement).value;
  this.element = document.getElementById('signal');
  if (this.signalTerm == this.signalid1)
    this.lighton()
  if (this.signalTerm == this.signalid2)
    this.lighton()
  if (this.signalTerm == this.signalid3)
    this.lighton()
}

lighton(){
  if (this.doeslight == false)
    this.element.className = 'signal';
    this.doeslight = true;
    this.courtlighton1()
}

async courtlighton1() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 400)).then(()=>this.lightoff1());
}

lightoff1(){
  if (this.doeslight == true)
    this.element.className = 'lonely';
    this.doeslight = false;
    this.courtlightoff2();
}

async courtlightoff2() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 400)).then(()=>this.lighton2());
}

lighton2(){
  if (this.doeslight == false)
    this.element.className = 'signal';
    this.doeslight = true;
    this.courtlighton3()
}

async courtlighton3() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 400)).then(()=>this.lightoff3());
}

lightoff3(){
  if (this.doeslight == true)
    this.element.className = 'lonely';
    this.doeslight = false;
    this.courtlightoff3()
}

async courtlightoff3() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 400)).then(()=>this.lighton4());
}

lighton4(){
  if (this.doeslight == false)
    this.element.className = 'signal';
    this.doeslight = true;
    this.courtlighton4()
}

async courtlighton4() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 400)).then(()=>this.lightoff5());
}

lightoff5(){
  if (this.doeslight == true)
    this.element.className = 'lonely';
    this.doeslight = false;
    this.longlightoff5()
}

async longlightoff5() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 1700)).then(()=>this.lighton6());
}

lighton6(){
  if (this.doeslight == false)
    this.element.className = 'signal';
    this.doeslight = true;
    this.courtlighton6()
}

async courtlighton6() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 400)).then(()=>this.lightoff7());
}

lightoff7(){
  if (this.doeslight == true)
    this.element.className = 'lonely';
    this.doeslight = false;
    this.longlightoff7()
}

async longlightoff7() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 1700)).then(()=>this.lighton8());
}

lighton8(){
  if (this.doeslight == false)
    this.element.className = 'signal';
    this.doeslight = true;
    this.courtlighton8()
}

async courtlighton8() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 400)).then(()=>this.lightoff9());
}

lightoff9(){
  if (this.doeslight == true)
    this.element.className = 'lonely';
    this.doeslight = false;
    this.courtlightoff9()
}

async courtlightoff9() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 400)).then(()=>this.lighton10());
}

lighton10(){
  if (this.doeslight == false)
    this.element.className = 'signal';
    this.doeslight = true;
    this.longlighton10()
}

async longlighton10() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 1700)).then(()=>this.lightoff11());
}

lightoff11(){
  if (this.doeslight == true)
    this.element.className = 'lonely';
    this.doeslight = false;
    this.courtlightoff11()
}

async courtlightoff11() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 400)).then(()=>this.lighton12());
}

lighton12(){
  if (this.doeslight == false)
    this.element.className = 'signal';
    this.doeslight = true;
    this.longlighton12()
}

async longlighton12() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 1700)).then(()=>this.lightoff13());
}

lightoff13(){
  if (this.doeslight == true)
    this.element.className = 'lonely';
    this.doeslight = false;
    this.courtlightoff13()
}

async courtlightoff13() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 400)).then(()=>this.lighton14());
}

lighton14(){
  if (this.doeslight == false)
    this.element.className = 'signal';
    this.doeslight = true;
    this.courtlighton14()
}

async courtlighton14() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 400)).then(()=>this.lightoff15());
}

lightoff15(){
  if (this.doeslight == true)
    this.element.className = 'lonely';
    this.doeslight = false;
    this.longlightoff15()
}

async longlightoff15() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 1700)).then(()=>this.lighton16());
}

lighton16(){
  if (this.doeslight == false)
    this.element.className = 'signal';
    this.doeslight = true;
    this.longlighton16()
}

async longlighton16() {
  await new Promise<void>(resolve => setTimeout(()=>resolve(), 1700)).then(()=>this.lightoff17());
}

lightoff17(){
  if (this.doeslight == true)
    this.element.className = 'lonely';
    this.doeslight = false
}

}