import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  form: FormGroup;
  pets = ['Noc', 'Zombie']

  constructor(fb: FormBuilder,
    private _cdr: ChangeDetectorRef) {
      this.form = fb.group({
        pet: ['']
      });
    }

}
