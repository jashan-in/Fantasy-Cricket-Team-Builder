import type { Player } from "../types/Player";

export class TeamService {
  static MAX_PLAYERS = 11;
  static MAX_CREDITS = 100;

  static addPlayer(team: Player[], player: Player): Player[] {
    const exists = team.some((p) => p.id === player.id);
    if (exists) return team;

    if (team.length >= TeamService.MAX_PLAYERS) return team;

    const nextCredits = TeamService.getTotalCredits(team) + player.credit;
    if (nextCredits > TeamService.MAX_CREDITS) return team;

    return [...team, player];
  }

  static removePlayer(team: Player[], playerId: string): Player[] {
    return team.filter((p) => p.id !== playerId);
  }

  static getTotalCredits(team: Player[]): number {
    return team.reduce((sum, player) => sum + player.credit, 0);
  }
}