import { GifsController } from "./Controllers/gifsController.js";
import { SandboxGifsController } from "./Controllers/SandboxGifsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  gifsController = new GifsController()

  sandboxGifsController = new SandboxGifsController()
}

window["app"] = new App();
