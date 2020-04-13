export class User {
  constructor(public name:string,
    public login:string,
     public bio:string,
     public url: string,
     public followers: number,
     public following: number,
     public repos : number,
     public avatar_url:string){
  }
}
