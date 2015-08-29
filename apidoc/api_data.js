define({ "api": [
  {
    "type": "post",
    "url": "/adduser",
    "title": "Add a new user record",
    "name": "AddUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>JSON</p> ",
            "optional": false,
            "field": "JSON",
            "description": "<p>object with user information {&quot;username&quot;, &quot;fullname&quot;, &quot;gender&quot;, &quot;location&quot;, &quot;age&quot;, &quot;email&quot;}</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Record",
            "description": "<p>is added to the database.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/deleteuser/:id",
    "title": "Delete User record with matching id",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "User",
            "description": "<p>record is permanently deleted from the database.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/userlist/",
    "title": "Request List of All User information",
    "name": "GetUserList",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>JSON</p> ",
            "optional": false,
            "field": "All",
            "description": "<p>user information.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/updateuser",
    "title": "Update User information with a matching _id",
    "name": "UpdateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>JSON</p> ",
            "optional": false,
            "field": "JSON",
            "description": "<p>object with user information. {&quot;username&quot;, &quot;fullname&quot;, &quot;gender&quot;, &quot;location&quot;, &quot;age&quot;, &quot;email&quot;}. Existing _id must exist in the DB.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Record",
            "description": "<p>is updated in the database.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  }
] });