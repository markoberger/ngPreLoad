import { Component, OnInit } from '@angular/core';
import { DataListsService } from '../sorce/data-lists.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-prog',
  templateUrl: './list-prog.component.html',
  styleUrls: ['./list-prog.component.scss']
})
export class ListProgComponent implements OnInit {
  progLangs$: Observable<string[]>;

  constructor(private dataService: DataListsService) { }

  ngOnInit() {
    this.progLangs$ = this.dataService.getPogList();
  }

}
