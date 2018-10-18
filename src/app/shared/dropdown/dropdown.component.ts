import { Component, OnInit, Input } from '@angular/core';
import {MatchListModel, MatchModel} from '../model/match-list-model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() _modelField: string;
  @Input() _model: MatchListModel;
  @Input() _labelField: string;
  @Input() _idField: string;
  @Input() _list: any[];


  constructor() {

  }

  ngOnInit() {
  }

  btnClick(selectedOption:any){
    this.model.matchName = selectedOption.matchName;
    this.model.matchId = selectedOption.matchId;
  }

  @Input()
  set model(model: MatchModel) {
    this._model = model;
  }

  get model(): MatchModel {
    return this._model;
  }

  @Input()
  set labelField(labelField: string) {
    this._labelField = labelField;
  }

  get labelField(): string {
    return this._labelField;
  }


  @Input()
  set modelField(modelField: string) {
    this._modelField = modelField  ;
  }

  get modelField (): string {
    return this._modelField ;
  }

  @Input()
  set idField(idField: string) {
    this._idField = idField  ;
  }

  get idField (): string {
    return this._idField ;
  }

  @Input()
  set list(list: any[]) {
    this._list = list  ;
  }

  get list (): any[] {
    return this._list ;
  }
}
