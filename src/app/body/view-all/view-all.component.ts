import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ViewallService } from 'src/app/viewall.service';
import {MovieDB} from '../../movieDB';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  constructor(private route:Router,private viewAllService:ViewallService,private router:ActivatedRoute) { }
  now=new Date();
  public moviesDB : MovieDB={
    id:1,
    title:'',
    language:'',
    comments:'',
    releaseDate:this.now
  };
  ngOnInit() {
    this.viewAllService.getMoviesDB().subscribe(data => this.moviesDB = data)
    
  }
  

}
