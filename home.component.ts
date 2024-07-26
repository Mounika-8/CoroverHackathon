import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @Input() expectedProp :any;

  
  onDrop(event: DragEvent) {

   
    event.preventDefault();
    const data = event.dataTransfer?.getData('text');
    if (data) {
      const draggedElement = document.getElementById(data);
      if (draggedElement) {
        (event.target as HTMLElement).appendChild(draggedElement);
      }
    }
  }

  

  

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

}
