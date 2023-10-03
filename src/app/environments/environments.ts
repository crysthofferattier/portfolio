import { HttpHeaders } from "@angular/common/http";

export const environment = {
    production: true,
    apiUrl: 'http://localhost:4200/assets/data/',
    httpHeaders: {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    },
    assets: [
        { "id": "1", "symbol": "KNCR11" },
        { "id": "2", "symbol": "HGLG11" },
        { "id": "3", "symbol": "BCFF11" },
        { "id": "4", "symbol": "CPTS11" },
        { "id": "5", "symbol": "BBAS3" },
        { "id": "6", "symbol": "ITSA4" },
        { "id": "7", "symbol": "PETR4" },
        { "id": "8", "symbol": "TAEE11" },
        { "id": "9", "symbol": "XPLG11" }
    ]
};