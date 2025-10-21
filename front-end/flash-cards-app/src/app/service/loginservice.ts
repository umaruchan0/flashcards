import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class Loginservice {
  private loginSignal = signal<Users[]>([]);
  constructor(private http: HttpClient) { }

}
