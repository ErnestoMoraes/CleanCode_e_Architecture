import Coupon from "../../src/project.shopp/Coupon";
import Item from "../../src/project.shopp/Item";
import Order from "../../src/project.shopp/Order";

test("Não deve criar pedido com CPF inváido", function(){
    expect(() => new Order('111.111.111-11')).toThrow(new Error("Cpf inválido"));
    
});

test("Deve criar um pedido com 0 itens", function(){
    const order = new Order("259.556.978-37");
    const total = order.getTotal();
    expect(total).toBe(0);
});

test("Deve criar um pedido com 3 itens", function(){
    const order = new Order("259.556.978-37");
    order.addItem(new Item(1, "Guitarra", 1000), 1);
    order.addItem(new Item(2, "Amplificador", 1000), 1);
    order.addItem(new Item(3, "Cabo", 1000), 1);
    const total = order.getTotal();
    expect(total).toBe(3000);
});

test("Deve criar um pedido com 3 itens com cupom de desconto", function(){
    const order = new Order("259.556.978-37");
    order.addItem(new Item(1, "Guitarra", 1000), 1);
    order.addItem(new Item(2, "Amplificador", 1000), 1);
    order.addItem(new Item(3, "Cabo", 1000), 1);
    order.addCoupon( new Coupon("VALE20", 20));
    const total = order.getTotal();
    expect(total).toBe(2400);
});