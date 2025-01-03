import { Component } from '@angular/core';
import { WikipediaService } from './_services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wikipediaSearch';

  posts = []

  constructor(private wikipediaService: WikipediaService){}

  onSearchTerm(event: any){
   this.wikipediaService.onSearch(event).subscribe((response: any) => {
    this.posts = response.query.search
   })
  }
}
