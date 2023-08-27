import { Component,OnInit } from '@angular/core';
import { SocketService } from 'src/app/service/socket.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	
	constructor(
		private socketService: SocketService 
	) { }

	ngOnInit(): void { 
            // here we can use socket events and listeners using socketService
	} 

}


