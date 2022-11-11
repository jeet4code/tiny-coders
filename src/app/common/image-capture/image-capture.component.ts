import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'image-capture',
  templateUrl: './image-capture.component.html',
  styleUrls: ['./image-capture.component.scss'],
})
export class ImageCaptureComponent implements AfterViewInit, OnDestroy {
  @ViewChild('video') video?: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas?: ElementRef<HTMLCanvasElement>;
  private imageData?: string;
  videoStream?: MediaStream;
  scanning = false;
  imageCaptured = false;
  uploadedImage?: any;

  ngAfterViewInit() {
    this.startCamera();
  }

  async startCamera() {
    if (!this.video?.nativeElement) return;
    this.videoStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    this.video.nativeElement.srcObject = this.videoStream;
  }

  takeImage() {
    this.uploadedImage = null;
    if (this.imageCaptured) {
      this.resetCamera();
      return;
    }

    this.imageCaptured = true;

    if (!this.canvas?.nativeElement || !this.video?.nativeElement) return;

    const video = this.video.nativeElement;
    const canvas = this.canvas.nativeElement;
    this.renderImageToCanvas(video);
  }

  private renderImageToCanvas(source: CanvasImageSource) {
    if (!this.canvas?.nativeElement) return;
    const canvas = this.canvas.nativeElement;
    const context = canvas.getContext('2d');

    if (!context) return;

    context.drawImage(source, 0, 0, canvas.width, canvas.height);
    this.stopCamera();
    this.setImageData(canvas.toDataURL('image/jpeg'));
  }

  resetCamera() {
    this.imageCaptured = false;
    this.startCamera();
  }

  stopCamera() {
    this.videoStream?.getTracks().forEach(function (track) {
      track.stop();
    });
  }

  processFile(evt: HTMLInputElement) {
    const file: File = evt.files?.[0]!;
    const reader = new FileReader();

    reader.addEventListener('load', (event: ProgressEvent) => {
      const imageData = (event.target as FileReader).result as string;
      this.uploadedImage = imageData;
      this.setImageData(imageData);
    });

    reader.readAsDataURL(file);
  }

  setImageData(data: string) {
    this.imageData = data;
  }

  uploadImage() {
    console.log(this.imageData);
    this.scanning = true;
    //this.scanning = true;
  }

  ngOnDestroy(): void {
    this.stopCamera();
  }
}
