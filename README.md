Hi Mikael Sundström,
thanks for registering for an API authentication token.
Please modify your client to use a HTTP header named "X-Auth-Token"
with the underneath personal token as value.
Your API token: 21703283a7884751ab3600e48307da78
Please verify your mail address by clicking here and tell me if you
want me to keep you posted about updates and/or changes to the API.
Check the code samples, have a look at the third party libraries to
see how to integrate the API in your project or go straight to the exhaustive documentation.
If you face bugs, problems or any question concerning the API in general, feel free to ask!
Best,
daniel

```html
<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvbC7YCPSVS6bjqPrOqBNvVoHeyl2xXkM",
    authDomain: "soccer-data.firebaseapp.com",
    databaseURL: "https://soccer-data.firebaseio.com",
    projectId: "soccer-data",
    storageBucket: "",
    messagingSenderId: "25850729284"
  };
  firebase.initializeApp(config);
</script>
```
