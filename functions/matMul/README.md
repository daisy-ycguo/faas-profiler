# matrix multiplication action in Nodejs

## Steps to create a wsk action

1. create a zip folder containing all the files in this directory
```
zip -r matMulNode.zip *

```
2. create action using the command 

```
wsk action create matMulNodejs --kind nodejs:6 matMulNode.zip

```

3. Execute the action

```
wsk action invoke matMulNodejs -b -p dim 1000
```

