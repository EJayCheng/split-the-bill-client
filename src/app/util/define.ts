export interface Member {
  id: number;
  name: string;
  thumbnail?: string;
  lineProfileId: string;
  groupId?: number;
  group?: Group;
  events?: Event[];
}

export interface Group {
  id: number;
  name: string;
  memberIds?: number[];
  members: Member[];
}

export interface Event {
  id: number;
  name: string;
  date: string;
  ownerId?: number;
}
