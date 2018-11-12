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

The objective of this Vue app is to serve multiple individual standalone `.html` pages. These `.html` pages are converted from `.rmd` files, i.e, [RMarkdown](https://rmarkdown.rstudio.com/) files using an external program called [Rstudio](https://www.rstudio.com/). RMarkdown files have the `.rmd` extension and act similar to `.md` markdown files when converted to an `.html` page, but with the added functionality of converting R and Python scripts into visualizations and interactive documents. You can check examples in the [Gallery](https://rmarkdown.rstudio.com/gallery.html) of `.rmd` files converted to `.html` pages, `.pdf` documents and various other formats.

The Vue App will only serve these `.html` pages that will be dropped in the `/static` folder of the App directory by the RStudio program. Alongwith that the `/static` folder will also hold the `.rmd` files. The Vue App and RStudio will not interact with each other. You can find actual examples of these two files in the `\static` folder of this repo. You can open up these `.html` pages and see how they work.

These `.html` pages are standalone and contain various Scripts and Libraries for its functionality and interactivity within them. Since the libraries create DOM objects, something that Vue does not allow without creating wrapper components for each Script and Library, the best way to serve these `.html` pages without breaking functionality in a Vue App is using HTML iframe tag.

## To Do

1. Implement Fragment URLs

    To implement [Fragment URLs](https://blog.httpwatch.com/2011/03/01/6-things-you-should-know-about-fragment-urls/) like the following example [https://www.mkdocs.org/#mkdocs].

    If you run the Vue App and navigate using the Cards to `School > SQL > SQL Basics` you can view the standalone `SQL_Basics.html` page from the `\static` folder served within the app using iFrame tags. Now open the same `.html` page outside of the Vue App, and select a menu item from the left floating Table of Contents (TOC) you will see the URL change to that specific URL fragment starting with a `#`.

    ![](\static\img\001.png)
    
    Since we are using Vue-Router and iFrame tags, this is not possible natively inside the Vue App. However, this functionality can be implemented using [Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) and if you have control over the parent and the iFrame element. You can check an example of that- [Two way iframe communication.](https://gist.github.com/pbojinov/8965299) In our Vue App, the `SQL_Basics.vue` component is the Parent element, and the `SQL_Basics.html` page is the iFrame element. For your code to work, it needs to be a part of both these files. The RStudio program page uses [Tocify.js](http://gregfranko.com/jquery.tocify.js/) library to create the floating Table of Contents and the URL Fragments in the `.html` page.

    If you know how to achieve this, you can test your code by editing the `SQL_Basics.vue` component to act as the parent element and for the child element insert your javascript code in a separate `<script>` tag in the corresponding `SQL_Basics.html` page. But make sure you are not modifying other `<script>` tags in the document as they are managed by the RStudio program and will break functionality.

    For this milestone to be marked as complete, the code you provide needs to be dynamic where I can change the content of the `.rmd` file, generate the `.html` page using RStudio and it will still be able to work. Also, since the `.rmd` files accepts `<script>` tags that show up in the final `.html` page, I will place your code in the `.rmd` file and generate an `.html` page through Rstudio program to see if all the functionality is still intact alongwith the new implementation.

2. Implement Search Engine

    To implement Search Engine functionality similar to [MkDocs](https://www.mkdocs.org/user-guide/configuration/#search) which uses [Lunr.js](https://lunrjs.com/), but using [ElasticLunr.js](http://elasticlunr.com/).

    The Search Engine should index the text in the `.rmd` files as they are plain text, and direct result towards the `.html` pages being served using the iFrame. Similar to [MkDocs](https://www.mkdocs.org/), the Search Engine should make use of the Fragment URLs to direct the search result to the appropriate page and the URL fragment within which the text result is contained.

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

    This structure needs to be made more dynamic and simplified. Also, in the future, this navigation will be managed using a Django App that will generate the Navigation elements dynamically and getting data from SQL DB.
    
    For your milestone, you can setup the following Vuex Store example and test your dynamic approach.

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