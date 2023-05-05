# nodepetshop
Pet Shop themed REST API implemented in Node JS

This makes it ideal to implement in apps that follow the MVC architecture in order to be used as the server-side of it

## Routes:
```
/animal/list (get) - Returns a list with all animals in the database
/animal (post) - Adds a new animal in the database
/animal/:name/:species (put) - Changes two attributes from an animal (the ones given in the url arguments)
/owner/:owner (get) - Returns all animals that may have the inserted argument as an owner
/owner/:owner (delete) - Deletes all animals from an owner from the database
/animal/:name/:species/:age/:owner (delete) - Deletes only the described animal
```

## What is an animal
* An animal is an umbrella term for a pet in this API
* It is an JavaScript object, written directly to "animals.json"
* Composite of the following attributes:
  - Name
  - Species
  - Age
  - Owner

## Next steps:
1. Connect this to a proper database; any relational one would do the trick
2. Refactor any possible bottlenecks

## More details (in Portuguese):
https://www.linkedin.com/pulse/uma-breve-disserta%2525C3%2525A7%2525C3%2525A3o-sobre-apis-andr%2525C3%2525A9-santana-filho%3FtrackingId=FJp2fxie9pLYXst54D5Mpg%253D%253D/?trackingId=FJp2fxie9pLYXst54D5Mpg%3D%3D
