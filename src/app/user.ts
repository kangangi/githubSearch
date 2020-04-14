export class User 
{ public displayRepos:boolean;
  constructor(public name:string,
    public login:string,
     public bio:string,
     public url: string,
     public followers: number,
     public following: number,
     public repos : number,
     public created_at : string,
     public avatar_url:string){
       this.displayRepos = false
  }
}
