import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user= {
    username: '',
    upassword: ''  }
  constructor(private http:HttpClient, private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
login(): any {
  let result: any = this.auth.login(this.user);
  result.subscribe(
    (response: any) => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/books']);
    },
    (err: any) => {
      console.log('err', err);
      alert(err.error);
    }
  );
}

}
