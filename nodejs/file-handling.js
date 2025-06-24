const fs = require("fs");
const filepath = "./taskss.json";

const loadtask = () => {
  try {
    const filedata = fs.readFileSync(filepath);
    const stringdata = filedata.toString();
    return JSON.parse(stringdata);
  } catch (erro) {
    return [];
  }
};

const saveTask = (data) => {
  const jsonData = JSON.stringify(data);
  fs.writeFileSync(filepath, jsonData);
};

const addTask = (task) => {
  const data = loadtask();
  data.push({ task });
  saveTask(data);
  console.log(`Task Added : ${task}`);
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
}
