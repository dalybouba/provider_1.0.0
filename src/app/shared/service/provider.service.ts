import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Provider } from '../model/provider.model';
export const provider$: BehaviorSubject<Provider[]> = new BehaviorSubject([]);
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  providerUrl = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  getProvider():Observable<Provider> {
    return this.httpClient.get<Provider>(`${this.providerUrl}/provider/get`);
  }
  // addProvider(provider: any) {
  //   console.log('porovider service', provider);
  //   return this.httpClient.post(`${this.providerUrl}/provider/post`, provider);
  // }
    addProvider(provider: Provider): Observable<Provider> {
      console.log(provider)
      return this.httpClient.post<Provider>(`${this.providerUrl}/provider/post`, provider)
          .pipe(map(res => {
              let providerList = provider$.value;
              providerList.push(res);
              provider$.next(providerList)
              return res;
          }));}
  
  getProviderById(id: string):Observable<Provider> {
    console.log(id)
    return this.httpClient.get<Provider>(`${this.providerUrl}/displayProvider/${id}`);
  }
  editProvider(provider: any) {
    console.log(provider)
    return this.httpClient.put(`${this.providerUrl}/updateProvider/${provider.provider._id}`, provider);

  }
  delete(id: string) {
    return this.httpClient.delete(`${this.providerUrl}/deleteProvider/${id}`);
  }

}



