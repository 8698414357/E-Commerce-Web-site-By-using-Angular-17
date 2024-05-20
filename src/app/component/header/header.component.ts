import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public cartitems:number=0
  loggedUser: any;
  constructor(private api:ApiService,private router: Router){}
  ngOnInit(): void {
    this.api.products().subscribe(res=>{
      this.cartitems=res.length;
    })
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null) {
      this.loggedUser = JSON.parse(localUser);
    }
    
  }

  
  // constructor(private router: Router) {
  //   const localUser = localStorage.getItem('loggedUser');
  //   if(localUser != null) {
  //     this.loggedUser = JSON.parse(localUser);
  //   }
  // }
  onLogoff() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login')
  }

}
