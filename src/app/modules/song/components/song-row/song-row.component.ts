import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nx-song-row',
  templateUrl: './song-row.component.html',
  styleUrls: ['./song-row.component.scss']
})
export class SongRowComponent implements OnInit {

  private _song: any;
  public get song(): any {
    return this._song;
  }
  @Input() public set song(value: any) {
    this._song = value;
  }
  constructor() { }

  ngOnInit() {
  }

}
