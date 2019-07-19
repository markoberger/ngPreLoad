import { Injectable } from '@angular/core';
import { of, pipe } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Player } from '../model/models';


@Injectable({
  providedIn: 'root'
})
export class DataListsService {

  cibona: Player[] = [
    {broj: 4, name: 'Mihovil Nakić'},
    {broj: 10, name: 'Dražen Petrović'},
    {broj: 11,  name: 'Andro Knego'}
  ]

  dinamo: Player[] = [
    {broj: 1, name: 'Fahrija Dautbegović'},
    {broj: 2, name: 'Josip-Dragutin Horvat'},
    {broj: 3, name: 'Dario Šimić'},
    {broj: 4, name: 'Velimir Zajec'},
    {broj: 5, name: 'Rudolf Belin'},
    {broj: 10, name: 'Zlatko Kranjčar'},
    {broj: 6, name: 'Marko Mlinarić'},
    {broj: 8, name: 'Robert Prosinečki'},
    {broj: 9, name: 'Igor Cvitanović'},
    {broj: 7, name: 'Stjepan Deverić'},
    {broj: 11, name: 'Dražan Jerković'}
  ]

  prog: string[] = ['JavaScript', 'Python', 'Java', 'C/C++', 'PHP', 'Swift', 'C#', 'Ruby', 'Objective-C', 'SQL'];
  constructor() { }

  getCibonaList(){
    return of(this.cibona).pipe(delay(400));
  }

  getDinamoList(){
    return of(this.dinamo).pipe(delay(400));
  }

  getPogList(){
    return of(this.prog).pipe(delay(355));
  }
}
