export class RestaurantData{
    id:number = 0;
    name:string = '';
    address:string = '';
    email:string = '';
    services:string = '';
    mobile:number = 0;
}

export const db = {
    "posts":[
        {
            "id":1,
            "name":"arayan hotel 1",
            "address": "GOBINDAPUR , KAILASHAHAR , UNAKOTI TRIPURA",
            "email": "sdfaf@gmail.com",
            "services": "chai , samosa",
            "mobile": 7845581125
        },
        {
            "id": 2,
            "name": "selection",
            "address": "GOBINDAPUR , KAILASHAHAR , UNAKOTI TRIPURA",
            "email": "selection@abc.com",
            "services": "chai",
            "mobile": 78941252511
        }
    ],
    "signup":[
        {
            "name": "arayan hotel 1",
            "email": "sibashish@abc.com",
            "mobile": 8769145511,
            "password": "password@123",
            "id": 1
        },
        {
            "name": "Selection",
            "email": "selection@abc.com",
            "mobile": 3164631649,
            "password": "passowrd@123",
            "id": 2
        }
    ],
    "comments":[],
    "profile":{
        "name":"typicode"
    }
}