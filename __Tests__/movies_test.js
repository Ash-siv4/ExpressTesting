const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../index");

const Movie = require("../models/movies");

mocha.describe("CRUD testing", () => {
  let id;
  mocha.beforeEach((done) => {
    Movie.deleteMany({})
      .then(() => {
        Movie.create({
          title: "Minions",
          description: "Animation",
          runtime: 120,
        })
          .then((result) => {
            id = result._id;
            done();
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  });

  mocha.it("should create a movie", (done) => {
    const requestBody = {
      title: "Minions 2",
      description: "Animation",
      runtime: 88,
    };
    chai
      .request(server)
      .post("/movies//createMovie")
      .send(requestBody)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).to.include(requestBody);
        done();
      });
  });

  mocha.it("should find all the movies", (done) => {
    chai
      .request(server)
      .get("/movies/readMovies")
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.have.lengthOf(1);
        chai.expect(res.body[0]).to.include({
          _id: id.toString(),
          title: "Minions",
          description: "Animation",
          runtime: 120,
        });
        return done();
      });
  });
});
