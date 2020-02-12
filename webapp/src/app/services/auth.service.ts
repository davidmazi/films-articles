import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../models/user.model";


@Injectable()
export class AuthService {


  constructor(private httpClient: HttpClient) {

  }

  isAuth: boolean = false;
  currentUser: User;

  connectUser(userName, password) {
    return new Promise((resolve, reject) => {

      let params = new HttpParams();
      params = params.append('username', userName);
      params = params.append('password', password);

      this.httpClient.get<[User]>('http://localhost:8080/api/findUser', {params: params, withCredentials: true})
        .subscribe(
          (response) => {
            console.log(response);
            this.currentUser = response["data"][0];
            this.isAuth = true;
            resolve(this.currentUser)
          },
          (error) => {
            console.error(error);
            this.isAuth = false;
            reject(error)
          }
        )
    })
  }

  getCurrentCookie() {
    let name = "Movies=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  deleteCurrentCookie(){
    document.cookie = "Movies=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
  }

  refreshUser() {
    return new Promise((resolve, reject) => {


      this.httpClient.get<[User]>(`http://localhost:8080/api/findUser/${this.getCurrentCookie()}`, {withCredentials: true})
        .subscribe(
          (response) => {
            console.log(response);
            this.currentUser = response["data"];
            this.isAuth = true;
            resolve(this.currentUser)
          },
          (error) => {
            console.error(error);
            this.isAuth = false;
            reject(error)
          }
        )
    })
  }

  signOut() {
    this.deleteCurrentCookie();
    this.isAuth = false;
    this.currentUser = new User();
  }

}
