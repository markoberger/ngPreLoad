import { Component, OnInit } from '@angular/core';
import { DataListsService } from '../sorce/data-lists.service';
import { Observable } from 'rxjs';
import { Player } from '../model/models';

@Component({
  selector: 'app-list-dinamo',
  templateUrl: './list-dinamo.component.html',
  styleUrls: ['./list-dinamo.component.scss']
})
export class ListDinamoComponent implements OnInit {
  dinamo$: Observable<Player[]>;

  constructor(private dataService: DataListsService) { }

  ngOnInit() {
    this.dinamo$ = this.dataService.getDinamoList();
  }

}
