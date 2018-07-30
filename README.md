In this project I created some tests unit tests and integration test.

In unit tests of App I checked is show a comment box and is show a comment list ?
In unit tests of Comment Box I checked that we have a text area and that users can type in, and when form is submitting, text area get emptied.
In unit tests of Comment List I checked that I created only one LI per comment, and that we can see the text from each comment.
In unit tests of actons I checked that action has the correct type, and that action has the correct payload.
In unit test of  reducerComments I checked that handles actions of type SAVE_COMMENT, and that is no errors when handles actions with unknown type.

In integration test I checked that we can fetch a list of comments and display them.

To start the project you have to run commands in terminal that listed below and open http://localhost:3000
```
> npm install
> npm start
```
To start the testing you have to run commands in a new terminal that listed below (after did npm install and npm start)
```
> npm run test

After compiling you will see that all tests passed successfully.