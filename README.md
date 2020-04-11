# This repo reproduces Turbolinks bug with Webpacker

1. Setup Rails app

```
$ bundle install
$ rails db:migrate
$ rails s
$ ./bin/webpack-dev-server
```

2. Go to http://localhost:3000

3. Click the link that says _Go to posts#index to test turbolinks_

4. Notice `turbolinks:load` event isn't fired on initial load (**bug**)

5. If you refresh, it fires

6. If you go back and come back to the same page, it fires
