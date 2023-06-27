import {  MovimientosDinero } from '../interface/iDatabaseMovments';



export const Movimientos:MovimientosDinero  = {
    'movimientos': [
        {
            'id': 1,
            'fecha': '2021-10-01',
            'descripcion': 'Pago de servicios',
            'monto': 1000,
            'tipo': 'egreso',
            'status': 'completado',
            'nombre':'Wise',
        },
        {
            'id': 2,
            'fecha': '2021-10-02',
            'descripcion': 'Pago de servicios',
            'monto': 50,
            'tipo': 'deposito',
            'status': 'completado',
            'nombre':'Wise',
        },
        {
            'id': 3,
            'fecha': '2021-10-03',
            'descripcion': 'Pago de servicios',
            'monto': 100,
            'tipo': 'deposito',
            'status': 'completado',
            'nombre':'Wise',
        },
        {
            'id': 4,
            'fecha': '2021-11-03',
            'descripcion': 'Pago de servicios',
            'monto': 200,
            'tipo': 'deposito',
            'status': 'completado',
            'nombre':'Wise',
        },
        {
            'id': 5,
            'fecha': '2021-15-03',
            'descripcion': 'Pago de servicios',
            'monto': 10,
            'tipo': 'deposito',
            'status': 'completado',
            'nombre':'Wise',
        },
    ],
};
