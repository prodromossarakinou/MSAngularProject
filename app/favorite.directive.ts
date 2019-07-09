import { Directive,HostBinding,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})

export class FavoriteDirective{

  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostListener('mouseenter') onMouseEneter(){
    this.hovering=true;
    
  }
  
  @HostListener('mouseleave') onMouseLeave(){
    this.hovering=false;
  }
  @HostListener('click') onClick() {
      if(this.isFavorite){
        this.isFavorite=false;
      }
      else if(!(this.isFavorite)){
        this.isFavorite = true;
      }
  }
  
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}
