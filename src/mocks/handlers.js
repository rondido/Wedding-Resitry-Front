import { rest } from "msw";
import Goods from "./dummy.json";
import Alarm from "./alarm.json";

export const handlers = [
  rest.get("/GoodsProduct/all", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Goods));
  }),
  rest.get("/alarm/all", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Alarm));
  }),
];
