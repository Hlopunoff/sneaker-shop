export class MainApp {
  constructor(modules) {
    this.modules = modules
   }
  
  get services() {
    return this.modules
  }
}