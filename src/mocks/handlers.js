import { rest } from "msw";
import Dummy from "./dummy.json";
import Alarm from "./alarm.json";
import Goods from "./goods.json";
export const handlers = [
  rest.get("/GoodsProduct/all", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Dummy));
  }),
  rest.get("/alarm/all", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Alarm));
  }),
  rest.post("/usersgoods/add/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Goods));
  }),
];
