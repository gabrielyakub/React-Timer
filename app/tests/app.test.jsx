var expect = require('expect');




// describe buat group testingnya
// -> jadi format output biar lebih readable
describe('App', ()=>{
  //ini syntax mochajs -> framework buat testing
  // it itu function buat testing, jadi mirip function biasa
  // tapi harus ada expect dan nama testnya
  it('should properly run tests', () => {
    // isi testnya yang harus terpenuhi
    expect(1).toBe(1);
  });
});
