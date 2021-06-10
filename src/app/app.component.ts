import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject';
  priceobj=[
    {
      
       planName: "Free",
       currency:"$0",
       period:"per month",
       offers:[
         {
             offer:"Single User",
             isEnable:true,
              isbold:true
       },
       {
           offer:"5GB Storage",
           isEnable:true,
           isbold:true
       },{
           offer:"Unlimited Public Projects",
           isEnable:true,
           isbold:true
       },
       {
           offer:"Community Access",
           isEnable:true,
           isbold:true
       },{
           offer:"Unlimited Private Projects",
           isEnable:false,
           isbold:true
       },{
           offer:"Dedicated Phone Support",
           isEnable:false,
           isbold:true
       },{
           offer:"Free Subdomain",
           isEnable:false,
           isbold:true
       },
           {
           offer:"Monthly Status Reports",
           isEnable:false,
           isbold:true
    },
  ]
},
    {
     planName: "PLUS",
     currency:"$9",
     
     period:"/month",
     offers:[{
            offer:"Single User",
            isEnable:true,
            isbold:true
      },
      {
          offer:"5GB Storage",
          isEnable:true,
          isbold:true
      },{
          offer:"Unlimited Public Projects",
          isEnable:true,
          isbold:true
      },
      {
          offer:"Community Access",
          isEnable:true,
          isbold:true
      },{
          offer:"Unlimited Private Projects",
          isEnable:false,
          isbold:true
      },{
          offer:"Dedicated Phone Support",
          isEnable:false,
          isbold:true
      },{
          offer:"Free Subdomain",
          isEnable:false,
          isbold:true
      },
          {
          offer:"Monthly Status Reports",
          isEnable:false,
          isbold:true
   },
 ]
    },
    {
     planName: "PRO",
     currency:"$49",
     
     period:"per month",
     offers:[{
          offer:"Single User",
          isEnable:true,
          isbold:true
      },
      {
          offer:"5GB Storage",
          isEnable:true,
          isbold:true
      },{
          offer:"Unlimited Public Projects",
          isEnable:true,
          isbold:true
      },
      {
          offer:"Community Access",
          isEnable:true,
          isbold:true
      },{
          offer:"Unlimited Private Projects",
          isEnable:false,
          isbold:true
      },{
          offer:"Dedicated Phone Support",
          isEnable:false,
          isbold:true
      },{
          offer:"Free Subdomain",
          isEnable:false,
          isbold:true
      },
          {
          offer:"Monthly Status Reports",
          isEnable:false,
          isbold:true
   },
 ]
}
     ]
    
  

  constructor(){
   this.priceobj.forEach((element)=>{
       
   })
  }
  
     
}


