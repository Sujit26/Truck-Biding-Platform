# README #

This project implements a web based applicaion to allow raising and allocation of transport booking requests.

The aim is to develop software, A smart platform for transport bidding and
allocation. To solve the problem faced by thousands of truck unions millions of
truck drivers by using heavily and current technology stack.

It contains frontend & backend for our software.
Technology stack we used React.js, Django & sqlite

### How do I get set up? ###

Clone git repository:   
```git clone https://bitbucket.org/sodhi/tbas/src/master/```

activate virtual environments  


Install

Install virtualenv   
    ```pip3 install virtualenv```

Usage

Create a virtualenv    
    ```virtualenv .venv```  
Activate the virtualenv   
    ```source .venv/bin/activate```   

Deactivate the virtualenv   
    ```deactivate```


#### Set up for FRONT-END
 In the project directory, you can run:  
 Checkout to front-end branch

 ```git checkout modeling-users```

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.




#### Set up for BACKEND-END 
Install Requinmnets
```
    pip install -r requirements.txt
```
``` 
checkout master 
cd DjangoBackend
```
Out backend is on mater branch to checkout to master first


```bash
    $ python manage.py makemigrations
```

This will create all the migrations file (database migrations) required to run this App.

Now, to apply this migrations run the following command
```bash
    $ python manage.py migrate
```

One last step and then our todo App will be live. We need to create an admin user to run this App. On the terminal, type the following command and provide username, password and email for the admin user
```bash
    $ python manage.py createsuperuser
```

That was pretty simple, right? Now let's make the App live. We just need to start the server now and then we can start using our simple todo App. Start the server by following command

```bash
    $ python manage.py runserver
```

Once the server is hosted, head over to http://127.0.0.1:8000/ for the App.


### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact