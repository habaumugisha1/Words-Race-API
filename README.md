# Words-Race-API
This is a Word Race game

### Installation
```
git clone https://github.com/habaumugisha1/Words-Race-API.git

npm install

// start server on local development
npm run dev
```
## The end points required
### Welcome message
```js
"/"
``` 
### Saving game in database

```js
"/api/v1/newgame"
```

### Generating new words by random that will be displayed to be typed by users

```js
"/api/v1/words"
```


### Getting summary of played games on leaderboard

```js
"/api/v1/leaderBoard"
```

***

```js
post('/newgame', newGame);
get('/words', randomWords);
get('/leaderBoard', leaderBoards);
```
Thanks ! 