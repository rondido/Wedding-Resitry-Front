import { rest } from "msw";
import Goods from "./dummy.json";

export const handlers = [
  rest.get("/GoodsProduct/all", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Goods));
  }),
];
