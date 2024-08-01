import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthpageComponent } from "./Auth/authpage/authpage.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AuthpageComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rentacab';
}
