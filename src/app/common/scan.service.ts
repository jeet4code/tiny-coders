import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  products: any[] = [];
  constructor(private http: HttpClient) { }

  scan(imageData: string) {
    return this.http.post('http://localhost:3000/scan', {
      file: imageData
    }).pipe(tap(data => {
      //this.products = data;
    }));
  }
}
