import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Web3ServiceProvider } from '../../providers/web3-service/web3-service';
// import { TestProvider } from '../../providers/test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  web3Service: Web3ServiceProvider;
  smartContract: any;
  web3: any;

  blockHash: any;
  fName: string;
  lName: string;
  age: any;
  showSpinner: boolean = false;
  constructor(public navCtrl: NavController,public svc: Web3ServiceProvider) {
    this.web3Service = svc;
    this.foo();
  }

  foo () {
    this.smartContract = this.web3Service.getSmartContract();
    this.web3 = this.web3Service.get();


    var instructorEvent = this.smartContract.instructorInfo({},'latest');
    console.log('Getting infi...');
    
    instructorEvent.watch(function (err, result) {
            if (!err) {
                // this.blockHash = result.blockHash;
                // this.fName = this.web3.toAscii(result.args.fName);
                // this.lName = this.web3.toAscii(result.args.lName);
                // this.age = result.args.age;
                // console.log(result.blockHash);
                // console.log(this.fName + this.lName);
                
                    
            } else {
                console.log(err);
            }
    });
  }

  submit() {
    console.log('submit clicked');
    
    this.smartContract = this.web3Service.getSmartContract();
    this.smartContract.setInstructor(this.web3.eth.defaultAccount,32, "faeez", "shaikh", (err, res) => {
      if (err) 
        console.error(err);
});
  }

}
