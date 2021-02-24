import Head from "next/head";
import { Profile } from "../components/Profile";

import { ExperienceBar } from "../components/ExperienceBar";

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div></div>
      </section>
    </div>
  );
}
