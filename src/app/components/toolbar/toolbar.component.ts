import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Route {
  name: string
  path: string
}
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {

  // routes = [
  //   { name: "Home", path: "home" },
  //   { name: "Component 1", path: "page-1" },
  //   { name: "Component 2", path: "page-2" }
  // ]

  // En el HTML la signal necesita () para leerse
  routes = signal<Route[]>([
      { name: "Home", path: "home" },
      { name: "Component 1", path: "page-1" },
      { name: "Component 2", path: "page-2" }
    ])
}
