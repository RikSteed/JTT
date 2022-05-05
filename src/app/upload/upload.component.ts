import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  value: any;
  selectedFile: any;
  screenWidth!: number;
  screenHeight!: number;

  ngOnInit(): void {
    this.screenHeight = window.innerHeight;
  }

  onFileUpload(_event: any) {
    this.selectedFile = _event.target.files[0];
    console.log(this.selectedFile);
    const reader = new FileReader();
    reader.readAsText(this.selectedFile, 'UTF-8');
    reader.onload = () => {
      console.log(JSON.parse(reader.result as string));
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenHeight = window.innerHeight;
    console.log(this.screenHeight);
  }
}
