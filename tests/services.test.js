const request = require("supertest");
const app = require("../src/app");

describe("GET /api/services", () => {
  it("should return a list of services", async () => {
    const res = await request(app).get("/api/services");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
