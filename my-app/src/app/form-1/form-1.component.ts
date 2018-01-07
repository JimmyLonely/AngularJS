import { Component } from "@angular/core";
import { Hero } from '../model/hero';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormArray } from "@angular/forms/src/model";

@Component({
  templateUrl: './form-1.component.html',
  styleUrls: ['./form-1.component.css']
})

export class Form1Component {
  heroForm: FormGroup;
  hero = new Hero('12', 'jimmy', '18', [{
    street: 'street1',
    city: 'city1',
    state: 'state1',
    zip: 'zip1'
  }]);

  nameChangeLog = [];

  constructor (
    private formBuilder:FormBuilder
  ){
    this.createForm();
    this.heroForm.setValue({
      name: this.hero.name,
      age: this.hero.age,
      addresses: []
    });
    this.setAddresses(this.hero.address);

    this.loadNameChangeLog();
  }

  createForm(): any {
    this.heroForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      age: '',
      addresses: this.formBuilder.array([])
    })
  }

  setAddresses(addresses) {
    const addressesFormGroups = [];
    for (const address of addresses) {
      addressesFormGroups.push(this.formBuilder.group(address));
    }

    const AddressesFormArray = this.formBuilder.array(addressesFormGroups);
    this.heroForm.setControl('addresses', AddressesFormArray);
  }

  addAddress() {
    const address = {
      street: 'street3',
      city: 'city3',
      state: 'state3',
      zip: 'zip3'
    }
    this.addresses1.push(this.formBuilder.group(address));
  }

  removeAddress(i) {
    this.addresses1.removeAt(i);
  }

  get addresses1() {
    return this.heroForm.get('addresses') as FormArray;
  }

  loadNameChangeLog() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach((value) => {
      this.nameChangeLog.push(value);
      window.console.log(JSON.stringify(this.nameChangeLog));
    });
  }

  reset() {
    this.heroForm.reset({
      name: this.hero.name,
      age: this.hero.age,
      addresses: []
    });

    // this.heroForm.setValue({
    //   name: this.hero.name,
    //   age: this.hero.age,
    //   addresses: []
    // });
    this.setAddresses(this.hero.address);
  }

  save() {
    this.hero = this.prePareHero();

    this.heroForm.reset({
      name: this.hero.name,
      age: this.hero.age,
      addresses: []
    });

    // this.heroForm.setValue({
    //   name: this.hero.name,
    //   age: this.hero.age,
    //   addresses: []
    // });
    this.setAddresses(this.hero.address);
  }

  prePareHero() {
    const formModel = this.heroForm.value;

    const addresses = formModel.addresses.map((address) => {
      return Object.assign({}, address);
    })

    const saveHero= {
      id: this.hero.id,
      name: formModel.name,
      age: formModel.age,
      address: addresses
    };

    return saveHero;
  }
}