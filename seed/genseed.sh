#! /bin/bash
n=1

while [ $n -le 25000 ]
do
	cat seed_products.json >> seed_products_1m.json
	n=$(( n+1 ))
done
