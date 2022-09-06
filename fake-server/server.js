const fs = require("fs")
const bodyParser = require("body-parser")
const jsonServer = require("json-server")
const jwt = require("jsonwebtoken")

const server = jsonServer.create();
const userDB = JSON.parse(fs.readFileSync("./users.json", "UTF-8"));

// to parse the body of the request
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "123456789";

const expiresIn = "1h";

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// authenticate the user
function isAuthenticated({ email, password }) {
  return (
    userDB.users.findIndex(
      user => user.email === email && user.password === password
    ) !== -1
  );
}

// Register New User
server.post("/api/auth/register", (req, res) => {
  const { email, password } = req.body;
  if (isAuthenticated({ email, password }) === true) {
    const status = 401;
    const message = "Email and Password already exist";
    res.status(status).json({ status, message });
    return;
  }

  // save the user in the database
  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    data = JSON.parse(data.toString());

    // to get the user add to the list at the end
    let last_item_id = data.users[data.users.length - 1].id;

    // add new user
    data.users.push({ id: last_item_id + 1, email: email, password: password });
    let writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {
      if (err) {
        const status = 401;
        const message = err;
        res.status(status).json({ status, message });
        return;
      }
    })
  })
  const access_token = createToken({ email, password })
  res.status(200).json({ access_token })
})

// Login to one of the users from ./users.json
server.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = "Incorrect email or password";
    res.status(status).json({ status, message });
    return;
  }
  const access_token = createToken({ email, password });
  res.status(200).json({ access_token });
});

// Listening server
server.listen(5000, () => {
  console.log("Running fake api json server on port 5000");
})