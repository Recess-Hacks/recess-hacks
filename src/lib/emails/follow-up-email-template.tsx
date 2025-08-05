import { Body, Button, Container, Head, Heading, Html, Img, Preview, Section, Text } from "@react-email/components"

interface FollowUpEmailTemplateProps {
  userFirstname: string
}

export const FollowUpEmailTemplate = ({
  userFirstname,
}: FollowUpEmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>Welcome to RecessHacks! Join Devpost & Discord</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img src="/placeholder.svg?height=60&width=200" width="200" height="60" alt="RecessHacks" style={logo} />
        </Section>

        <Heading style={h1}>Welcome to RecessHacks! 🎉</Heading>

        <Text style={heroText}>Hi {userFirstname},</Text>

        <Text style={text}>
          Congratulations on verifying your email! You're now officially part of the RecessHacks community. Here are the
          next steps to get you ready for an amazing hackathon experience:
        </Text>

        <Section style={buttonContainer}>
          <Button style={devpostButton} href={"https://recess-hacks-5-0.devpost.com/"}>
            🚀 Join Our Devpost
          </Button>
        </Section>

        <Text style={text}>
          <strong>Devpost</strong> is where you'll submit your project, find teammates, and access all hackathon
          resources.
        </Text>

        <Section style={buttonContainer}>
          <Button style={discordButton} href={"https://discord.gg/RrCY76mefj"}>
            💬 Join Our Discord
          </Button>
        </Section>

        <Text style={text}>
          <strong>Discord</strong> is your hub for real-time communication, updates, and connecting with other
          participants.
        </Text>

        <Section style={checklistContainer}>
          <Heading style={h2}>What's Next:</Heading>
          <Text style={checklistItem}>✅ Complete your Devpost profile</Text>
          <Text style={checklistItem}>✅ Join our Discord server and introduce yourself</Text>
          <Text style={checklistItem}>✅ Start brainstorming your project ideas</Text>
          <Text style={checklistItem}>✅ Form your team (or join one!)</Text>
        </Section>

        <Text style={text}>We're excited to see what incredible projects you'll build at RecessHacks!</Text>

        <Text style={footer}>
          Best regards,
          <br />
          The RecessHacks Team
        </Text>

        <Section style={footerSection}>
          <Text style={footerText}>Questions? Reply to this email or reach out on Discord.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
}

const logoContainer = {
  margin: "32px 0",
  textAlign: "center" as const,
}

const logo = {
  margin: "0 auto",
}

const h1 = {
  color: "#333",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
  textAlign: "center" as const,
}

const h2 = {
  color: "#333",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "20px",
  fontWeight: "bold",
  margin: "32px 0 16px",
  padding: "0",
}

const heroText = {
  color: "#333",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "18px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0 48px",
  textAlign: "center" as const,
}

const text = {
  color: "#333",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "16px",
  margin: "24px 0",
  padding: "0 48px",
  textAlign: "left" as const,
}

const buttonContainer = {
  padding: "16px 48px",
  textAlign: "center" as const,
}

const devpostButton = {
  backgroundColor: "#003e54",
  borderRadius: "8px",
  color: "#fff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "12px",
  margin: "16px 0",
}

const discordButton = {
  backgroundColor: "#5865F2",
  borderRadius: "8px",
  color: "#fff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "12px",
  margin: "16px 0",
}

const checklistContainer = {
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  margin: "32px 48px",
  padding: "24px",
}

const checklistItem = {
  color: "#333",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "16px",
  margin: "8px 0",
  padding: "0",
}

const footer = {
  color: "#333",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "16px",
  fontWeight: "bold",
  margin: "32px 0",
  padding: "0 48px",
  textAlign: "left" as const,
}

const footerSection = {
  backgroundColor: "#f8f9fa",
  padding: "24px 48px",
  margin: "32px 0 0",
}

const footerText = {
  color: "#666",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "14px",
  margin: "0",
  textAlign: "center" as const,
}
