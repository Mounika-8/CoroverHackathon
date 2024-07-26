import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  elements:any[]=[];

  

  ngOnInit(){
    this.elements=['First', "2", "5", 87.23]
  }

  handleEventFromChild(data: any) {
    console.log('Event received from child:', data);
  }

  onDragStart(event: DragEvent) {
    const prevIndex = this.elements.findIndex((d) => d === this.elements);
    
    if (event.dataTransfer) {
      event.dataTransfer.setData('text', (event.target as HTMLElement).id);
      this.elements.splice(prevIndex, 1);
    }
  }

  
  
}
