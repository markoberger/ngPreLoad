import { Component, OnInit } from '@angular/core';
import { DataListsService } from '../sorce/data-lists.service';
import { Observable } from 'rxjs';
import { Player } from '../model/models';

@Component({
  selector: 'app-list-cibona',
  templateUrl: './list-cibona.component.html',
  styleUrls: ['./list-cibona.component.scss']
})
export class ListCibonaComponent implements OnInit {
  cibonaList$: Observable<Player[]>;

  constructor(private dataSevice: DataListsService) { }

  ngOnInit() {
    this.cibonaList$ = this.dataSevice.getCibonaList();
  }

}
