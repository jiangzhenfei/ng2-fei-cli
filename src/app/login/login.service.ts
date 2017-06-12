import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

    constructor (private http: Http) {}

    login(data):Observable<any>{
        console.log(data)
        var creds = "name=" + data.name + "&password=" + data.password;
        let url = 'http://localhost:3004/signin';
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, creds ,options)
                    .map(this.extractData)
                    .catch(this.handleError)
    }
    private extractData(res: Response) {
        console.log(res)
        let body = res.json();
        console.log(body)
        return body || { };
    }
    private handleError (error: Response | any) {
        
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
      }
}
