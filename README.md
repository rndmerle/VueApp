# Vue App

## Installation

```bash
npm install
```
For Python 

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Development

* On one terminal run your webpack dev server

```bash
npm run dev
```

* On another terminal launch the Django application

```bash
python manage.py runserver
```

And point your browser to [http://localhost:8000](), but test that you can also access the pure Django world, for example by going to the admin panel [http://localhost:8000/admin]()

# Summary

The objective of this Vue app is to serve [RMarkdown](https://rmarkdown.rstudio.com/) files. RMarkdown files have the `.rmd` extension and act similar to markdown files, but with the added functionality of running R and Python scripts and create interactive documents with them. You can check more examples in the [Gallery](https://rmarkdown.rstudio.com/gallery.html).

This Vue App will be serving `.html` pages converted from `.rmd` files using [Rstudio](https://www.rstudio.com/) program. You can find an example of these two files in the `\static` folder. The `.html` pages are standalone and contain various Scripts and Libraries for its functionality and interactivity. Since the libraries create DOM objects, the best way to serve these `.html` pages using a Vue App is using iFrame.

## To Do

1. Implement Fragment URLs

    To implement [Fragment URLs](https://blog.httpwatch.com/2011/03/01/6-things-you-should-know-about-fragment-urls/) like the following example [https://www.mkdocs.org/#mkdocs]. If you open up the `.html` pages in the `/static` folder, and select any headers from the Floating Table Of Contents (TOC) on the left, you can see that there is a fragmented URL showing up in the address bar starting with `#`. But since we are serving our `.html` pages in the Vue App as an iFrame, these fragments are not generating in the URL in the app. This functionality can be added using [Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage). You check an example of [Two way iframe communication.](https://gist.github.com/pbojinov/8965299), where you can control parent and the iframe element.

2. Implement Search Engine

    To implement Search Engine functionality similar to [MkDocs](https://www.mkdocs.org/user-guide/configuration/#search) which uses [Lunr.js](https://lunrjs.com/), but using [ElasticLunr.js](http://elasticlunr.com/).

    The Search Engine should index the text in the `.rmd` files as they are plain text, and direct result towards the `.html` pages being served using the iFrame. Similar to [MkDocs](https://www.mkdocs.org/), the Search Engine should make use of the Fragment URLs to direct the search result to the appropriate page and the URL fragment.

3. Implement Dynamic Routing

    Currently the folder structure is shown below, and to achieve this structure multiple components like 'Cards.vue', 'School.vue', 'SQL.vue' and 'SQL_Basics.vue' are created to serve the final `.html` page in an iFrame. This will become tedious to maintain considering hundreds of pages will be served, and many of these components are just routing to the `.html` pages.

    ```
    Home
    |
    ├── School
    │   ├── SQL
    |   |   ├── SQL Basics              ---> SQL_Basics.html
    |   |   ├── SQL Intermediate
    |   |   ├── SQL Advanced
    |   |   └── ...
    │   ├── Python
    |   |   ├── Python Basics           ---> Python_Basics.html
    |   |   ├── Python Data Structures
    |   |   ├── Python Classes
    |   |   ├── Python Advanced
    |   |   └── ...
    |   └──...   
    └── ...
    ```

    This structure needs to be made more dynamic and simplified, and the data managing the routing will be hosted on a SQL DB and served using Django API. You can setup a following Vuex Store example for testing the Dynamic approach.

    ```
    data: function () {
        return {
            navItems: [
                {  
                id: 1, parentDir: 'School', middleDir: 'SQL', finalDir: 'SQL Basics', fileLink: '../../static/SQL_Basics.html'
                },
                {
                id: 2, parentDir: 'School', middleDir: 'Python', finalDir: 'Python Basics', fileLink: '../../static/Python_Basics.html'
                }
            ]
        }
    }
```