import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Consignment} from './consignment';

@Injectable({
  providedIn: 'root'
})
export class ConsignmentService {
  // CONSIGNMENT_URL = 'http://localhost:3000/consignments';
  CONSIGNMENT_URL = 'http://localhost:8080/consignments';
  // tslint:disable-next-line:variable-name

  constructor(private httpClient: HttpClient) {
  }

  getAll(request: any = {}): Observable<Consignment[]> {
    const params = request;
    return this.httpClient.get<Consignment[]>(this.CONSIGNMENT_URL, {params});
  }

  save(consignment: Consignment): Observable<Consignment> {
    return this.httpClient.post<Consignment>(this.CONSIGNMENT_URL, consignment);
  }

  delete(id: number | undefined): Observable<Consignment> {
    return this.httpClient.delete<Consignment>(this.CONSIGNMENT_URL + '/' + id);
  }

  findId(id: number): Observable<Consignment> {
    return this.httpClient.get<Consignment>(this.CONSIGNMENT_URL + '/' + id);
  }

  edit(id: number | undefined, consignment: Consignment): Observable<Consignment> {
    return this.httpClient.put<Consignment>(this.CONSIGNMENT_URL + '/' + id, consignment);
  }

  search(code: any, importDate: any, productName: any): Observable<any> {
    return this.httpClient.get<any>(this.CONSIGNMENT_URL + '/search?code=' + code + '&importDate=' + importDate
    + '&productName=' + productName);
  }
}
