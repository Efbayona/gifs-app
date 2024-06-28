import {Component, ElementRef, ViewChild} from '@angular/core';
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
    if (this.tagInput.nativeElement.value !== '') {
      const newTag = this.tagInput.nativeElement.value;
      this.gifsService.searchTag(newTag);
      this.tagInput.nativeElement.value = '';
    }
  }

}
