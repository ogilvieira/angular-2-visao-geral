"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//importa componente do core do Angular
var core_1 = require("@angular/core");
var Task = (function () {
    function Task() {
    }
    return Task;
}());
var TASKS = [
    { id: 1, name: "Trabalhar" },
    { id: 2, name: "Lavar pratos" },
    { id: 3, name: "Tirar poeira" },
    { id: 4, name: "Compras no supermercado" },
    { id: 5, name: "Cuidar das crianças" },
    { id: 6, name: "Jogar videogame" },
    { id: 7, name: "Almoçar" },
    { id: 8, name: "Jantar" },
    { id: 9, name: "Fazer exercícios" },
    { id: 10, name: "Pagar contas" }
];
var TaskEditComponent = (function () {
    function TaskEditComponent() {
    }
    return TaskEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Task)
], TaskEditComponent.prototype, "task", void 0);
TaskEditComponent = __decorate([
    core_1.Component({
        selector: 'task-edit',
        template: "\n  <div *ngIf=\"task\">\n  <input type=\"text\" [(ngModel)]=\"task.name\" />\n  </div>\n  "
    })
], TaskEditComponent);
exports.TaskEditComponent = TaskEditComponent;
//Configura novo Component
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Lista de tarefas";
        this.tasks = TASKS;
    }
    AppComponent.prototype.onClick = function (task) {
        this.selectedTask = task;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{ title }}</h1>\n  <ul>\n    <li *ngFor=\"let o of tasks\" (click)=\"onClick(o)\">{{o.id}} - {{o.name}}</li>\n  </ul>\n  <task-edit [task]=\"selectedTask\"></task-edit>\n  "
    })
    //exporta class para que o Component seja reutilizavel em todo app
], AppComponent);
exports.AppComponent = AppComponent;
// () -> view -> component
// [] -> component -> view
// * -> sintaxe sugar -> sintaxe com açucar 
//# sourceMappingURL=app.component.js.map