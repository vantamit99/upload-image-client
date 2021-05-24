import { Injectable } from '@angular/core';
import * as RX from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {  
  language$: RX.BehaviorSubject<string> = new RX.BehaviorSubject<string>('vn');

  constructor() { }
}
