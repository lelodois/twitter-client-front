import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {URL_CUST_EMP} from '../url-util.service';
import {Customer} from '../model/customer.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TwitterClientService {

    constructor(private http: HttpClient) {
    }

    options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    saveEmpresa(customer: Customer): Observable<Customer> {
        const body = {
            'name': customer.name,
            'description': customer.description,
            'email': customer.email,
            'address': customer.address,
            'phone': customer.phone
        };
        return this.http.post<Customer>(URL_CUST_EMP, body, this.options);
    }

}