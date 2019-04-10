import { Routes } from '@angular/router';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';

export const FundsTransferRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'funds-transfer',
                component: FundsTransferComponent,
                data: { title: 'FundsTransfer' }
            }
        ]
    }
];
