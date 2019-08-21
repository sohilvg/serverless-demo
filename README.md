# serverless-demo
This is a small demo for AWS Serverless.

 **installation**
 ```
 npm install -g serverless
 ```
**Create a Service:**
```
serverless create --template aws-nodejs
```
 Create a function: into your ***serverless.yml*** file
 ```
 functions:
  hello:
    handler: handler.hello
    events:
      - http:
          path: /hello
          method: get
 ```
 **Deploy a Service:** 
 
 Use this when you have made changes to your Functions, Events or Resources in serverless.yml or you simply want to deploy all changes    within your Service at the same time.
 ```
 serverless deploy -v
 ```
 **Deploy the Function:**
 
 Use this to quickly upload and overwrite your AWS Lambda code on AWS, allowing you to develop faster.
 ```
 serverless deploy function -f hello
 ```
 **Invoke the Function on AWS:**
 
 Invokes an AWS Lambda Function on AWS and returns logs.
 ```
 serverless invoke -f hello -l

 ```
 **Invoke the Function on your machine:**
 
 Invokes an AWS Lambda Function on your local machine and returns logs.
```
serverless invoke local -f hello -l
```
