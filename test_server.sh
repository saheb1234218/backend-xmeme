chmod +x install.sh

sudo ./install.sh


chmod +x server_run.sh

./server_run.sh &

chmod +x sleep.sh

./sleep.sh
curl --location --request GET 'http://3.140.249.77:8081/memes'
curl --location --request POST 'http://3.140.249.77:8081/memes' --header 'Content-Type: application/json' --data-raw '{"name": "xyz","url": "abc.com","caption": "This is a meme"}'
curl --location --request GET 'http://3.140.249.77:8081/memes'
