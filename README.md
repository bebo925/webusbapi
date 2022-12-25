# About

Here is an example app for getting started with [WEBUSB API](https://developer.mozilla.org/en-US/docs/Web/API/WebUSB_API). It is using a Node library for creating basic ESC/POS commands to send to a compatible thermal printer.

The WebUSB API is a web standard that allows web applications to access and interact with USB devices. It allows web applications to communicate with USB devices over a USB connection and enables web applications to access the capabilities of USB devices. This can include reading and writing data to the device, configuring the device's settings, and receiving notifications from the device.

To use the WebUSB API, a web application must first request permission from the user to access the USB device. If the user grants permission, the web application can then establish a connection to the device and begin interacting with it. The WebUSB API is supported by modern web browsers and is designed to be easy to use and flexible, allowing developers to create web applications that can interact with a wide range of USB devices.

# Getting Started

You will need to create a self signed cert to use with the Express server to run https.

```
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```

> Make sure to add and trust the cert in your keychain

## Running the server

```
node index.js
```
