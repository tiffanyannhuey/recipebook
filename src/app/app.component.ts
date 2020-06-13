import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-book';
  loadedFeature: string = 'recipeTab';

  onNavigate(tab: string) {
    this.loadedFeature = tab;
  }
}
