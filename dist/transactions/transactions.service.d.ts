import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
export declare class TransactionsService {
    private transactionModel;
    constructor(transactionModel: typeof Transaction);
    create(createTransactionDto: CreateTransactionDto): Promise<Transaction>;
    findAll(): Promise<Transaction[]>;
}
