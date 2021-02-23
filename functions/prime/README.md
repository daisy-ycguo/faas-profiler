# Prime action in Nodejs

### Create wsk action
```
wsk action create primeNode prime.js -m 512 -t 300000
```

### Execute the action
```
wsk action invoke primeNode -b -p range 1000

```
