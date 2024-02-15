export interface product{
    title:string,
    price:number,
    category:string,
    image:string,
    description:string,
    id:number,
    quantity:undefined | number,
    
  }
export interface cart{
  title:string,
  price:number,
  category:string,
  image:string,
  description:string,
  id:number | undefined,
  quantity:undefined | number,
  userId:number;
  ProductId:number;
}

