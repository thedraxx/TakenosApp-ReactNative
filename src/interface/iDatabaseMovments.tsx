export interface Movimiento {
    id: number;
    fecha: string;
    descripcion: string;
    monto: number;
    tipo: 'egreso' | 'deposito';
    status: 'completado' | 'pendiente' | 'cancelado';
    nombre: string;
}

export interface MovimientosDinero {
    movimientos: Movimiento[];
}
