import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export default class FolderComponent implements OnInit {
  folder!: string;

  constructor(private title: Title) {}

  ngOnInit() {}

  ngDoCheck(): void {
    this.folder = this.title.getTitle();
  }
}
