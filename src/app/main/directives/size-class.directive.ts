// import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";
//
// @Directive({ selector: "[plSizeClass]" })
// export class SizeClassDirective {
//   private static readonly XS = "xs";
//   private static readonly SM = "sm";
//   private static readonly MD = "md";
//   private static readonly LG = "lg";
//   private static readonly XL = "xl";
//
//   private currentClass: string;
//
//   constructor(
//     private renderer: Renderer2,
//     private host: ElementRef,
//     private windowRef: WindowRef
//   ) {
//     this.configureSizeClass();
//   }
//
//   @HostListener("window:resize", ["$event"])
//   configureSizeClass() {
//     const sizeClass = this.getSizeClass();
//
//     if (this.currentClass !== sizeClass) {
//       this.setSizeClass(sizeClass);
//     }
//   }
//
//   getSizeClass(): string {
//     const width = this.windowRef.nativeWindow.innerWidth;
//     if (width >= 1920) {
//       return SizeClassDirective.XL;
//     } else if (width >= 1280) {
//       return SizeClassDirective.LG;
//     } else if (width >= 960) {
//       return SizeClassDirective.MD;
//     } else if (width >= 600) {
//       return SizeClassDirective.SM;
//     } else {
//       return SizeClassDirective.XS;
//     }
//   }
//
//   setSizeClass(className: string) {
//     const el = this.host.nativeElement.closest("body");
//
//     this.renderer.removeClass(el, SizeClassDirective.XL);
//     this.renderer.removeClass(el, SizeClassDirective.LG);
//     this.renderer.removeClass(el, SizeClassDirective.MD);
//     this.renderer.removeClass(el, SizeClassDirective.SM);
//     this.renderer.removeClass(el, SizeClassDirective.XS);
//
//     this.renderer.addClass(el, className);
//   }
// }
