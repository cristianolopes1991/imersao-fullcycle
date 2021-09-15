import { Model } from 'sequelize-typescript';
export declare enum TransactionCategory {
    CATEGORY1 = "category1",
    CATEGORY2 = "categary2"
}
export declare enum TransactionType {
    CREDIT = "credit",
    DEBIT = "debit"
}
export declare class Transaction extends Model {
    id: string;
    payment_date: Date;
    name: string;
    description: string;
    category: string;
    amount: number;
    type: string;
}
