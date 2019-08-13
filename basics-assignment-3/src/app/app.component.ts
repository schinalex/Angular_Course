import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPassword = false
  datesWhenClicked = []

  onDisplayDetailsClick() {
    this.showPassword = !this.showPassword
    this.datesWhenClicked.push(Date())
  }
}
