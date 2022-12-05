import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-falsecompassway',
  templateUrl: './falsecompassway.component.html',
  styleUrls: ['./falsecompassway.component.css']
})
export class FalsecompasswayComponent implements OnInit {

  private state: any = 0
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  
rotate(){
  this.state = this.state + 13.8461538
  const image = document.getElementById('notmoving');
    this.renderer.setStyle(
      image,
      'transform',
      'rotate('+this.state+'deg)'
    )
  }
}
