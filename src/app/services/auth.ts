import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; //asinchroninis duomenu srautas, pazadas, kad duomenis gausiu veliua, kai HTTP uklausa grizta, observable pranesa komponentui

@Injectable({ //si klase yra servce ir gali buti injectable i komponentus
  providedIn: 'root' //service prieinamas visoje aplikacijoje, nereikia jo registruoti kiekviename komponente
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api'; //SB bazinis ulras

  constructor(private http: HttpClient) {} //injektuojamas HTTP klientas

  // Basic Auth header sukurimas
  private getHeaders(username: string, password: string): HttpHeaders {
    const credentials = btoa(username + ':' + password); //btoa pavercia teksta i base64 formata
    return new HttpHeaders({
      'Authorization': 'Basic ' + credentials //basic auth SS tikrina headeri kiekviename requeste
    });
  }

  // Registracija- siuncia post uzklausa JSON body, spring grazina string, todel nurodome ko tikimes
  register(username: string, password: string, email: string, phoneNumber: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/auth/register`, {
      username, password, email, phoneNumber
    }, { responseType: 'text' as 'json' });
  }

  // Prisijungimas — gauti savo info, prideda basic auth headeri
  getMe(username: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/me`, {
      headers: this.getHeaders(username, password)
    });
  }

  // Visi vartotojai - get uzklausa, grazina masyva su vartotoju sarasu
  getUsers(username: string, password: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`, {
      headers: this.getHeaders(username, password)
    });
  }

  // Roles keitimas, tuscias body, nes role paduodama url parametru
  changeRole(username: string, password: string, id: number, role: string): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/admin/users/${id}/role?role=${role}`, {}, {
      headers: this.getHeaders(username, password),
      responseType: 'text' as 'json'
    });
  }

  // Vartotojo trynimas
  deleteUser(username: string, password: string, id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/admin/users/${id}`, {
      headers: this.getHeaders(username, password),
      responseType: 'text' as 'json'
    });
  }

  // Audit log
  getAuditLog(username: string, password: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/audit`, {
      headers: this.getHeaders(username, password)
    });
  }

  // Users summary
  getUsersSummary(username: string, password: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/reports/users-summary`, {
      headers: this.getHeaders(username, password),
      responseType: 'text' as 'json'
    });
  }
}
