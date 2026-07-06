import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Ires, IUser } from "../module/user";


@Injectable({
    providedIn:'root'
})

export class UserService{
   userArr: Array <IUser>= [
  
    {
  userName: 'Sachin Tendulkar',
  userId: '101',
  userRole: 'Former International Cricketer',
  profileDescription: 'Widely regarded as one of the greatest batters in the history of cricket. Known as the "Master Blaster" and the "God of Cricket".',
  profileImage: 'assets/OIP.jpeg',
  skills: [
    'Batting',
    'Cricket Leadership',
    'Teamwork',
    'Mentoring',
    'Sportsmanship'
  ],
  experienceYears: '24 years',
  isActive: true,
  address: {
    current: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      zipcode: '400001'
    },
    permanent: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      zipcode: '400001'
    }
  },
  isAddSame: true
},
 {
  userName: 'Rohit Sharma',
  userId: '102',
  userRole: 'Indian Cricketer',
  profileDescription: ' The "Hitman".',
  profileImage: 'assets/Rohit Sharma.jpeg',
  skills: [
    'Opening Batting',
    'Captaincy',
    'Leadership',
    'Match Strategy',
    'Team Management'
  ],
  experienceYears: '18 years',
  isActive: true,
  address: {
    current: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      zipcode: '400001'
    },
    permanent: {
      city: 'Nagpur',
      state: 'Maharashtra',
      country: 'India',
      zipcode: '440001'
    }
  },
  isAddSame: false
},

 {
  userName: 'Virat Kohli',
  userId: '103',
  userRole: 'Indian Cricketer',
  profileDescription: 'One of the greatest modern batters, popularly known as "King Kohli" and "Chiku".',
  profileImage: 'assets/OIP (1).jpeg',
  skills: [
    'Batting',
    'Leadership',
    'Fitness',
    'Fielding',
    'Match Finishing'
  ],
  experienceYears: '17 years',
  isActive: true,
  address: {
    current: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      zipcode: '400001'
    },
    permanent: {
      city: 'Delhi',
      state: 'Delhi',
      country: 'India',
      zipcode: '110001'
    }
  },
  isAddSame: false
}
  ]

    


constructor(){

}

fetchUser():Observable<Array<IUser>>{

    return of(this.userArr)

}
fetchUserById(id:string){
  let userObj= this.userArr.find(u=> u.userId ===id)!
  return of(userObj)
}



addUser(user:IUser):Observable<Ires<IUser>>{
  this.userArr.unshift(user)
  return of({
    msg:`The user with id ${user.userId} is added successfully..!!!`,
    data:user
  })
}
updateUser(user:IUser){
  let getIndex=this.userArr.findIndex(u=>u.userId ===user.userId)
  this.userArr[getIndex]=user
  return of({
    msg:`The user with is ${user.userId} s updated successfully...!!!`,
    data:user
  })

}


  removeUserById(id:string):Observable<Ires<IUser>>{
            let getIndex=this.userArr.findIndex(p=>p.userId ===id)
            let user=this.userArr.splice(getIndex,1)
            return of({
                   msg:`The new product with id ${user[0].userId} is removed successfully....!!!`,
           
                   data:user[0]

            })

        }
            

}





