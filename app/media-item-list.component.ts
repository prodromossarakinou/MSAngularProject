import { Component } from '@angular/core';
import { MediaItemService } from './media-item.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  constructor(private mediaItemService: MediaItemService,
    private activatedRoute: ActivatedRoute){
  
  }
  medium='';
  mediaItems = [] ;
  ngOnInit(){

    this.activatedRoute.params.subscribe(params => {
      let medium =params['medium'];
      if(medium.toLowerCase()=== 'all'){
        medium='';
      }
      this.getMediaItems(medium);
    });
    
  }
  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem).subscribe(()=>{
      this.getMediaItems(this.medium);
    });
   }
   getMediaItems(medium){
     this.medium = medium;
      this.mediaItemService.get(medium).subscribe(mediaItems=> {
      this.mediaItems =mediaItems;
    });
   }
  
}
