import Card from "../components/card.js";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export default function Home({pinnedItems}) {
  console.log(pinnedItems);
  return (
    <div className=" flex-grow bg-back_svg bg-contain bg-no-repeat bg-right-bottom">
      <div className="font-rubik-MonoOne text-base grid place-content-center w-full">
        <div className=" mb-16 text-lg">
          <p>HI! I&apos;m Johnny! I&apos;m a UCR Computer Science<br></br>Student with a passion for Design and Code.</p>
        </div>
        <div className=" mb-20">
          <h1>Current Projects</h1>
          <div className="py-4 grid grid-cols-2 gap-x-8 place-content-center">
            <Card name="Task Scheduler" text ="Terminal-Based C++ Task Manager created for CS100 Final Project." href="https://github.com/Drabblesaur/CS100_Task_Scheduler"></Card>
            <Card name="UCR Map Project" text ="React Native map application for UCR students." href="https://github.com/Drabblesaur/CS178AProject"></Card>
          </div>
        </div>
      </div>
    </div>
  )
}

