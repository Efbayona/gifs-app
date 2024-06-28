import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {GifsService} from "../../service/gifs.service";

@Component({
  selector: 'gifs-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  @ViewChild('txtTagInput') tagInput!: ElementRef<HTMLInputElement>;


  constructor(private gifsService: GifsService) {
  }

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }

}
