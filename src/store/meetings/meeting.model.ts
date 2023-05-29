export interface MeetingOfTheDay {
  morning10: string[];
  after14: string[];
  after16: string[];
}

export interface Meeting {
  currentMeeting?: MeetingOfTheDay;
}
