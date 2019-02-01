import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime.service';
import { MatDialog } from '@angular/material';
import { AnimeDetailsComponent } from '../anime-details/anime-details.component';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {

  //TODO: add interface
  animes: any = [];

  constructor(
    public animeService: AnimeService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes.results;
    });

  }

  public viewAnimeDetails(anime) {
    this.dialog.open(AnimeDetailsComponent, {data: anime});
  } 

}
