import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy  } from '@angular/core';

@Component({
  selector: 'image-capture',
  templateUrl: './image-capture.component.html',
  styleUrls: ['./image-capture.component.scss']
})
export class ImageCaptureComponent implements AfterViewInit, OnDestroy  {
 @ViewChild('video') video?: ElementRef<HTMLVideoElement>;
 @ViewChild('canvas') canvas?: ElementRef<HTMLCanvasElement>;
 step = 1;
 imageData: any; 
 videoStream?: MediaStream;
 scanning = false;

  ngAfterViewInit() {
    this.startCamera();
  }

  async startCamera() {
    if(!this.video?.nativeElement) return;
    this.videoStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    this.video.nativeElement.srcObject = this.videoStream;
  }

  takeImage() {
    if(this.scanning) {
      this.resetCamera();
      return;
    }
    if(!this.canvas?.nativeElement || !this.video?.nativeElement) return;
    
    const context = this.canvas.nativeElement.getContext('2d');
    
    if(!context) return;

    const video = this.video.nativeElement;
    const canvas = this.canvas.nativeElement;
    
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
   	this.imageData = canvas.toDataURL('image/jpeg');
    console.log(this.imageData);
    this.scanning = true;
    this.stopCamera();
  }

  resetCamera() {
    this.scanning = false;
    this.startCamera()
  }

  stopCamera() {
    this.videoStream?.getTracks().forEach(function(track) {
      track.stop();
    });
  }

  ngOnDestroy(): void {
    this.stopCamera();
  }
}