const cliente = {
    nombre: 'Fiorela',
    balance: 500
}

describe('Testing al cliente', () => {
    test('El cliente es premium ', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Fiorela', () => {
        expect(cliente.nombre).toBe('Fiorela');
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Anabel');
    });

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    });
    
});