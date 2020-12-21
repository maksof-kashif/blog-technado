import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  public options = {
		position: ["bottom", "left"],
		showProgressBar: true,
		pauseOnHover: true,
		clickToClose: true,
		clickIconToClose: true,
		lastOnBottom: true,
		timeOut: 3000,
	}
}
