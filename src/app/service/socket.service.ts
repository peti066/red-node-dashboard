import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(
    private socket: Socket,
  ) { }

  // emit event
	fetchData() {
		this.socket.emit('fetchData');
	}

	// listen event
	onFetchData() {
		return this.socket.fromEvent('fetchData');
	}

}
