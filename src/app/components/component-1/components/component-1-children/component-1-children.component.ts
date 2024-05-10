import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-component-1-children',
  standalone: true,
  imports: [],
  templateUrl: './component-1-children.component.html',
  styleUrl: './component-1-children.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component1ChildrenComponent {

}
