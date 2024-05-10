import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutComponent } from '../../components';

@Component({
  selector: 'app-page-1',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './page-1.component.html',
  styleUrl: './page-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page1Component {

}
