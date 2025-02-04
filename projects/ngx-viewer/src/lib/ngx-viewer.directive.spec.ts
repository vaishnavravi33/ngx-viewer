import { NgxViewerDirective } from './ngx-viewer.directive';
import { ElementRef } from '@angular/core';

describe('NgxViewerDirective', () => {
  it('should create an instance', () => {
    const mockElementRef: ElementRef = new ElementRef(document.createElement('div'));
    const directive = new NgxViewerDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
