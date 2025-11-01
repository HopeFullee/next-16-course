import { ExploreBtn } from "@/components/ui";
import { EventCard } from "@/components/ui";
import { EVENTS } from "@/lib/constant";

const Main = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Events You Can't Miss
      </h1>
      <p className="mt-5 text-center">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {EVENTS.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Main;
