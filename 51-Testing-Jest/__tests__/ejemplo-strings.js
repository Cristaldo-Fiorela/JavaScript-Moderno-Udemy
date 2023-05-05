const password = '123456';

describe('Valida que el password no este vacio y tenga una extension de 6 caracteres', () => {
    test('que el password tenga 6 caracteres', () => {
        expect( password ).toHaveLength(6);
    });

    test('Password no vacio', () => {
        expect(password).not.toHaveLength(0);
    });
})

/*
toBe() valida que sea igual
toHaveLength() mide el largo
not.toHaveLength() = no tiene un largo de...

*/