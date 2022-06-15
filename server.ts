import app from "./src/app";

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`server is running at ${port}`));
