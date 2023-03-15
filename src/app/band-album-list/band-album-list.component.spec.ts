import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandAlbumListComponent } from './band-album-list.component';

describe('BandAlbumListComponent', () => {
  let component: BandAlbumListComponent;
  let fixture: ComponentFixture<BandAlbumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandAlbumListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandAlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
