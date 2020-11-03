# composition exemple

## Presentation
You will find in this directory some concrete examples of how to use the composition API.


### fetch-api-simple
In this exemple we use the composition API to fetch specific data in a reusable way by handling the loading, errors, and the fetch.

### fetch-api-complex
It is pretty much the same thing as fetch-api-simple except that we add a layer of abstraction in order to be able to fetch any data and handle in the same way the loading, errors and the fetch.

### suspense
We use the new component Suspense and the async setup fuction to handle the loading part while the Promise of the setup function is not resolve.

### form-validation
In this exemple we use composition API to add somes validations on your form in a reusable way.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
