import { Component } from '@angular/core';
import { LabSeqService } from './services/labseq.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private service: LabSeqService) { }

  value: String | undefined;
  message = "";

  ngOnInit(): void {
  }

  getValueFromSequence(input: string): void {

    let messageElement = document.getElementById('messageElement');
    messageElement?.removeAttribute("class");

    var index = Number.parseInt(input);

    if (index < 0) {
      messageElement?.classList.add("invalid");
      this.message = "The index must be a non-negative number.";
      this.value = undefined;
    }

    else {
      this.service.getValueFromSequence(index).subscribe(value => {
        this.value = value;

        if(this.value === undefined) { 
          messageElement?.classList.add("invalid");
          this.message = "Error with the API."
        } 

        else {
          messageElement?.classList.add("valid");
          this.message = "The value was calculated with success.";
        }
        
      });
    }
  }
  
}
