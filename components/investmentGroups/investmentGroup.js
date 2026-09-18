import PeopleList from "../peopleList/peopleList";
import CardSkeleton from "../cardSkeleton/cardSkeleton";

export default function InvestmentGroup({ ig }) {
  const formattedName = `IG ${ig.number}`;

  return (
    <CardSkeleton name={formattedName} visionUrl={ig.visionUrl}>
      <PeopleList people={ig.leaders} title="Leaders" />
    </CardSkeleton>
  );
}
