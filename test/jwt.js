var request = require('supertest'),
    app     = require('../app').app;

describe('generate', function(){
  it('responds with 200 OK', function(done){
    request(app)
      .post('/jwt')
      .send({ meta: { key: "foo" }, payload: ""})
      .expect(200, done)
  });
});
