import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// get the list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    }, 
    {
      id: 2,
      title: "Joke 2",
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "Joke 3",
      joke: "What do you call fake spaghetti? An impasta!",
    },
    {
      id: 4,
      title: "Joke 4",
      joke: "Why did the bicycle fall over? Because it was two-tired!",
    },
    {
      id: 5,
      title: "Joke 5",
      joke: "What do you call cheese that isn't yours? Nacho cheese!",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
