/*

Create a basic UriBuilder object that will be used specifically to build query params on an existing URI. 

  - It should support a params property and a build method. 
  - It will handle the URL having pre-existing params that need to be managed. 
  - The URL must be properly encoded (i.e. "a b" should be encoded as "a%20b")


  Highlight: use `thru` to acheive `tap` functionality with primitives

*/

function task406 () {


  let UriBuilder = function(uri) {
    let validUri = uri.replace(/\s/, '%20')

    return {
      params: {},
      build: function() {
        return _.chain(validUri)
                .thru((uri) => {
                  _.forIn(this.params, (v,k) => uri += `?${k}=${v}`)
                  return uri;
                })
                .value()
      }
    }
  }


  let builder = UriBuilder('http://www.code wars.com')
  
  builder.params.a = 1
  console.log(builder.build())
  
  builder.params.a = 2
  console.log(builder.build())
  
  builder.params.b = 2
  console.log(builder.build())
  
  delete builder.params.b
  console.log(builder.build())

  /*Tests*/
  // Test.assertEquals(builder.build(), 'http://www.code%20wars.com?page=1')

  // Test.expect(boolean, [optional] message) 
  //  Test.assertSimilar(actual, expected, [optional] message)
  //  Test.assertNotEquals(actual, expected, [optional] message) 

}
// task406()