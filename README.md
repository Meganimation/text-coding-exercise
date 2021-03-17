# Frontend Take-Home

You should have received a notion link with the product requirements that use the json-server here.

This repository is for the json-server mock backend to use for your development.

# Installation
If you have yarn installed:

`yarn`

should get you all squared away.

# Running

There is a "yarn" script that will run the server:

`yarn run json-server`

# What can I do with json-server
This is built ontop of [json-server](https://github.com/typicode/json-server). For the purposes of this exercise. Running

`yarn run json-server` should give you a homepage at `http://localhost:3000/`

with entity queries for

* owners - http://localhost:3000/owners
* conversation metadata - http://localhost:3000/conversationMetadata
* messages - http://localhost:3000/messages

Please refer to the json-server documentation for more information on pagination, etc.

For us, we will use the sorting and the filtering functionality. You can pass these as query params to the url:

* ownerId={} // filter by owner id
* _sort={key} //sort by the key provided
* _order=[asc|desc] // is it ascending or descending order.


# Questions
Any questions can be directed to george@revv-up.com.

Happy coding!
