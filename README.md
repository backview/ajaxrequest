# ajaxrequest
This in a simple class that permit to make ajax request in simpler way :blush: [![Build Status](https://camo.githubusercontent.com/cfcaf3a99103d61f387761e5fc445d9ba0203b01/68747470733a2f2f7472617669732d63692e6f72672f6477796c2f657374612e7376673f6272616e63683d6d6173746572)]()
## How can i include it ?
You have to include the library like this:
```
<script src="request.js"></script>
```
## How does it work ?
For a get request:
```
    <script>
          //Get request example
          var callback_get = function(err, response){
            console.log("err: "+err);
            console.log("response: "+response);
          }
          var request = new Request("test_get.php", "GET", [{name: "test", value: 10}, {name: "test2", value: 100}], callback_get); //inizialize the Request object
          request.send(); //send the request
    </script>
```
For a post request:
```
    <script>
          //Post request example
          var callback_get = function(err, response){
            console.log("err: "+err);
            console.log("response: "+response);
          }
          var request = new Request("test_post.php", "POST", [{name: "test", value: 10}, {name: "test2", value: 100}], callback_get); //inizialize the Request object
          request.send(); //send the request
    </script>
```