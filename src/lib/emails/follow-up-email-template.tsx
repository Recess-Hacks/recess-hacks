import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from "@react-email/components"

interface FollowUpEmailTemplateProps {
  userFirstname: string
  devpostLink: string
  discordInviteLink: string
}

export const FollowUpEmailTemplate = ({
  userFirstname,
  devpostLink,
  discordInviteLink,
}: FollowUpEmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>Welcome to RecessHacks - Join Devpost & Discord!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={`https://recesshacks.org/logo.png`} width="50" height="50" alt="RecessHacks logo" style={logo} />
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Welcome to RecessHacks! 🎉 Now that your email is verified, here are the next steps to get you ready for the
          hackathon:
        </Text>
        <Text style={paragraph}>
          <strong>Join our Devpost:</strong> This is where you'll submit your project, find teammates, and access all
          hackathon resources.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={devpostLink}>
            Join Devpost
          </Button>
        </Section>
        <Text style={paragraph}>
          <strong>Join our Discord:</strong> Connect with other participants, get real-time updates, and ask questions
          to our team.
        </Text>
        <Section style={btnContainer}>
          <Button style={discordButton} href={discordInviteLink}>
            Join Discord
          </Button>
        </Section>
        <Text style={paragraph}>
          What's next:
          <br />• Complete your Devpost profile
          <br />• Join our Discord server and introduce yourself
          <br />• Start brainstorming your project ideas
          <br />• Form your team (or join one!)
        </Text>
        <Text style={paragraph}>We're excited to see what you'll build at RecessHacks!</Text>
        <Text style={paragraph}>
          Best,
          <br />
          The RecessHacks Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Copyright © RecessHacks, All rights reserved.</Text>
      </Container>
    </Body>
  </Html>
)

FollowUpEmailTemplate.PreviewProps = {
  userFirstname: "John",
  devpostLink: "https://recesshacks.devpost.com",
  discordInviteLink: "https://discord.gg/recesshacks",
} as FollowUpEmailTemplateProps

export default FollowUpEmailTemplate

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
}

const logo = {
  margin: "0 auto",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
}

const btnContainer = {
  textAlign: "center" as const,
}

const button = {
  backgroundColor: "#FF5C00",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
  cursor: "pointer",
  marginBottom: "16px",
}

const discordButton = {
  backgroundColor: "#5865F2",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
  cursor: "pointer",
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
}
