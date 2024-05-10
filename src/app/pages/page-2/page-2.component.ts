import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutComponent } from '../../components';

@Component({
  selector: 'app-page-2',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './page-2.component.html',
  styleUrl: './page-2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page2Component {

}
