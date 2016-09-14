import templateUrl from './app.component.html';

class AppController {
    constructor() {
        this.items = ['item1', 'item2', 'items'];
    }
}

export default {
    selector: 'myApp',
    controller: AppController,
    controllerAs: 'ctrl',
    templateUrl 
}