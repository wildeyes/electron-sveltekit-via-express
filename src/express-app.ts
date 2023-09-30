import express from "express";

export function startServer() {
  const app = express();
  const port = 3001;

  app.get("/", (req: any, res: any) => {
    res.send("Hello World!");
  });

  return app.listen(port, () => {
    // console.log(`Example app listening on port ${port}`);
  });
}

// if (require.main === module) {
//   startServer();
// }
