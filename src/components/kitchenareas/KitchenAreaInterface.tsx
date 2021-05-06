export interface IKitchen {
    id: number;
    kitchenarea: string;
    userId: number;
    user: IUser;
    updatedAt: Date;
    createdAt: Date;
}

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
    kitchenId: number;
    updatedAt: Date;
    user: IUser;
    userId: number;
}

// export interface FoodItemResponse {
//     Array: IFood[];
// }


//change to each kitchen areas