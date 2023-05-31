import { Component } from '@angular/core';
import { TableEvenNumClient, TableOddNumClient } from '../web-api-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  Odd: any
  Even: any
  dataSource: any
  displayedColumns: string[] = ["UserId", "Surname", "GivenName", "ContactNo", "Address", "Col_1",
    "NoOfMember", "ExpenseMonth1", "ExpenseMonth2", "ExpenseMonth3"];


  constructor(
    private OddNum: TableOddNumClient,
    private EvenNum: TableEvenNumClient
  ) {

  }

  ngOnInit() {
    this.getOdd()
    this.getEven()
  }

  getOdd() {
    this.OddNum.getTableOdd().subscribe(res => {
      this.Odd = res
    })
  }

  getEven() {
    this.EvenNum.getTableEven().subscribe(res => {
      this.Even = res
    })
  }

}
