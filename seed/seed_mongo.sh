#! /bin/bash

#create json file of 1m records
n=1
while [ $n -le 25000 ]
do
	cat seed_products.json >> seed_products_1m.json
	n=$(( n+1 ))
done

#import to mongo
x=1
while [ $x -le 10 ]
do
	mongoimport -c=products -d=lego --mode=merge --file=seed_products_1m.json
	x=$(( x+1 ))
done
