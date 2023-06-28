import {Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-bar4',
  templateUrl: './bar4.component.html',
  styleUrls: ['./bar4.component.scss']
})
export class Bar4Component implements OnInit {

  ngOnInit(): void {
    let form = $('.ui.form');
    $('.dropdown').dropdown({
      onChange: (value: string, text: string) => {
        console.log(form.form('get values'));
      }
    });
    $('.ui.checkbox').checkbox({
      onChange: function() {
        console.log(form.form('get values'));
      }
    });
  }
}
