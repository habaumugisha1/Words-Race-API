# Words-Race-API

## The end points required
### Saving game in database

```/api/v1/newgame```

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