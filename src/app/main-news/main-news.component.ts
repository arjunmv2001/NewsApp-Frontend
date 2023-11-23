import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
  import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.css']
})
export class MainNewsComponent implements OnInit {
  //paypal variable
  public payPalConfig?: IPayPalConfig;
  showSuccess:boolean=false
  showPaypalButton:boolean=false

  proceedToPaymentStatus:boolean=false

  name:string=''
  email:string=''
  password:string=''


  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.initConfig();
  }
  

  //subscription form
  subscriptionForm=this.fb.group({
    name:[''],
    email:[''],
    password:['']
  })
  submitForm(){
    if(this.subscriptionForm.valid){
      this.proceedToPaymentStatus=true
      this.name=this.subscriptionForm.value.name||''
      this.email=this.subscriptionForm.value.email||''
      this.password=this.subscriptionForm.value.password||''

    }
    else{
      alert('Please enter valid details')
    }
  }


  //paypal
  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    clientId: 'sb',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '9.99'
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: '9.99',
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then((details:any) => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }

  makePay(){
    this.showPaypalButton=true
  }
}
