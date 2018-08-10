import express = require("express");

module.exports = (User: any, redis: any) => {
  return (() => {
    const router = express.Router();

    /**********************************
        The root route is => /auth/*
    ***********************************/

    router.route("/confirm/:id").get(async (req: any, res: any) => {
      const { id } = req.params;
      const userId = await redis.get(id);
      if (userId) {
        await User.update({ id: userId }, { confirmed: true });
        await redis.del(id);
        res.redirect(`${process.env.FRONTEND_HOST}/login`);
      } else {
        res.send("Invalid");
      }
    });

    return router;
  })();
};
