# Run

`git clone https://github.com/keshavuiq/gitinfo.git` for a local clone.

`cd gitinfo` to cd into dir. 

Run `npm install` to install required node modules.

Run `npm start` to start the server and navigate to `http://localhost:4200/`.

## Details

Libraries used :
- RxJS
- Nebular
- Octokit
- Bluebird
- EvaIcons

**Time Taken : **
Saturday : 7 hours
Sunday : 10 hours
Monday: 2 hours
(incl learning, googling, etc.)

## Demo Images / YT  Video

https://youtu.be/EgWFG4xKdXE (YT Demo Link)

![Demo](https://i.imgur.com/dSJSLDR.png)

## Note / Caveats

Nebular is a very opinionated framework, Basic pagination works, but i made the mistake of choosing this Library for the project. I tried multiple iterations for hours but couldn't get server side pagination to work, neither were the components in the library able to handle any kind of pagination whatsoever. Have to choose a better library next time. User not found error shows only after clicking the textfeild, this as well because of the framework choice. Does not work well with ChangeDetectorRef. 

