import { mockData } from "./mock_data";
import app from "../app";
import request from "supertest";
import path from "path";
const { promises } = require("fs");
import db from "../database"
import { Event } from "../../../client/src/models"

jest.setTimeout(30000)

describe("main test", () => {

  beforeAll(async (done) => {
    db.setState(mockData).write()
    done()
  })

  afterAll(async () => {
    
  });

  it("can get all events", async () => {
    
    console.log('first test')
    const { body: allEvents } = await request(app).get("/events/all").expect(200);
    expect(allEvents.length).toBe(50);
  });

  it("can post new event", async () => {

    const { body: allEvents } = await request(app).get("/events/all").expect(200);
    expect(allEvents.length).toBe(50);

    await request(app).post("/events").send(mockData.events[0]).expect(200);

    const { body: allEvents2 } = await request(app).get("/events/all").expect(200);

    expect(allEvents2.length).toBe(51);
    expect(allEvents2[50].date).toBe(mockData.events[0].date);
    expect(allEvents2[50].os).toBe(mockData.events[0].os);
  });

  it("can get unique sessions count by day", () => {});

  it("can get unique sessions count by hour", () => {});

  it("can get time of each URL for 'time on URL chart'", () => {});

  it("os chart gets id and operating system from the DB", async () => {
    const { body: allEvents } = await request(app).get("/events/all").expect(200);
  });

  it("google maps chart gets id and geolocation from the DB", async () => {});

  it("pageview chart gets id and pageviews from the DB", async () => {});

  it("timeonpage chart gets id and timeonepage from the DB", async () => {});
});
