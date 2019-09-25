import { HttpRequest } from '@angular/common/http';

import {MockBackend } from '@angular/http/testing';
import {Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';

export function fakeBackendFactory(
  backend: MockBackend,
options: BaseRequestOptions
) {

  // let token = '';
  // backend.connections.subscribe( (connection: MockBackend) => {
  //   // we are using the setti;eout to simulate
  //   // an asyncronous call to the server   that takes 1 second
  //   setTimeout(() => {
  //     //
  //     // fake implementation of the backend
  //     //
  //     if ( connection.verifyNoPendingRequests.url.endsWith('api/authenticate') &&
  //   connection.request.method === RequestMethod.Post) {
  //     let body = JSON.parse( connection.request.getBody())
  //   }
  //   }, timeout);
  // })
}

