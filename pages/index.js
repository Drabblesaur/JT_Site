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
    <div className=" flex-grow bg-back_svg  bg-contain bg-no-repeat bg-right">
      <div className="font-rubik-MonoOne text-base grid place-content-center w-full">
        <div className=" mb-16 text-lg">
          <p>HI! I&apos;m Johnny! I&apos;m a UCR Computer Science<br></br>Student with a passion for Design and Code.</p>
        </div>
        <div className=" mb-20">
          <h1>Current Projects</h1>
          <div className="py-4 grid grid-cols-2 gap-x-8 place-content-center">
            <Card name="Task Scheduler" text ="Terminal-Based C++ Task Manager created for CS100 Final Project."></Card>
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const {data} = await client.query({
    query: gql`
    {
      user(login: "Drabblesaur") {
        pinnedItems(first: 2) {
          totalCount
          edges {
            node {
              ... on Repository {
                id
                name
                description
                url
                languages(first: 5) {
                  edges {
                    node {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    `
  })

  const {user} = data;
  const pinnedItems = user.pinnedItems.edges.map(({node}) => node);
  return {
    props: {
      pinnedItems
    }
  }
}
