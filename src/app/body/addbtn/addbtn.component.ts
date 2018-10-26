import { Component, OnInit,Input } from '@angular/core';
import { Movies } from 'src/app/movie';

@Component({
  selector: 'app-addbtn',
  templateUrl: './addbtn.component.html',
  styleUrls: ['./addbtn.component.css']
})
export class AddbtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('movie') movie:Movies;
}
