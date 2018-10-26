import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchdumb',
  templateUrl: './searchdumb.component.html',
  styleUrls: ['./searchdumb.component.css']
})
export class SearchdumbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  searchbox="";
  @Output() sendToParent =new EventEmitter<string>();
  search(){
    this.sendToParent.emit(this.searchbox);
  }
}
