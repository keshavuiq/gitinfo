import { ChangeDetectorRef, Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

@Component({
  selector: 'app-userrepos',
  templateUrl: './userrepos.component.html',
  styleUrls: ['./userrepos.component.scss']
})
export class UserreposComponent {

  public data: any;
  name: Array<string> =[]
  des: Array<string | null> =[]
  url: Array<string> = []
  id: string

  constructor( private route: ActivatedRoute, private ref: ChangeDetectorRef, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      const userId = params['id'];
      this.id = userId
      this.getData(this.id)
    });
    setInterval(() => {
      this.ref.detectChanges();
     }, 5000);
     this.router.navigate(['/'])
  }

  getData(a: string){
    this.name = []
    this.des=[]
    this.url=[]
    octokit.rest.repos.listForUser({
      username: a
    })
    .then(({ data }) => {
      for (let i = 0; i < (Object.keys(data).length); i++) {
        this.name.push(data[i]['name'])
        this.des.push(data[i]['description'])
        this.url.push(data[i]['html_url'])
      }
    });
  }

}