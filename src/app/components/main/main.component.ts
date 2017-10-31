import {Component, HostListener, OnInit} from '@angular/core';
import {TweenMax, Power2, Power1, TimelineLite, TimelineMax, TweenLite, Elastic, Draggable} from 'gsap';
import * as ScrollMagic from 'scrollmagic';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  block = document.getElementsByClassName ('block');
  first = document.getElementsByClassName('first');
  third = document.getElementsByClassName('third');
  text = document.getElementsByClassName('text');
  logoSelecto = document.getElementsByClassName('logoSelecto');
  controller = new ScrollMagic.Controller();
  scene = new ScrollMagic.Scene;



  constructor() { }


  ngOnInit() {

    const animation0 = TweenLite.from(this.first, 1.5, {width: '0%', height: '0', ease: Power1.easeOut});
    const el = document.querySelector('[data-start-menu]');

    if (el) {

      const newAnimationPhotoScene = new ScrollMagic.Scene({
        triggerElement: '[data-start-menu]',
        triggerHook: 0,
        offset: 0,
        reverse: true
      }).setTween(animation0).addTo(this.controller);
    }


    // const animation0 = TweenLite.from(this.first, 1.5, {width: '0%', height: '0', ease: Power1.easeOut});



  }

}
