import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from 'src/app/shared/model/provider.model';
import { ProviderService } from 'src/app/shared/service/provider.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: Provider;
  constructor(
    private providerService: ProviderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.providerService.getProvider().subscribe(
      res => {
        console.log('test', res)
        this.data = res['providers'];
      }
    )

  }

  edit(id: string) {
    this.router.navigate([`/provider/update/${id}`]);
  }
  display(id: any) {
    this.router.navigate([`/provider/display/${id}`]);
  }
  delete(id: any) {
    this.providerService.delete(id).subscribe(
      () => {
        this.providerService.getProvider().subscribe(
          data => {
            this.data = data;
          }
        );
      }
    );
  }
}
