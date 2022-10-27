import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="container row mx-auto rounded border mt-5 p-3 mb-4">
        <div className="col-12">
          <h1 className="ff-poppins fw-bolder">Blog-1: What is Cors?</h1>
          <div className="pt-4">
            <p className="text-start">
              <b>Cross-Origin Resource</b> Sharing (CORS) is an HTTP-header
              based mechanism that allows a server to indicate any origins
              (domain, scheme, or port) other than its own from which a browser
              should permit loading resources. CORS also relies on a mechanism
              by which browsers make a "preflight" request to the server hosting
              the cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
              <br></br>
              <br></br>
              An example of a cross-origin request: the front-end JavaScript
              code served from https://domain-a.com uses XMLHttpRequest to make
              a request for https://domain-b.com/data.json.
              <br></br>
              <br></br>
              For security reasons, browsers restrict cross-origin HTTP requests
              initiated from scripts. For example, XMLHttpRequest and the Fetch
              API follow the same-origin policy. This means that a web
              application using those APIs can only request resources from the
              same origin the application was loaded from unless the response
              from other origins includes the right CORS headers.
            </p>
          </div>
        </div>
      </div>

      <div className="container row mx-auto rounded border mt-5 p-3 mb-4">
        <div className="col-12">
          <h1 className="ff-poppins fw-bolder">
            Blog-2: Why you are using firebase?
          </h1>
          <div className="pt-4">
            <p className="text-start">
              <b>Google Firebase</b> is an application development platform that
              allows developers to create iOS, Android, and Web apps. Here's why
              I am use firebase!<br></br>
              <br></br>
              Indeed, Firebase is a less technical and time-saving alternative
              to writing full-fledged backend code for dynamic apps. You might
              also want to consider leveraging this tool if you eventually wish
              to host and manage your app in the cloud. Being serverless,
              Firebase removes the need to worry about the technicalities of
              cloud server configuration.<br></br>
              As a Google Cloud service, it also gives you access to other
              Google products and features, like Google Drive and Sheets. For
              instance, you can import dummy data from Google Sheets and use it
              temporarily to serve your app.<br></br>
              <br></br>
              With Firebase, it's pretty simple to connect and use built-in
              third-party authentication providers, including Google, Facebook,
              Twitter, among others. And if you want to use a pre-built
              authentication UI, you have it at your disposal as well.
              <br></br>
              <br></br>
              All of these can save you a significant amount of development
              cost, as you don't need to pay as high as developing from scratch.
              Firebase pricing is equally flexible. Although there are
              pay-as-you-go services, you can start on a free plan and use
              primary features if your app is still at its prime.<br></br>
              Firebase is a good choice if you want to deploy a working product
              on the cloud rapidly. Plus, as mentioned, you might want to try it
              out if you need a backend but don't have a backend development
              background.
            </p>
          </div>
        </div>
      </div>

      <div className="container row mx-auto rounded border mt-5 p-3 mb-4">
        <div className="col-12">
          <h1 className="ff-poppins fw-bolder">
            Blog-3: How does the private route work?
          </h1>
          <div className="pt-4">
            <p className="text-start">
              The <b>Private Route</b> component is similar to the public route,
              the only change is that redirect URL and authenticate condition.
              If the user is not authenticated he will be redirected to the
              login page and the user can only access the authenticated routes
              If he is authenticated<br></br>
              <br></br>
              Private Routes in React Router (also called Protected Routes)
              require a user being authorized to visit a route (read: page). So
              if a user is not authorized for a specific page, they cannot
              access it. The most common example is authentication in a React
              application where a user can only access the protected pages when
              they are authorized (which means in this case being
              authenticated). Authorization goes beyond authentication though.
              For example, a user can also have roles and permissions which give
              a user access to specific areas of the application.
            </p>
          </div>
        </div>
      </div>

      <div className="container row mx-auto rounded border mt-5 p-3 mb-4">
        <div className="col-12">
          <h1 className="ff-poppins fw-bolder">
            Blog-4: What is Node? How does Node work?
          </h1>
          <div className="">
            <div className="text-start pt-4">
              <h4>What is Node?</h4>A node is a basic unit of a data structure,
              such as a linked list or tree data structure. Nodes contain data
              and also may link to other nodes. Links between nodes are often
              implemented by pointers.<br></br>
              <br></br>
              <h4>How does node work?</h4>
              Node.js is an open-source backend javascript runtime environment.
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node.js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.<br></br>
              <br></br>
              Working of Node.js: Node.js accepts the request from the clients
              and sends the response, while working with the request node.js
              handles them with a single thread. To operate I/O operations or
              requests node.js use the concept of threads. Thread is a sequence
              of instructions that the server needs to perform. It runs parallel
              on the server to provide the information to multiple clients.
              Node.js is an event loop single-threaded language. It can handle
              concurrent requests with a single thread without blocking it for
              one request.<br></br>
              <br></br>
              Node.js basically works on two concept<br></br>
              <ol>
                <li>Asynchronous</li>
                <li>Non-blocking I/O</li>
              </ol>
              <b>Non-blocking I/o:</b> Non-blocking i/o means working with
              multiple requests without blocking the thread for a single
              request. I/O basically interacts with external systems such as
              files, databases. Node.js is not used for CPU-intensive work means
              for calculations, video processing because a single thread cannot
              handle the CPU works.<br></br>
              <br></br>
              <b>Asynchronous:</b> Asynchronous is executing a callback
              function. The moment we get the response from the other server or
              database it will execute a callback function. Callback functions
              are called as soon as some work is finished and this is because
              the node.js uses an event-driven architecture. The single thread
              doesn’t work with the request instead it sends the request to
              another system which resolves the request and it is accessible for
              another request. To implement the concept of the system to handle
              the request node.js uses the concept of Libuv.<br></br>
              Libuv is an open-source library built-in C. It has a strong focus
              on asynchronous and I/O, this gives node access to the underlying
              computer operating system, file system, and networking.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
