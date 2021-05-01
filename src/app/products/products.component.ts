import { Component, OnInit } from '@angular/core';
import { Products } from './products.interf';
import { map } from 'rxjs/operators'
import { IndexedDBService } from '../indexed-db.service';
import { Store, select } from '@ngrx/store';
import * as FetchActions from '../fetch.actions';
import * as FetchBooks from '../fetch.selectors';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _indexedDbService: IndexedDBService, private store: Store) { }
  booksData: any = [];
  headers = ["id", "name", "autherName", "price", "language",];

  ngOnInit(): void {
    // this.booksData = this._indexedDbService.getAllRecords();
    this.store.dispatch(new FetchActions.LoadFetchs()); //action dispatch
    this.store.pipe(select(FetchBooks.getBooks)).subscribe(users => {
      console.log('users@@@@@@@@@@', users);
      this.booksData = users;
    })
  }

  cartArr = [];
  addtoCart(index) {
    this.cartArr.push(this.booksData[index]);
    this._indexedDbService.addProductCart(this.cartArr);
  }
  items = [];

}
