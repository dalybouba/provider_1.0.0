import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DayOfTheWeek, FileType2LabelMapping } from 'src/app/shared/model/dayOfTheWeek.ennum';
import { ProviderService } from 'src/app/shared/service/provider.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  providerForm: FormGroup;
  public FileType2LabelMapping = FileType2LabelMapping;
  public fileTypes = Object.values(DayOfTheWeek);

  constructor(
    private formBuilder: FormBuilder,
    private providerService: ProviderService
  ) { }

  ngOnInit() {
    this.providerForm = this.formBuilder.group({
      // provider_id: ['',Validators.required,Validators.maxLength(100)],
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

    })
  }
  create(provider: any) {
    console.log(provider)
    this.providerService.addProvider(provider).subscribe(
      () => {
        console.log('option added successfully');
        // this.router.navigate(['admin']);
      }
    )
  }
}
