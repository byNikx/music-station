import { Directive, ElementRef, OnInit, OnDestroy, HostBinding, Renderer2, AfterContentInit, AfterViewInit, ViewContainerRef } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';


@Directive({
  selector: '[nxContainer]'
})
export class ContainerDirective implements OnInit, OnDestroy{
  
  private _containerClass:string[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  private _element: HTMLElement;
  public get element(): HTMLElement {
    return this._element;
  }
  public set element(value: HTMLElement) {
    this._element = value;
  }

  private _mediaObserverSubscription: Subscription;
  
  constructor(
    private mediaObserver: MediaObserver,
    private renderer:Renderer2,
    element: ElementRef,
    private vcr: ViewContainerRef
    ) { 
      
      this.element = element.nativeElement;
    }


    ngOnInit(): void {  
      this._mediaObserverSubscription = this.mediaObserver.media$.subscribe((change: MediaChange)=>{
        this.element.classList.remove(...this._containerClass);
        this.element.classList.add('container', change.mqAlias);
      });
    }

    ngOnDestroy(): void {
      this.element.classList.remove(...this._containerClass, 'conainer');
      this._mediaObserverSubscription.unsubscribe();
    }

}
