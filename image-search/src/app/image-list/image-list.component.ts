import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: any[];
  imagesFound:boolean = false;

  constructor(private _imageServie:ImageService) { 

  }


  searchImages(query:string){    
    return this._imageServie.getImage(query).subscribe(
      data => this.handleSucces(data),
      error => this.handleError(error),
      () => console.log("Request complete")!
    );
}

  handleSucces(data){
    this.imagesFound = true;
    console.log(data.hits);
    this.images = data.hits;
  }

  handleError(error){
    console.log(error);
  }

  ngOnInit() {
  }

}
