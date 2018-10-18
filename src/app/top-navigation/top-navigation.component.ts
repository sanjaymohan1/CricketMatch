import { Component, OnInit , OnChanges} from '@angular/core';
import {MatchListModel, MatchModel} from '../shared/model/match-list-model';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
  matchListModel: MatchListModel;
  matchModel : MatchModel;

  list: any[];
  constructor() { }

  ngOnInit() {
  this.matchListModel = new MatchListModel();
    this.matchListModel.matchList = [];
  this.matchModel = new MatchModel();
  let model: MatchModel = new MatchModel();
  model.matchId = 1;
  model.matchName = 'CSK Vs MUB';
  this.matchListModel.matchList.push(model);
    model = new MatchModel();
  model.matchId = 2;
  model.matchName = 'HYD Vs BAN';
    this.matchListModel.matchList.push(model);
    model = new MatchModel();

  model.matchId = 3;
  model.matchName = 'KX1 Punjab Vs KKR';
    this.matchListModel.matchList.push(model);
  }
}
