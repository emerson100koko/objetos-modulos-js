import Order from "./models/order.js";
import * as orderService from './services/order-service.js';

const data = document.getElementById("basicSalaryInput").innerHTML.split("\n");

const order = new Order(data[0], Number(data[1]), Number(data[2]));

const total = orderService.total(order);

console.log(`Pedido Codigo: ${order.code}`);
console.log(`Valor Total:  ${total.toFixed(2)}`);
