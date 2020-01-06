**User login**
----
  Verify user login and password
* **URL**

  `/api/login`

* **Method:**

  `GET` | `POST`
  
*  **URL Params**

   **Required:**
 
   `username=[string]`
   
   `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
        [{
            "id": 1,
            "title": "Adajio sol menor",
            "updated_at": "2020-01-06 21:02:58",
            "tags": [{
                "id": 1,
                "tag": "sad"
            }]
        }]
 
* **Error Response:**

  * **Code:** 200 <br />
    **Content:** `{ error : "Вы кто такие, я вас не звал }` 

**Show compositions**
----

Returns songs matching filters

* **URL**

  `/api/compositions`

* **Method:**

  `GET`
  
*  **URL Params**

   **Optional:**
 
*   `search_s=[string]` - search string
   
   `tag[]=[string]` - filter by tags
   
    example: `?tag[]=sad&tag[]=funny&tag[]=cool`
   
*   `title=[asc|desc]` - filter by title

    example: `?title=asc` or `?title=desc`
   
*   `date=[asc|desc]` - filter by date

    example: `?date=asc` or `?date=desc`

* **Success Response:**

  * **Code:** 200 <br />
    ```json
    [{
        "id": 1,
        "title": "Adajio sol menor",
        "updated_at": "2020-01-06 21:02:58",
        "tags": [{
            "id": 1,
            "tag": "sad"
        }]
    }]
 
* **Error Response:**
  
  If composition not found
  * **Code:** 200 <br />
    **Content:** `{ error : "Ничего не найдено" }` 