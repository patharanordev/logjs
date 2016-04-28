# logjs
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A8YE92K9QM7NA)

Log to file in current directory.

## Features

- [x] Auto-create log file if the file doesn't exists
- [x] Log with timestamp (using moment.js)
- [x] Log new line or concat
- [x] Asynchronous
 
## Usage

Add `log.js` in file which you want to append log and then run with `node` command

Parameter no.

1. Directory path
2. Log file
3. Contents
4. Append content new line or concat

```javascript
var log = require('./log.js');
    .
    .
    .
log.append('./', 'filename.txt', 'contents', true);
```

## Donation
If this project help you reduce time to develop, you can give me a cup of coffee :) 

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A8YE92K9QM7NA)
