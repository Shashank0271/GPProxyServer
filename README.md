
# GPProxyServer

### 💡 Proxy
A **```proxy```** is a software that makes requests on behalf of a client.
- Any requests that the client makes has to pass through the proxy.The api proxy sets an abstraction between the consumers and the server and decouples them.
- All connections are established between the client and the proxy.So the services dont have to be aware of each other or interact with each other.
- It can decouple the consumers from the backend service and vice-versa.
- The server is not aware of the clients information.
- The client is aware of the final destination.

<hr>

![proxy diagram](https://github.com/DevGupta-ikr/GPProxyServer/assets/77541795/14bf7f6a-2588-44f4-8961-9375d2bd01b9)

<hr>


### ⚡️ USE cases :
1. caching stuff
2. storing security keys on the server
3. Rate limiting
4. Logging
5. Data Transformation
6. ISPs use proxies to protect / restrict users from accessing websites
7. Government can use them to protect sensitive information

<hr>

![apiProxy2](https://github.com/DevGupta-ikr/GPProxyServer/assets/77541795/677ff469-eaae-488a-aaab-33a735b4335c)

<hr>

### 💡 REVERSE Proxy

- In the proxy configuration , the server doesn't know the client.
- In the reverse proxy configuration , the client doesn't know the server.

Eg- When we have multiple servers , the proxy communicates the request to 
one of the servers . This is one of the most common use cases for a reverse
proxy : ```Load Balancing (eg - NGINX server)```

<hr>

![reverse_proxy](https://github.com/DevGupta-ikr/GPProxyServer/assets/77541795/cd3c9edd-1b60-40a9-b5f5-3191629484f5)

<hr>

### 🔗 Sources (reference)
1. Hey Node : [What is api proxy](https://www.youtube.com/watch?v=7YMcpmxtNJA&t=201s&ab_channel=HeyNode)

2. Hussein Nasser : [Proxy vs REverse Proxy Server Explained](https://www.youtube.com/watch?v=SqqrOspasag&t=684s&ab_channel=HusseinNasser)


