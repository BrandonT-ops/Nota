export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    genre:string;
    emailVerified: boolean;
    // todoCategorie:TodoCategorie[];
    // userEvents:UserEvent[];
    // userNote:UserNote[];
 }

 export interface TodoCategorie{
    title:string;
    todos:Todo[];
 }

 export interface Todo{
    tasK:string;
    state:boolean;
 }

 export interface UserEvent{
    title:string;
    description:string;
    date:Date;
    reminder:Date;
 }

 export interface UserNote{
    title:string;
    subtitle:string;
    contain:string;
    createAt:Date;
    imageUrl:string;
 }