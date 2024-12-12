import ErrorRepository from '../class/Error';

test('Находим описание ошибки', ()=>{
    const error = new ErrorRepository();
    const expected = 'Bad Request';

    expect(error.translate(400)).toBe(expected);
});

test('Не находим описание ошибки', ()=>{
    const error = new ErrorRepository();
    const expected = 'Unknown error';

    expect(error.translate(404)).toBe(expected);
});