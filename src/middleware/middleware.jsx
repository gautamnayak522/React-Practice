export const print1 = (storeAPI) => (next) => (action) => {
    console.log('print1')

    for (let index = 0; index < 10000; index++) {
      console.log(1); 
    }

    return next(action)
  } 
  
  export const print2 = (storeAPI) => (next) => (action) => {
    console.log('print2')
    return next(action) 
  }
   
  export const print3 = (storeAPI) => (next) => (action) => {
    console.log('print3')
    return next(action)
  }

  export function exampleMiddleware(storeAPI) {
    return function wrapDispatch(next) {
      return function handleAction(action) {
        // Do anything here: pass the action onwards with next(action),
        // or restart the pipeline with storeAPI.dispatch(action)
        // Can also use storeAPI.getState() here
        console.log("example middleware");
  
        return next(action)
      }
    }
  }

  export const customMiddleware = (storeAPI) => (next) => (action) => {
    console.log("custom middleware");
    return next(action)
  }
  