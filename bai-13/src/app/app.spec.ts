import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { App } from './app';
import { AppModule } from './app-module';

describe('Bài 13: danh sách và chi tiết sản phẩm', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  });

  it('hiển thị 3 sản phẩm; Details mở đúng sản phẩm; Go Back về danh sách', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    fixture.detectChanges();
    await router.navigateByUrl('/');
    await fixture.whenStable();
    fixture.detectChanges();
    for (const [index, id, name, price] of [
      [0, 'p1', 'Coca', '100'], [1, 'p2', 'Pepsi', '300'], [2, 'p3', 'Sting', '200']
    ] as const) {
      expect((fixture.nativeElement as HTMLElement).querySelectorAll('tbody').length).toBe(3);
      const links = (fixture.nativeElement as HTMLElement).querySelectorAll('a');
      (links[index] as HTMLElement).click();
      await fixture.whenStable();
      fixture.detectChanges();
      expect(router.url).toBe('/service-product-image-event/' + id);
      const detail = (fixture.nativeElement as HTMLElement);
      expect(detail.querySelector('app-service-product-image-event')).toBeNull();
      expect(detail.textContent).toContain(id);
      expect(detail.textContent).toContain(name);
      expect(detail.textContent).toContain(price);
      expect(detail.querySelector('img')!.getAttribute('src')).toBe(`assets/h${index + 1}.png`);
      detail.querySelector('button')!.click();
      await fixture.whenStable();
      fixture.detectChanges();
      expect(router.url).toBe('/service-product-image-event');
    }
  });

  it('mở trực tiếp URL chi tiết và xử lý mã không tồn tại', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    fixture.detectChanges();
    await router.navigateByUrl('/service-product-image-event/p2');
    await fixture.whenStable();
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Pepsi');
    await router.navigateByUrl('/service-product-image-event/unknown');
    await fixture.whenStable();
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Không tìm thấy sản phẩm.');
    expect((fixture.nativeElement as HTMLElement).querySelector('button')!.textContent).toContain('Go Back');
  });
});
