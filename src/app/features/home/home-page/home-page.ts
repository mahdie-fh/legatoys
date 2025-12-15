import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SeoService } from '../../../core/seo/seo.service';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  private seo = inject(SeoService);

  constructor() {
    this.seo.setSeo({
      title: 'لگاتویز | خرید لگو، اسباب‌بازی لگویی و هدیه‌های خلاقانه',
      description:
        'لگاتویز فروشگاه تخصصی اسباب‌بازی لگویی، ست‌های ساختنی خلاقانه، لگو کودکان و بزرگسالان و هدیه‌های خاص.',
      keywords: 'لگو، اسباب‌بازی لگویی، خرید لگو، هدیه لگویی، لگو کودکان، لگو بزرگسالان',
      canonical: 'https://legatoys.ir/',
    });
    console.log('sgnl');
  }
}
