import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-component-1',
  standalone: true,
  imports: [],
  templateUrl: './component-1.component.html',
  styleUrl: './component-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component1Component {

}
