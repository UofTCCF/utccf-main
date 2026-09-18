import MeetingInfo from "../meetingInfo/meetingInfo";
import PeopleList from "../peopleList/peopleList";
import CardSkeleton from "../cardSkeleton/cardSkeleton";

export default function Ministry({ ministry }) {
  return (
    <CardSkeleton name={ministry.name} visionUrl={ministry.visionUrl}>
      {ministry.meetingInfo && (
        <MeetingInfo meetingInfo={ministry.meetingInfo} />
      )}
      <PeopleList people={ministry.leaders} title="Leaders" />
    </CardSkeleton>
  );
}
