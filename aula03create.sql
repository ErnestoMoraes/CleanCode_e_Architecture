drop table ernesto.purchase;
create table ernesto.purchase (
    card_number text,
    soft_descriptor text,
    amount numeric,
    date timestamp,
    currency text
);

insert into ernesto.purchase (card_number, soft_descriptor, amount, date, currency) values (
    '1234123412341234', 'Amazon', '100', '2023-01-11T20:10:00', 'BRL'
);
insert into ernesto.purchase (card_number, soft_descriptor, amount, date, currency) values (
    '1234123412341234', 'Netflix', '30', '2023-01-03T20:10:00', 'USD'
);
insert into ernesto.purchase (card_number, soft_descriptor, amount, date, currency) values (
    '1234123412341234', 'MELI', '300', '2023-01-04T20:10:00', 'BRL'
);
insert into ernesto.purchase (card_number, soft_descriptor, amount, date, currency) values (
    '1234123412341234', 'Google', '100', '2023-01-11T20:10:00', 'BRL'
);
insert into ernesto.purchase (card_number, soft_descriptor, amount, date, currency) values (
    '1234123412341234', 'Google ADS', '100', '2023-02-11T20:10:00', 'BRL'
);
