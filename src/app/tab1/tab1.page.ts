import { BackendService } from './../services/backend.service';
import { Component } from '@angular/core';
import { PrintService } from '../services/print.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  bluetoothList: any=[];
  selectedPrinter: any;
  testText: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  mode: Boolean;
  constructor(private print: PrintService,
    private backEnd: BackendService) {
    this.listPrinter();
  }
    //This will list all of your bluetooth devices
  listPrinter() {
    this.print.searchBluetoothPrinter().then(
      (resp=>{
        //List of bluetooth device list
        this.bluetoothList=resp;
      })
    );
  }
  //This will store selected bluetooth device mac address
  selectPrinter(macAddress)
  {
    //Selected printer macAddress stored here
    this.selectedPrinter=macAddress;
  }

  //This will print
  printStuff()
  {
    //The text that you want to print
    if (this.mode) {
      this.backEnd.getReceiptText().subscribe((res) => {
        console.log('This is receipt text ', res.text);
        this.testText = res.text;
      });
    }
    this.print.sendToBluetoothPrinter(this.selectedPrinter, this.testText);

  }

}
