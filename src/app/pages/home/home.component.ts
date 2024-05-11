import { Component } from '@angular/core';
import { LayoutComponent, UserGetComponent } from '../../components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent, UserGetComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
