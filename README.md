<!-- PROJECT LOGO -->
![image](https://github.com/VedanshArun/CORS/assets/41267558/6d8c91fd-9d90-4f2d-a06e-970333693d8a)


<br />
<p align="center">
  <h1 align="center">Cross - Origin Resources Sharing</h1>

  <p align="center">
    Cross-Origin Resource Sharing (CORS) is a mechanism or a protocol that allows devices on one domain to access resources residing on other domains. 
    <br />
    <br />
  </p>
  <p align = "center"> This is just a simple web page for a submission</p>
</p>

## 📝 About the Webpage

Cross-Origin Resource Sharing (CORS) is a standard that allows a server to relax the same-origin policy. This is used to explicitly allow some cross-origin requests while rejecting others. For example, if a site offers an embeddable service, it may be necessary to relax certain restrictions. Setting up such a CORS configuration isnt necessarily easy and may present some challenges. In these pages, we'll look into some common CORS error messages and how to resolve them.

![image](https://github.com/VedanshArun/CORS/assets/41267558/5df7fc4c-a0ab-4429-8eba-2e1b84f4c3fe)


## Some Common CORS Error Messages

![image](https://github.com/VedanshArun/CORS/assets/41267558/272deb5d-d381-47ef-8df5-d256fb51321d)


Firefox's console displays messages in its console when requests fail due to CORS. Part of the error text is a "reason" message that provides added insight into what went wrong. The reason messages are listed below;

1. 
```sh
CORS disabled
```
2.
```sh
CORS request did not succeed
```
3.
```sh
CORS header 'Origin' cannot be added
```
4.
```sh
CORS request external redirect not allowed
```
5.
```sh
CORS request not http
```
6.
```sh
CORS header 'Access-Control-Allow-Origin' missing
```
7.
```sh
CORS header 'Access-Control-Allow-Origin' does not match 'xyz'
```
8.
```sh
Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'
```
9.
```sh
Did not find method in CORS header 'Access-Control-Allow-Methods'
```
10.
```sh
expected 'true' in CORS header 'Access-Control-Allow-Credentials'
```
11.
```sh
CORS preflight channel did not succeed
```
12.
```sh
invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'
```
13.
```sh
invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'
```
14.
```sh
missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel
```
15.
```sh
Multiple CORS header 'Access-Control-Allow-Origin' not allowed
```

## Solution

### Proxy the API Request While Using External Calls in an Extension

![image](https://github.com/VedanshArun/CORS/assets/41267558/9a8e1b7f-ade2-4138-95de-900993bd1a38)


CORS proxy can be a helpful solution to make cross-origin requests. The proxy layer sits between your request and its destination without knowing the request’s origin. Thus, though the request comes from an unknown source, the CORS proxy makes it seem that it is a request from an allowed location.

To learn how to do this, here is the list of CORS-Proxy which you can use for your website.

Free Proxies can be great for testing, but relying on a free third-party tool is not advisable for something you will use on the production site. In such cases, a more stable solution is to call the API from a server and make the data available on the client-side.

### Use a Serverless Function

![image](https://github.com/VedanshArun/CORS/assets/41267558/7da3c86b-70e9-4c6e-a532-d17754263979)


A more commonly used solution to resolve CORS error is to use a serverless function. It is an alternate way to proxy your requests, but instead of relying on a free third-party service, you can build your micro-infrastructure to call a web service and feed data to an API endpoint.


<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.


1. To get started, fork this repository to your GitHub account.

2. Clone the repo.
    ```sh
     git clone https://github.com/<your-username>/CORS.git
    ```
3. Install packages.
    ```sh
      npm install
    ```
4. Run project.
    ```sh
     npm run dev
    ```


<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.
