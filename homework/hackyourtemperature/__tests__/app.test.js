import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe("POST /weather", () => {
  it("200 status code if cityName is OK", async () => {
    const city = "Amsterdam";
    const response = await request.post("/weather").send({ cityName: city });
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });
  it("{weatherText: City is not found!}, when incorrect cityName", async () => {
    const city = "Blablabla";
    const response = await request.post("/weather").send({ cityName: city });
    expect(response.statusCode).toBe(404);
    expect(response.body).toMatchObject({ weatherText: "City is not found!" });
  });
  it("500 status code, when cityName is empty", async () => {
    const city = "";
    const response = await request.post("/weather").send({ cityName: city });
    expect(response.statusCode).toBe(500);
    expect(response.body).toStrictEqual({});
  });
  it("Endpoint is incorrect", async () => {
    const city = "Amsterdam";
    const response = await request.post("/w").send({ cityName: city });
    expect(response.statusCode).toBe(404);
    expect(response.body).toStrictEqual({});
  });
});
