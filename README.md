
# API

1. [Create a new company](#####createanewcompany)
2. [Get a list of companies](#####getalistofcompanies)
3. Get a single company
4. Update a single company
5. Delete a single company

##### Create a new company
```
POST /companies
```

###### Parameters
Name | Type | Description
---- | ---- | -----------
name | string | a company name 

###### Example
```javascript
{
	"name": "company name"
}
```

###### Response
```
Status: 200 OK
Content-Type: text/html
```
```javascript
{
	"_id": "id",
	"name": "company name"
}
```

##### Get a list of companies
```
GET /companies
```

###### Parameters
There aren't any required parameters for this route

###### Example
```javascript

```

###### Response
```
Status: 200 OK
Content-Type: text/html
```
```javascript
[
  {
      "_id": "id",
      "name": "company name"
  },
  {
      "_id": "id",
      "name": "company name"
  },
  ...
]
```

