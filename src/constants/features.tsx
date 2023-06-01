import Search from "@/assets/Icons/Search";

import Trophy from "@/assets/Icons/Trophy";

import Users from "@/assets/Icons/Users";
import { Cards } from "@/components/Shared/Interfaces/cards.interface";

import teammates from "@/assets/Images/Functionality/Teammates/Teamates.png";
import teammatesFilters from "@/assets/Images/Functionality/Teammates/Filters.png";
import chat from "@/assets/Images/Functionality/Teammates/Chat.png";

import teams from "@/assets/Images/Functionality/Teams/Teams.png";
import teamsFilters from "@/assets/Images/Functionality/Teams/Filters.png";
import invite from "@/assets/Images/Functionality/Teams/Invite.png";

import tournaments from "@/assets/Images/Functionality/Tournaments/Tournaments.png";
import tournamentsFilters from "@/assets/Images/Functionality/Tournaments/Filters.png";
import rewards from "@/assets/Images/Functionality/Tournaments/Rewards.png";

export const features = [
  {
    icon: <Search />,
    name: "Teammates",
  },
  {
    icon: <Users />,
    name: "Teams",
  },
  {
    icon: <Trophy />,
    name: "Tournaments",
  },
];

export const featuresData: Array<Cards> = [
  {
    image: teammates,
    cards: [
      {
        header: "Search for Teammates",
        description:
          "Our intuitive search filters make it easy to find the right teammate based on a set of criteria.",
        cardImage: teammatesFilters,
      },
      {
        header: "Connection via Chat",
        description:
          "Instantly connect with developers worldwide for collaboration through our chat function.",
        cardImage: chat,
      },
    ],
  },
  {
    image: teams,
    cards: [
      {
        header: "Join a Team",
        description:
          "You can easily find like-minded developers and become part of a team to collaborate.",
        cardImage: teamsFilters,
      },
      {
        header: "Create own Team",
        description:
          "You can also create your own team to work on specific projects or participates in tournaments.",
        cardImage: invite,
      },
    ],
  },
  {
    image: tournaments,
    cards: [
      {
        header: "Coding Tournaments",
        description:
          "Coding duels and hackathons are the perfect way to hone your skills in a fun and competitive environment.",
        cardImage: tournamentsFilters,
      },
      {
        header: "Cryptocurrency rewards",
        description:
          "Compete in tournaments and win cryptocurrency rewards for showcasing your coding skills.",
        cardImage: rewards,
      },
    ],
  },
];
