
> Faster tests and quicker feedback cycles save lives!

### What?

Quickscope-cli is a test runner invoker (quite a mouthful!). It sole purpose in life is to help you with running only the tests that you need. 

##### The problem

The main problem we are solving here is how normal `node` projects are built. 
A standard workflow for node module looks something like this:

- You have your amazing build system (gulp, grunt, broccoli, etc...) 
- Build system watches the file system.
- If some file changes then it will trigger the test command that will invoke your favourite test runner.
- Tests will run and you will most likely are happy with the result.

This looks good on the paper, but it just wont scale. Running all the tests with each save is a huge overhead.  
It will work fine if you have a small amount of tests, but what if you have thousands of test cases? Even if the tests are well written executing them will take time.  

##### The solution

Instead of watching all the files and triggering all the tests when any of them changes lets just watch all the tests files and trigger relevant tests when any of those files change? Simple eh!?

This will create much faster feedback loops, will reduce the noise and give you better overall developing flow.

### Getting started

```bash
  $ npm install quickscope-cli -g
  $ quickscope
```

##### Params

- `-c` - configuration file. `json` or `js` 

##### Configurations

Quickscope will either use configurations from your `package.json` file or from any file that you pass with `-c` param.

##### package.json

```json
"config": {
  "quickscope": {
    "files": "lib/__tests__/**.js",
    "cmd": "jest"
  }
}
```

##### custom config file

```json
{
  "files": "lib/__tests__/**.js",
  "cmd": "jest"
}
```

### Testing 

```bash
npm test
```

## License

MIT
