import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeDashboardComponent } from "./shared/component/home-dashboard/home-dashboard.component";
import { UserDashboardComponent } from "./shared/component/user-dashboard/user-dashboard.component";
import { ProductsDashboardComponent } from "./shared/component/products-dashboard/products-dashboard.component";
import { FairsDashboardComponent } from "./shared/component/fairs-dashboard/fairs-dashboard.component";
import { ProductFormComponent } from "./shared/component/products-dashboard/product-form/product-form.component";



//http://localhost:4200 //baseurl
const routes: Routes= [
    {
        path:'',//http://localhost:4200
        component:HomeDashboardComponent
    },
    {
        path:'',
       redirectTo:'home',
       pathMatch:'full'
    },
   
     {
        path:'users',
        component:UserDashboardComponent
    },
  {
        path:'products',
        component:ProductsDashboardComponent,
        children:[
            {
        path:'addProduct',
        component:ProductFormComponent
    },
     {
        path:':productId',
        component:ProductFormComponent
    },

     {
        path:':productId/edit',
        component:ProductFormComponent
    },
     
        ]
    },
    {
        path:'fairs',
        component:FairsDashboardComponent
    }


    
]
@NgModule({ 
    imports:[RouterModule.forRoot(routes)] ,
    exports:[RouterModule] 

})


export class AppRoutingModule{

}

