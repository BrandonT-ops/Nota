import { Time } from "@angular/common";

export class User {
   uid!: string;
   email!: string;
   displayName!: string;
   photoURL!: string;
   genre!: string;
   emailVerified!: boolean;
   todoCategorie: TodoCategorie[] = [];
   userEvents: UserEvent[] = [];
   userNote: UserNote[] = [];

   // constructor(private userService: AuthService){}
   static fromJSON(user: any): User {
      let jsonObject = JSON.parse(user);
      return jsonObject;
   }


}

export class TodoCategorie {
   title!: string;
   todos!: Todo[];
}

export interface Todo {
   tasK: string;
   state: boolean;
}

export interface UserEvent {
   title: string;
   description: string;
   date: Date;
   time: Time;
   repeat: string;
}

export interface UserNote {
   title: string;
   subtitle?: string;
   notes: string;
   createAt: Date;
   imageUrl?: string;
}