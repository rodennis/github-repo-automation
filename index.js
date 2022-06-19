const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { exec } = require("child_process");
const fs = require("fs");
const axios = require("axios");

// github personal access token for auth
const token = "";
//github api end point
const url = `https://api.github.com/user/repos`;

// runs bash file which clones the repository to your local machine
const cloneRepository = () => {
  exec("bash script.sh", (error, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
};

readline.question("New repo name?\n\n", async (repoName) => {
  // new repo object read github api docs for all params that can be passed
  // these params just create a new repo with a readme and make it public
  const repo = {
    name: repoName,
    auto_init: true,
    private: false,
  };

  // authorization headers
  const config = {
    headers: {
      Authorization: `token ${token}`,
    },
  };

  // file path for where you want projects to reside
  const folderName = `/Users/rodneytodd/personal_projects/sandbox/${repoName}`;

  await axios.post(url, repo, config).then((res) => {
    if (res.status === 201 || 200) {
      console.log("\nCreated!");
      try {
        //creates new folder at file path above
        fs.mkdirSync(folderName);
        if (fs.existsSync(folderName)) {
          // clones repository into newly created folder
          cloneRepository();
          return res;
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
  readline.close();
});

// close program
process.on("exit", () => {
  console.log("Clone successful!");
});
