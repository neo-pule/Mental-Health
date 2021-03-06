import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private user : UserService) { }

  test(){
    this.user.test().subscribe((data) => {
      console.log(data);
    });
  }
  run(){
    this.user.run().subscribe((data) => {
      console.log(data);
    });
  }
  ngOnInit(): void {
    console.log('###');
    this.run()
    console.log('***');
    this.test();
  }

}
