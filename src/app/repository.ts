export class Repository {
  public showRepo: boolean
  constructor(public name:string,
    public description:string,
    public language:string,
    public url: string ){
      this.showRepo=true;
  }

}
