import { Component, OnInit } from '@angular/core';

import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services: SelectItem[];
  serviceProvider: SelectItem[];

  selectedService: string;
  selectedServiceProvider: string;

  serviceProviderDisplay: Boolean = false;

  constructor() {

    this.services = [
            {label: 'Doctor', value: 'Doctor'},
            {label: 'Barber', value: 'Barber'},
            {label: 'Bank', value: 'Bank'}
        ];

   }

   doSomething(data){
      console.log('RESPONSE', data);
      this.serviceProviderDisplay = true;
    }

  ngOnInit() {
  }

}
