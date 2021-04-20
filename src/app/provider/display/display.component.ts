import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DayOfTheWeek, FileType2LabelMapping } from 'src/app/shared/model/dayOfTheWeek.ennum';
import { Provider } from 'src/app/shared/model/provider.model';
import { ProviderService } from 'src/app/shared/service/provider.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  providerForm: FormGroup;
  public FileType2LabelMapping = FileType2LabelMapping;
  public fileTypes = Object.values(DayOfTheWeek);
  public provider: Provider = new Provider  ;
  id : any;
  constructor(
    private formBuilder: FormBuilder,
    private providerService:ProviderService,
    private activatedRoute: ActivatedRoute,

  ) { 
    this.provider= new Provider();
  }


  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.providerService.getProviderById(this.id).subscribe(
      data => {
        console.log("hello",data)
       this.provider=data;
      }

    );
  }

}
