import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  term: string = ''

  @Output() onSearch = new EventEmitter<string>()

  onChangeInput(val: Event) {
    this.term = (val.target as HTMLInputElement).value
  }

  onSubmit(sub: any){
    sub.preventDefault()
    //console.log(sub)
    this.onSearch.emit(this.term)
  }
}
