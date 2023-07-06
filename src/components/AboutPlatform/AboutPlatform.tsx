import HeaderText from "../Shared/HeaderText/HeaderText";
import {
  GridContainer,
  FourCardContainer,
  DoubleCardContainer,
  CardContainer,
  LeftColumnContainer,
  RightColumnContainer,
  RegularTextWrapper,
  ImageContainer,
  AboutPlatformSection,
  HackathonCardContainer,
  InfoContainer,
  Description,
  MentorshipImage,
  TeamImage,
  ProjectsImage,
  HackathonsImage,
  CodingImage,
} from "./AboutPlatform.styles";
import GradientText from "@/components/Shared/GradientText/GradientText";
import TeamCollaboration from "@/assets/AboutPlatformInfo/TeamCollaboration.png";
import Mentorship from "@/assets/AboutPlatformInfo/Mentorship.png";
import Projects from "@/assets/AboutPlatformInfo/Projects.png";
import CodingBattles from "@/assets/AboutPlatformInfo/CodingBattles.png";
import Hackathons from "@/assets/AboutPlatformInfo/Hackathons.png";

const AboutPlatform = () => {
  return (
    <AboutPlatformSection>
      <GradientText text={"About Platform"} textType="huge" />
      <RegularTextWrapper>
        <HeaderText text="Team8ights offers a comprehensive solution by providing a platform where students and professionals can gain practical programming experience through a variety of real-world-oriented activities. " />
      </RegularTextWrapper>

      <GridContainer>
        <FourCardContainer>
          <LeftColumnContainer>
            <CardContainer>
              <InfoContainer>
                <GradientText text={"Team Collaboration"} textType="medium" />
                <Description>
                  Utilize our platform to connect with like-minded individuals
                  for collaborative work. Form teams, engage in group projects,
                  and learn from one another in a supportive environment.
                </Description>
              </InfoContainer>
            </CardContainer>
            <ImageContainer>
              <MentorshipImage
                src={Mentorship}
                alt="Mentorship"
                loading="lazy"
              />
            </ImageContainer>
          </LeftColumnContainer>

          <RightColumnContainer>
            <ImageContainer>
              <TeamImage src={TeamCollaboration} alt="Team" loading="lazy" />
            </ImageContainer>
            <CardContainer>
              <InfoContainer>
                <GradientText text={"Mentorship"} textType="medium" />
                <Description>
                  Benefit from our mentorship program, connecting newcomers with
                  experienced mentors in the field. Receive personalized
                  guidance, support, and feedback to help you excel in your
                  coding journey.
                </Description>
              </InfoContainer>
            </CardContainer>
          </RightColumnContainer>
        </FourCardContainer>

        <DoubleCardContainer>
          <CardContainer>
            <InfoContainer>
              <GradientText text={"Projects"} textType="medium" />
              <Description>
                Gain access to our vast library of projects catering to all
                levels of experience. Work on real-world applications, improve
                your practical skills, and build an impressive portfolio.
              </Description>
            </InfoContainer>
          </CardContainer>
          <ImageContainer>
            <ProjectsImage
              src={Projects}
              alt="Projects"
              loading="lazy"
            ></ProjectsImage>
          </ImageContainer>
        </DoubleCardContainer>

        <HackathonCardContainer>
          <ImageContainer>
            <HackathonsImage
              src={Hackathons}
              alt="Hackathons"
              loading="lazy"
            ></HackathonsImage>
          </ImageContainer>
          <CardContainer>
            <InfoContainer>
              <GradientText text={"Hackathons"} textType="medium" />
              <Description>
                Participate in dynamic hackathons designed to challenge and
                expand your coding abilities. Compete with peers, learn new
                skills, and win money prizes.
              </Description>
            </InfoContainer>
          </CardContainer>
        </HackathonCardContainer>

        <DoubleCardContainer>
          <CardContainer>
            <InfoContainer>
              <GradientText text={"Coding Battles"} textType="medium" />
              <Description>
                Engage in fast-paced coding battles against fellow coders. Solve
                problems under timed conditions and strive to climb the
                leaderboard.
              </Description>
            </InfoContainer>
          </CardContainer>
          <ImageContainer>
            <CodingImage
              src={CodingBattles}
              alt="Coding Battles"
              loading="lazy"
            ></CodingImage>
          </ImageContainer>
        </DoubleCardContainer>
      </GridContainer>
    </AboutPlatformSection>
  );
};

export default AboutPlatform;
