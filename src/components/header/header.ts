import { Component } from '@angular/core';
import { User } from '../../api/backend-angular-api/user';
import { USER_REGISTER_REQUEST_DATA, USER_LOGIN_REQUEST_DATA } from '../../api/backend-angular-api/interface';
import { UserPage } from '../../pages/user/user';

@Component({
    selector: 'header-component',
    templateUrl: 'header.html'
})
export class HeaderComponent {

    constructor( private user: User ) { }

    onClickLogout(){
        this.user.logout( res =>{
            // alert( "Account logged out." )
            // this.userPage.register = <USER_REGISTER_REQUEST_DATA> {};
            // this.userPage.login = <USER_LOGIN_REQUEST_DATA> {};
        });
    }
}