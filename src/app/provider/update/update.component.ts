import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DayOfTheWeek, FileType2LabelMapping } from 'src/app/shared/model/dayOfTheWeek.ennum';
import { Provider } from 'src/app/shared/model/provider.model';
import { ProviderService } from 'src/app/shared/service/provider.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  providerForm: FormGroup;
  public FileType2LabelMapping = FileType2LabelMapping;
  public fileTypes = Object.values(DayOfTheWeek);
  public provider: Provider = new Provider;
  id: any;
  constructor(
    private formBuilder: FormBuilder,
    private providerService: ProviderService,
    private activatedRoute: ActivatedRoute,
    private router:Router

  ) {
    this.provider = new Provider();
  }

  ngOnInit() {

    this.providerForm = this.formBuilder.group({
      contacts: this.formBuilder.group({
        type: ['', [Validators.required, Validators.minLength(4)]],
        address: this.formBuilder.group({
          street_address: ['', Validators.required],
          subdivision: ['', [Validators.required, Validators.maxLength(50)]],
          postal_code: ['', [Validators.required, Validators.maxLength(20)]],
          locality: ['', [Validators.required, Validators.maxLength(50)]],
          country: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]]
        }),
        email: ['', [Validators.required, Validators.minLength(4)]],
        mobile_phone_number: ['', [Validators.required, Validators.minLength(4)]]
      }),
      opening_days_hours: this.formBuilder.group({
        day_of_week: [''],
        hour_periods: ['', [Validators.maxLength(13)]]
      }),
      services: [''],
      is_auto_assignable: [null],
      rating: ['']

    });
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.providerService.getProviderById(this.id).subscribe(
      data => {
        console.log("hello", data)
        this.provider = data;
      }

    );
  }
  update() {
    console.log(this.provider)
    this.providerService.editProvider(this.provider).subscribe(
      () => {
        console.log('option update successfully');
        this.router.navigate(['']);
      }
    )
  }

}
