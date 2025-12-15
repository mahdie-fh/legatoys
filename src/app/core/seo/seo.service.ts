import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private titleService = inject(Title);
  private meta = inject(Meta);
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  setSeo(data: SeoData) {
    this.titleService.setTitle(data.title);

    this.meta.updateTag({
      name: 'description',
      content: data.description,
    });

    if (data.keywords) {
      this.meta.updateTag({
        name: 'keywords',
        content: data.keywords,
      });
    }

    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    if (data.canonical) {
      this.setCanonical(data.canonical);
    }
  }

  private setCanonical(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");

      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }

      link.setAttribute('href', url);
    }
  }
}
