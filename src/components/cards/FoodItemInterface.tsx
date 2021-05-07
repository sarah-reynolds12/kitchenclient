export interface IUser {
    createdAt: Date;
    email: string;
    id: number; 
    password: string;
    role: string;
    updatedAt: Date;
    username: string;
}

export interface IFood {
    id: number;
    brandname: string;
    createdAt: Date;
    foodcategory: string;
    fooditem: string;
    itemamount: string;
    kitchenarea: string;
    kitchenId: number;
    updatedAt: Date;
    user: IUser;
    userId: number;
}
