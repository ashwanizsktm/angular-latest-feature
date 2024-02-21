import { Component } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [MainComponent, HeaderComponent, FooterComponent],
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  
}
