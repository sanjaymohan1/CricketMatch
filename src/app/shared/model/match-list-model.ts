export class MatchListModel {
  matchList: MatchModel[];
}

export class MatchModel {
  matchName: string;
  matchId: number;
  teams: Teams[];
}

export class Teams {
  teamName: string;
  teamId: number;
  teamScore: number;
  teamRunRate: number;
  teamPlayers: TeamPlayers[];
}

export class TeamPlayers {
  playerName: string;
  playerId: number;
  playerScore: number;
  playerStrikeRate: number;
  ballsFaced: TeamPlayers[];
  playerBattingStatus: string; // O - out N-Not out Y - yet to play
}
