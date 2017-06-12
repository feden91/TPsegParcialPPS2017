import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Http, RequestOptions, Headers } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { LoginData } from "../app/entities/loginData";
import { Survey } from "../app/entities/survey";
import { NewUserData } from "../app/entities/newUserData";

@Injectable()
export class AppService {

  constructor(private http: Http, private storage: Storage) {

  }

  getToken(loginData: LoginData) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let jsonLoginData = JSON.stringify(loginData);
    return this.http.post("http://localhost:80/jwt/token", jsonLoginData, options).toPromise();
  }

  //use when you need logout to clear the user data.
  clearStorageData() {
    this.storage.clear()
      .then(() => console.log("Storage data has been deleted"))
      .catch(() => console.log("No data to delete"));
  }

  getPermissionsByUserRol(jwt) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append("jwt", jwt);
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/permissions", options).toPromise();
  }

  logOut() {
    this.clearStorageData();
  }

  getSurveys() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/getsurveyslist", options).toPromise();
  }

getUserListToEliminate(jwt) {
  let data = { jwt };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/getuserslisttoeliminate", jsonData, options).toPromise();
  }

  getSurveysToEliminate(jwt) {
    let data = { jwt };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/getsurveyslisttoeliminate", jsonData, options).toPromise();
  }

  newSurvey(survey: Survey, jwt) {
    let data = { survey, jwt };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/newsurvey", jsonData, options).toPromise();
  }

  newUser(user: NewUserData, jwt) {
    let data = { user, jwt };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/newuser", jsonData, options).toPromise();
  }
  getuserid(jwt) {
    let data = { jwt };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/getuserid", jsonData, options).toPromise();

  }
  eliminatesurvey(surveyid) {
    let data = { surveyid };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/eliminatesurvey", jsonData, options).toPromise();
  }
modifySurvey(survey) {
    let data = { survey };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/modifySurvey", jsonData, options).toPromise();
  }
  getSurveyById(surveyid) {
    let data = { surveyid };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/getsurveybyid", jsonData, options).toPromise();
  }

  saveAnswer(answer, jwt) {
    let data = { answer, jwt };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/saveanswer", jsonData, options).toPromise();
  }

  getAllDivisions(jwt) {
    let data = { jwt };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/divisionslist", jsonData, options).toPromise();
  }

  getSubjectsListByDivisionId(jwt, divisionid) {
    let data = { jwt, divisionid };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/subjectslistbydivisionid", jsonData, options).toPromise();
  }

  getStudentsListByDivisionAndSubject(jwt, divisionid, subjectid) {
    let data = { jwt, divisionid, subjectid };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/studentslistbydivisionandsubject", jsonData, options).toPromise();
  }

  saveAttendanceList(jwt, attendancelist, ) {
    let data = { jwt, attendancelist };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/saveattendancelist", jsonData, options).toPromise();
  }

  getSubjectsList(jwt) {
    let data = { jwt };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/getsubjectslist", jsonData, options).toPromise();
  }

  getDivisionsListBySubjectId(jwt, subjectid) {
    let data = { jwt, subjectid };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/divisionslistbysubjectid", jsonData, options).toPromise();
  }

  getClassroomsList(jwt) {
    let data = { jwt };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/getclassroomslist", jsonData, options).toPromise();
  }

  getClassesListByClassroomid(jwt, classroomid) {
    let data = { jwt , classroomid };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/getclassesbyclassroomid", jsonData, options).toPromise();
  }
  getStudentsListByClassId(jwt, classid) {
    let data = { jwt , classid };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/getstudentslistbyclassid", jsonData, options).toPromise();
  }

  getTeachersList(jwt) {
    let data = { jwt };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/getteacherslist", jsonData, options).toPromise();
  }
  getClassesByTeacherId(jwt, teacherid) {
    let data = { jwt , teacherid };
    let jsonData = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/getclassesbyteacherid", jsonData, options).toPromise();
  }

}
