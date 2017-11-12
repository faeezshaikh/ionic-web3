import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Web3 from 'web3';


@Injectable()
export class Web3ServiceProvider {

  web3: any;
  Coursetro: any;

  constructor() {
    console.log('Hello Web3ServiceProvider Provider');

    if (typeof this.web3 !== 'undefined') {
      this.web3 = new Web3(this.web3.currentProvider);
    } else {
      this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }


        // Step 2: Set default account (address)
        this.web3.eth.defaultAccount = this.web3.eth.accounts[0];
        // Step 3: Get Interface to the contact - ABI from remix
        var CoursetroContract = this.web3.eth.contract([{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getInstructor","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes16"},{"name":"","type":"bytes16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getInstructors","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"instructorAccts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"countInstructors","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_age","type":"uint256"},{"name":"_fName","type":"bytes16"},{"name":"_lName","type":"bytes16"}],"name":"setInstructor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"fName","type":"bytes16"},{"indexed":false,"name":"lName","type":"bytes16"},{"indexed":false,"name":"age","type":"uint256"}],"name":"instructorInfo","type":"event"}]);
        // Step 4: Get Contract instance at the address from remix
        this.Coursetro = CoursetroContract.at('0x71d5ea9016f5a0d6f26f098919d7b9fc00dba3d6');
        console.log("Got the smart contract ==> " , this.Coursetro);

      
  }


  get() {
    return this.web3;
  }

  getSmartContract() {
    return this.Coursetro;
  }

}
