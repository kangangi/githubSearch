export class User {
  constructor(public userName:string,
     public bio:string, 
     public repos: number,
     public followers: number,
     public following: number,
     public creationDate: Date){
  }
}
