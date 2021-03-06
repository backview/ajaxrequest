# ajaxrequest
This is a simple class that permit to make ajax request in simpler way :blush: [![Build Status](https://camo.githubusercontent.com/cfcaf3a99103d61f387761e5fc445d9ba0203b01/68747470733a2f2f7472617669732d63692e6f72672f6477796c2f657374612e7376673f6272616e63683d6d6173746572)]()
***
## How can i include it ?
You have to include the library like this:
```
<script src="request.js"></script>
```
***
## How does it work ?
#### For a get request:
```
    <script>
          //Get request example
          var callback_get = function(err, response){
            console.log("err: "+err); //err is a boolean (true == there is an error, false == there are no errors)
            console.log("response: "+response); //response is a string and if error the string will be contain the type of the error ("404" or "500")
          }
          var request = new Request("test_get.php", "GET", [{name: "test", value: 10}, {name: "test2", value: 100}], callback_get); //inizialize the Request object
          request.send(); //send the request
    </script>
```

Short mode:
```
    <script>
          //Get request example
          var callback_get = function(err, response){
            console.log("err: "+err); //err is a boolean (true == there is an error, false == there are no errors)
            console.log("response: "+response); //response is a string and if error the string will be contain the type of the error ("404" or "500")
          }
          new Request("test_get.php", "GET", [{name: "test", value: 10}, {name: "test2", value: 100}], callback_get).send();
    </script>
```


#### For a post request:
```
    <script>
          //Post request example
          var callback_get = function(err, response){
            console.log("err: "+err); //err is a boolean (true == there is an error, false == there are no errors)
            console.log("response: "+response); //response is a string and if error the string will be contain the type of the error ("404" or "500")
          }
          var request = new Request("test_post.php", "POST", [{name: "test", value: 10}, {name: "test2", value: 100}], callback_get); //inizialize the Request object
          request.send(); //send the request
    </script>
```

Short mode:
```
    <script>
          //Post request example
          var callback_get = function(err, response){
            console.log("err: "+err); //err is a boolean (true == there is an error, false == there are no errors)
            console.log("response: "+response); //response is a string and if error the string will be contain the type of the error ("404" or "500")
          }
          new Request("test_post.php", "POST", [{name: "test", value: 10}, {name: "test2", value: 100}], callback_get).send();
    </script>
```

### Errors:
Type of errors:
- "404" -> The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
- "500" -> A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.

PS: The type error will be sended in the callback as string in the response variable.
***
## Considerations:
GET is simpler and faster than POST, and can be used in most cases.

However, always use POST requests when:
- A cached file is not an option (update a file or database on the server).
- Sending a large amount of data to the server (POST has no size limitations).
- Sending user input (which can contain unknown characters), POST is more robust and secure than GET.
