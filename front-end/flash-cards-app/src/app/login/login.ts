import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { DomSanitizer } from '@angular/platform-browser';
import { Loginservice } from '../service/loginservice';
import { LOGO_ICON } from './logo-icon';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private formBuilder: FormBuilder = inject(FormBuilder);

  loginservice = inject(Loginservice)


  constructor() {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);

    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral('logo-icon', sanitizer.bypassSecurityTrustHtml(LOGO_ICON));
  }
  testForm = this.formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  })
}
