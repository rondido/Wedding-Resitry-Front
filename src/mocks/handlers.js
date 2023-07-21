import { rest } from "msw";

export const handlers = [
  rest.delete("/usersgoods", (req, res, ctx) => {
    const url = req.url.searchParams.get("usersGoodsId");
    return res(ctx.json({ url }, null));
  }),
];
