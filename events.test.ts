import { mockData } from "./mock_data";
import request from "supertest";
import { Event as event } from "./event"
const app = require('../_cloned-app/server/backend/app');

const isEvent = (event: any ): event is event => {
  if(
   '_id' in event&&
   'session_id' in event&&
   'name' in event&&
   'url' in event&&
   'distinct_user_id' in event&&
   'date' in event&&
   'os' in event&&
   'browser' in event&&
   'geolocation' in event
   ){
     return true
   }else{
     return false
   }
}

const isEventArray = (events: any[]): events is event[] => {
 return events.every(eve=>isEvent(eve))
}

describe("main test", () => {

 it("can get all events", async () => {
   const { body: allEvents } = await request(app).get("/events/all").expect(200);
   expect(allEvents.length).toBe(50);
 });

  it("getting all events from the server must return array of event types", async () => {
   const { body: allEvents } = await request(app).get("/events/all").expect(200);
   expect(isEventArray(allEvents)).toBe(true);
 });

 it("can post new event", async () => {
   await request(app).post("/events").send(mockData.events[0]).expect(200);
   const { body: allEvents2 } = await request(app).get("/events/all").expect(200);
   expect(allEvents2.length).toBe(51);
   expect(allEvents2[50].date).toBe(mockData.events[0].date);
   expect(allEvents2[50].os).toBe(mockData.events[0].os);
 });

 it("can get unique sessions count by day", async () => {
   const { body: sessionsByDays } = await request(app).get("/events/by-days/0").expect(200)

   expect(sessionsByDays.length).toBe(7)
   expect(sessionsByDays.reduce((sum: number, day: {date: string; count: number}) => sum += day.count, 0)).toBe(47)
   expect(sessionsByDays[0].count).toBe(6);

   const { body: sessionsByDays2 } = await request(app).get("/events/by-days/1").expect(200)

   expect(sessionsByDays2.length).toBe(7)
   expect(sessionsByDays2.reduce((sum: number, day: {date: string; count: number}) => sum += day.count, 0)).toBe(44)
   expect(sessionsByDays2[0].count).toBe(0);
   expect(sessionsByDays2[1].count).toBe(6);
   expect(sessionsByDays2[6].count).toBe(8);
 });

 it("can get unique sessions count by hour", async () => {
   const { body: sessionsByHours } = await request(app).get("/events/by-hours/48").expect(200)

   expect(sessionsByHours.length).toBe(24)
   expect(sessionsByHours.reduce((sum: number, day: {date: string; count: number}) => sum += day.count, 0)).toBe(8)

   const { body: sessionsByHours2 } = await request(app).get("/events/by-hours/36").expect(200)

   expect(sessionsByHours2.length).toBe(24)
   expect(sessionsByHours2.reduce((sum: number, day: {date: string; count: number}) => sum += day.count, 0)).toBe(7)
 });

 const charts: string[] = ['os','pageview','geolocation']
 const timeRange: string[] = ['today','week','all']
 
 charts.forEach(chart => {
   timeRange.forEach(timeRange => {
     it(`${chart} entry point can get ${timeRange} as a param to determine the wanted time range for the data`, async () => {
       const { body: events } = await request(app).get(`/events/chart/${chart}/${timeRange}`).expect(200);
       expect(events.length).not.toBe(0);
     }); 
   });
 });
 
})