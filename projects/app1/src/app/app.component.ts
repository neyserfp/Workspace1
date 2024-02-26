import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InitialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Propiedad
  title: string;
  // Constructor
  constructor(){
    this.title = 'Neyser';
  }
}
