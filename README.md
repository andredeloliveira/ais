# Cardboards.com.br

##React + Redux + MeteorJS

http://www.cardboards.com.br


###To run locally

`npm install`

Add a settings file with the following

```
{
    "pag_seguro": {
      "email": "email",
      "token": "token"
    },
    "facebook": {
      "appId": "appId",
      "secret": "secret"
    },
    "google": {
      "clientId": "clientId",
      "secret": "secret"
    }
}
```

And then you can run :

`meteor --settings settings-file.json`
