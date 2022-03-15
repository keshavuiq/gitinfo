import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { UserreposComponent } from '../userrepos/userrepos.component';
import { AppService } from '../fetchrepos.service';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./usersearch.component.scss']
})
export class UsersearchComponent implements OnInit {
  static onButtonClick: any;
  textValue : string
  userData: Observable<any>;
  name: string | undefined
  avatarUrl: string | undefined
  reposUrl: string | undefined
  bio: string | undefined
  location: string | undefined
  followers: number| undefined
  following: number | undefined
  error: number
  queryParam: any;
  repoData: UserreposComponent

constructor(private http: HttpClient, private router: Router, private cd: ChangeDetectorRef, private route: ActivatedRoute , private dataService: AppService) {
  
}

onSubmit() {
  this.router.navigate(['/'],{queryParams:{id:this.textValue}});
}

refreshGridInAnotherComponent(){
  this.dataService.notifyOther({refresh: true});
}

@ViewChild('inpflp') inpref: ElementRef;
fetchUserData() {
  this.userData = this.http.get<any>("https://api.github.com/users/"+this.textValue).pipe(
    catchError(() => {
      console.error('Error caught in service')
      this.error = 404
      this.router.navigate(['/'],{queryParams:{code:this.error}});
      return EMPTY   
    }),
    map(
      response =>
        ({
            name: response.name ,
            avatarUrl: response.avatar_url ,
            reposUrl: response.repose_url,
            bio: response.bio,
            location: response.location,
            followers: response.followers,
            following: response.following,
        })
    )
  );
}

  ngOnInit(){
    this.cd.detectChanges();
    this.route.queryParams.subscribe(params => {
      this.queryParam = params['code'];
    });
    this.inpref.nativeElement.click();
  }
 
}


