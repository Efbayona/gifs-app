import {Component, Input} from '@angular/core';
import {GifsService} from "../../../gifs/service/gifs.service";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {
  }

  get tags() {
    return this.gifsService.tagsHistory;
  }


}
