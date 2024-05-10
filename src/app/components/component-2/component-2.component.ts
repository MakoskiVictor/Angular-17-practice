import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-component-2',
  standalone: true,
  imports: [],
  templateUrl: './component-2.component.html',
  styleUrl: './component-2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component2Component {

  counter = signal<number>(10)
  squareCounter = computed(()=> this.counter() * this.counter())

  changeBy(value: number){
    this.counter.set(this.counter() + value)
  }
}
