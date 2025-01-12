import {Component, OnInit} from '@angular/core';
import {CalendlyWidgetComponent} from "../calendly-widget/calendly-widget.component";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent implements OnInit {

  public objectCandidatureForm!: FormGroup;
  public isConfirmed: boolean = false;

  constructor(private readonly formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.buildObjectCandidatureForm();
  }


  public buildObjectCandidatureForm() {
    this.objectCandidatureForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([Validators.required])),
      phone: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required])),
      message: new FormControl('', Validators.compose([Validators.required])),
      CV: new FormControl('', Validators.compose([Validators.required])),
    })
  }

  get canGo(): boolean {
    return !this.objectCandidatureForm.invalid;
  }

  public goStepOk(): void {
    this.isConfirmed = true;
  }
}
