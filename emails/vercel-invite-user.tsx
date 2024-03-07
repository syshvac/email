import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const VercelInviteUserEmail = ({
  username,
  userImage,
  invitedByUsername,
  invitedByEmail,
  teamName,
  teamImage,
  inviteLink,
  inviteFromIp,
  inviteFromLocation,
}: VercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/static/reperctlogo.png`}
                width="180"
                height="180"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Participă la <strong>{teamName}</strong> din partea <strong>REPER Constanța</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
            Dragi colegi,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>{invitedByUsername}</strong> <span>&nbsp;</span> așteaptă candidatura dumneavoastră la <strong>{teamName}</strong> pentru pozițiile din lista{" "}
              <strong>11-43</strong>.
              <br></br>
              Va rugăm sa ne comunicati CV-ul si o scrisoare de intenție către adresa de mail(
              <Link
                href={`mailto:${invitedByEmail}`}
                className="text-blue-600 no-underline"
              >
                {invitedByEmail}
              </Link> 
              ) <br></br>
              Acestea vor fi încărcate pe directorul dedicat membrilor CT din cadrul platformei <Link href={`comunitate.partidulreper.ro`}>comunitate.partidulreper.ro</Link> .
            </Text>
            <Section>
              <Row>
                <Column align="right">
                  <Img
                    className="rounded-full"
                    src={userImage}
                    width="64"
                    height="64"
                  />
                </Column>
                <Column align="center">
                  <Img
                    src={`${baseUrl}/static/vercel-arrow.png`}
                    width="12"
                    height="9"
                    alt="invited you to"
                  />
                </Column>
                <Column align="left">
                  <Img
                    className="rounded-full"
                    src={teamImage}
                    width="64"
                    height="64"
                  />
                </Column>
              </Row>
            </Section>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#c30173] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={`mailto:${invitedByEmail}`}
              >
                Trimite candidatura
              </Button>
            </Section>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#28abdd] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={inviteLink}
              >
                Intră pe director
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              sau copiaza acest link:{" "}
              <Link href={inviteLink} className="text-blue-600 no-underline">
                {inviteLink}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
            Regulamentul alegerilor interne europarlamentare prevede că procesul electoral pentru pozițiile 11- 43, înregistrarea candidaturilor la nivelul filialei județene și ierarhizarea candidaților intră în responsabilitatea filialei județene. <br></br>
            Conform art. 6 (3) din Regulamentul de desemnare a candidaților la europarlamentare 2024 pe pozițiile 11- 43, Biroul Județean al fiecărei filiale va stabili modul de desemnare a propriilor candidați.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

VercelInviteUserEmail.PreviewProps = {
  username: "alanturing",
  userImage: `${baseUrl}/static/membri.jpg`,
  invitedByUsername: "Reper Constanța",
  invitedByEmail: "ct@partidulreper.ro",
  teamName: "Europarlamentare",
  teamImage: `${baseUrl}/static/europ.jpg`,
  inviteLink: "https://comunitate.partidulreper.ro/drive?unit=2388&pid=5052&ptitle=Alegeri%20europarlamentare%20lista%2011-43",
  inviteFromIp: "204.13.186.218",
  inviteFromLocation: "São Paulo, Brazil",
} as VercelInviteUserEmailProps;

export default VercelInviteUserEmail;
