import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchProductsInitiated } from './state/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Aerolab challenge';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(fetchProductsInitiated())
  }
}
