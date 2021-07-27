import { Component } from '@angular/core';
import { UsersService } from './users.service';
import * as $ from "jquery";
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  play: string = "Play";
  selectedVideo: any;
  playableSelected: boolean = false;

  constructor(private postData: UsersService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.postData.getPosts().subscribe((result) => {
      console.log(result);
      this.data = result;
    })

  }

  playVideoInEmbedFrame(videoURL: string) {
    this.selectedVideo = this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);
    this.playableSelected = true;
  }

}
