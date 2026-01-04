"use client";
import { useState } from "react";
import {
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  Progress,
  Span,
  Stack,
} from "@chakra-ui/react";
import { Badge, List } from "@chakra-ui/react";
import {
  LuCalendar,
  LuGithub,
  LuLocate,
  LuMail,
  LuMenu,
  LuSchool,
} from "react-icons/lu";
import { Flex, Text, Box, Card, Heading, Button } from "@chakra-ui/react";
import { Menu, Portal } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const links = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const subject = encodeURIComponent("Message From Portfolio Site");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:winnerumaemele2007@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Box scrollBehavior="smooth">
      <Flex
        scrollBehavior="smooth"
        border="none"
        backdropBlur="10px"
        position="fixed"
        width="full"
        top={0}
        left={0}
        zIndex={100}
        bgColor="#161b22"
        p={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text ml={2} fontFamily="mono" color="#06b6d4" fontSize="xl">
          Winner Emele{" "}
          <a href="https://github.com/Emele-Winner2">
            <Button
              ml={2}
              size="sm"
              variant="outline"
              color="#06b6d4"
              bgColor="#0d1117"
            >
              <LuGithub />
            </Button>
          </a>{" "}
        </Text>
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button color="#06b6d4" bgColor="#0d1117" variant="outline">
              <LuMenu />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content color="#06b6d4" bgColor="#0d1117">
                {links.map((link) => (
                  <Menu.Item
                    color="#06b6d4"
                    cursor="pointer"
                    key={link.href}
                    asChild
                    value={link.title}
                  >
                    <a color="#06b6d4" href={link.href} rel="noreferrer">
                      {link.title}
                    </a>
                  </Menu.Item>
                ))}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Flex>

      <main>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <article>
            <Card.Root
              pt={{ base: "6" }}
              border="none"
              maxW="full"
              borderRadius="0"
            >
              <Box
                fontSize={{ xl: "2xl" }}
                bgColor="#0d1117"
                p={{ base: "3", md: "90px", lg: "70px", xl: "160px" }}
                display={{ base: "block", md: "flex", lg: "flex" }}
                gap="5"
              >
                <Box
                  pt={{ base: "18" }}
                  width={{ base: "100%", md: "50%", lg: "50%" }}
                >
                  <Heading fontFamily="mono" fontSize="2xl" pt={14}>
                    Winner Emele <br />
                    Frontend - developer <br />
                  </Heading>{" "}
                  <br />
                  Building modern frontend solutions that bridge the gap between
                  visual design and interactive functionality. <br /> <br />
                  <Box justifyContent="left" display="flex">
                    <Button
                      color="white"
                      bgColor="#06b6d4"
                      width={{ base: "45", md: "45", lg: "30%" }}
                      mr={3}
                      size="md"
                      variant="solid"
                    >
                      <a href="#projects">View My Work</a>
                    </Button>
                    <Button
                      width={{ base: "45", md: "45", lg: "30%" }}
                      mb={4}
                      color="#06b6d4"
                      borderColor="#06b6d4"
                      variant="outline"
                      size="md"
                    >
                      <a href="#contact">Contact me</a>
                    </Button>
                  </Box>
                </Box>
                <Box
                  pt={{ base: "28" }}
                  width={{ base: "100%", md: "50%", lg: "50%" }}
                  display="flex"
                  justifyContent="center"
                >
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile_pic"
                    h="200px"
                    w="200px"
                    border="solid"
                    borderColor="#06b6d4"
                    borderRadius="full"
                    loading="lazy"
                  />
                </Box>
              </Box>
            </Card.Root>
          </article>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <article id="about">
            <Card.Root
              bgColor="#0d1117"
              p={3}
              maxW="full"
              borderRadius="0"
              overflow="hidden"
            >
              <Box
                justifyContent="center"
                pt={12}
                gap={4}
                display={{ base: "block", md: "flex", lg: "flex" }}
              >
                <Box
                  width={{ base: "100%", md: "40%", lg: "35%" }}
                  height="270px"
                  overflow="hidden"
                  position="relative"
                >
                  <Image
                    border="solid"
                    borderRadius={10}
                    borderColor="#06b6d4"
                    src="/images/create.webp"
                    alt="Hero"
                    loading="lazy"
                    w="full"
                    h="full"
                  />
                </Box>
                <Box
                  p={{ base: "3", md: "50px", lg: "50px" }}
                  width={{ base: "100%", md: "50%", lg: "50%" }}
                  gap="2"
                  fontSize={{ xl: "xl" }}
                >
                  <Heading
                    color="#06b6d4"
                    fontFamily="mono"
                    fontSize={{ xl: "3xl" }}
                  >
                    About Me
                  </Heading>
                  <br />
                  I&apos;m a{" "}
                  <Span fontFamily="mono" color="#06b6d4">
                    frontend developer
                  </Span>{" "}
                  currently studying Electronics and Computer Engineering at the
                  University of Portharcourt. I focus on building responsive and
                  accessible web interfaces.
                  <br />
                  <br />
                  I enjoy working with HTML, CSS, JavaScript and React libraries
                  to create clean layouts, interactive components, and visually
                  appealing designs.
                  <br />
                  <br />
                  I&apos;m currently Exploring Nextjs to build more dynamic,
                  component-based applications and expanding my skills to create
                  modern, user-focused web experiences.
                  <br />
                  <Flex pt={4} flexDir="column" gap={3}>
                    <Box
                      border="thin solid #06b6d4"
                      p={4}
                      borderRadius={7}
                      display="flex"
                      gap={3}
                    >
                      <Button color="#06b6d4" size="sm" variant="outline">
                        <LuSchool />
                      </Button>
                      <Text color="#06b6d4">
                        EDUCATION: <br />
                        <Span
                          color="white"
                          fontFamily="mono"
                          fontWeight="light"
                        >
                          {" "}
                          Electronics and Computer Engineering University of
                          Portharcourt
                        </Span>
                      </Text>
                    </Box>
                    <Box
                      border="thin solid #06b6d4"
                      p={4}
                      borderRadius={7}
                      gap={3}
                      display="flex"
                    >
                      <Button color="#06b6d4" size="sm" variant="outline">
                        <LuCalendar />
                      </Button>
                      <Text color="#06b6d4">
                        GRADUATION: <br />
                        <Span
                          color="white"
                          fontFamily="mono"
                          fontWeight="light"
                        >
                          {" "}
                          Expected: September 2028
                        </Span>
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
              <Card.Footer></Card.Footer>
            </Card.Root>
          </article>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <article id="skills">
            <Card.Root
              fontFamily="mono"
              bgColor="#0d1117"
              p={3}
              maxW="full"
              borderRadius="0"
            >
              {" "}
              <Card.Body gap="5">
                {" "}
                <Card.Title
                  color="#06b6d4"
                  textAlign="center"
                  pt={5}
                  fontSize={{ base: "2xl", md: "2xl", lg: "2xl", xl: "3xl" }}
                >
                  Technical Skills
                </Card.Title>{" "}
                <Card.Description>
                  {" "}
                  <Box
                    gapY={3}
                    gap="5"
                    justifyContent={{ md: "center", lg: "center" }}
                    display={{ base: "block", md: "flex", lg: "flex" }}
                  >
                    {" "}
                    <List.Root
                      pb={4}
                      border="solid"
                      borderRadius={5}
                      borderWidth="thin"
                      borderColor="#06b6d4"
                      gap={2}
                      margin="0"
                      listStyleType="none"
                      as="ul"
                    >
                      {" "}
                      <List.Item
                        fontSize={{ xl: "xl" }}
                        p={1}
                        pl={2}
                        bgColor="#06b6d4"
                        color="#170b2d"
                      >
                        {" "}
                        Programming Languages, Frameworks & Libraries{" "}
                      </List.Item>{" "}
                      <List.Item
                        fontSize={{ xl: "xl" }}
                        ml={2}
                        p={2}
                        color="#06b6d4"
                      >
                        {" "}
                        Html <br />{" "}
                        <Progress.Root
                          width="full"
                          value={100}
                          variant="outline"
                          size="xs"
                        >
                          {" "}
                          <Progress.Track>
                            {" "}
                            <Progress.Range />{" "}
                          </Progress.Track>{" "}
                        </Progress.Root>{" "}
                      </List.Item>{" "}
                      <List.Item
                        ml={2}
                        p={2}
                        color="#06b6d4"
                        fontSize={{ xl: "xl" }}
                      >
                        Tailwind CSS <br />{" "}
                        <Progress.Root
                          width="full"
                          value={100}
                          variant="outline"
                          size="xs"
                        >
                          {" "}
                          <Progress.Track>
                            {" "}
                            <Progress.Range />{" "}
                          </Progress.Track>{" "}
                        </Progress.Root>{" "}
                      </List.Item>{" "}
                      <List.Item
                        ml={2}
                        p={2}
                        color="#06b6d4"
                        fontSize={{ xl: "xl" }}
                      >
                        {" "}
                        Javascript <br />{" "}
                        <Progress.Root
                          width="full"
                          value={89}
                          variant="outline"
                          size="xs"
                        >
                          {" "}
                          <Progress.Track>
                            {" "}
                            <Progress.Range />{" "}
                          </Progress.Track>{" "}
                        </Progress.Root>{" "}
                      </List.Item>{" "}
                      <List.Item
                        ml={2}
                        p={2}
                        color="#06b6d4"
                        fontSize={{ xl: "xl" }}
                      >
                        {" "}
                        React <br />{" "}
                        <Progress.Root
                          width="full"
                          value={80}
                          variant="outline"
                          size="xs"
                        >
                          {" "}
                          <Progress.Track>
                            {" "}
                            <Progress.Range />{" "}
                          </Progress.Track>{" "}
                        </Progress.Root>{" "}
                      </List.Item>{" "}
                      <List.Item
                        ml={2}
                        p={2}
                        color="#06b6d4"
                        fontSize={{ xl: "xl" }}
                      >
                        {" "}
                        Chakra UI <br />{" "}
                        <Progress.Root
                          width="full"
                          value={65}
                          variant="outline"
                          size="xs"
                        >
                          {" "}
                          <Progress.Track>
                            {" "}
                            <Progress.Range />{" "}
                          </Progress.Track>{" "}
                        </Progress.Root>{" "}
                      </List.Item>{" "}
                    </List.Root>{" "}
                    <br />{" "}
                    <List.Root
                      pb={4}
                      border="solid"
                      borderRadius={5}
                      borderWidth="thin"
                      borderColor="#06b6d4"
                      gap={2}
                      margin="0"
                      listStyleType="none"
                      as="ul"
                    >
                      {" "}
                      <List.Item
                        p={1}
                        pl={2}
                        bgColor="#06b6d4"
                        color="#170b2d"
                        fontSize={{ xl: "xl" }}
                      >
                        {" "}
                        Development Tools and Technologies{" "}
                      </List.Item>{" "}
                      <List.Item
                        color="#06b6d4"
                        ml={2}
                        p={2}
                        fontSize={{ xl: "xl" }}
                      >
                        {" "}
                        Git <br />{" "}
                        <Progress.Root
                          width="full"
                          value={89}
                          variant="outline"
                          size="xs"
                        >
                          {" "}
                          <Progress.Track>
                            {" "}
                            <Progress.Range />{" "}
                          </Progress.Track>{" "}
                        </Progress.Root>{" "}
                      </List.Item>{" "}
                      <List.Item
                        ml={2}
                        p={2}
                        color="#06b6d4"
                        fontSize={{ xl: "xl" }}
                      >
                        {" "}
                        Visual Studio Code <br />{" "}
                        <Progress.Root
                          width="full"
                          value={85}
                          variant="outline"
                          size="xs"
                        >
                          {" "}
                          <Progress.Track>
                            {" "}
                            <Progress.Range />{" "}
                          </Progress.Track>{" "}
                        </Progress.Root>
                      </List.Item>{" "}
                      <List.Item
                        ml={2}
                        p={2}
                        color="#06b6d4"
                        fontSize={{ xl: "xl" }}
                      >
                        {" "}
                        Figma <br />{" "}
                        <Progress.Root
                          width="full"
                          value={60}
                          variant="outline"
                          size="xs"
                        >
                          {" "}
                          <Progress.Track>
                            {" "}
                            <Progress.Range />{" "}
                          </Progress.Track>{" "}
                        </Progress.Root>
                      </List.Item>{" "}
                    </List.Root>{" "}
                  </Box>{" "}
                </Card.Description>{" "}
              </Card.Body>{" "}
              <Card.Footer display="flex" flexDir="column">
                {" "}
                <Text fontWeight="bold" fontSize="2xl" color="#06b6d4">
                  Currently Learning
                </Text>{" "}
                <Flex>
                  {" "}
                  <Badge
                    bgColor="#0f071d"
                    color="#06b6d4"
                    borderRadius={10}
                    border="solid"
                    borderWidth={2}
                    p={2}
                    fontSize="md"
                  >
                    NextJs
                  </Badge>{" "}
                  <Badge
                    ml={2}
                    bgColor="#0f071d"
                    color="#06b6d4"
                    borderRadius={10}
                    border="solid"
                    borderWidth={2}
                    p={2}
                    fontSize="md"
                  >
                    Framer motion
                  </Badge>{" "}
                </Flex>{" "}
              </Card.Footer>{" "}
            </Card.Root>
          </article>
        </motion.section>

        <article id="projects">
          <Card.Root
            bgColor="#0d1117"
            maxW="full"
            borderRadius="0"
            overflow="hidden"
          >
            <Card.Body gap="2">
              <Card.Title
                textAlign="center"
                fontFamily="mono"
                pt={5}
                color="#06b6d4"
                fontSize="2xl"
              >
                Featured Projects
              </Card.Title>{" "}
              <Box>
                <Grid
                  transition="transform 0.3s ease-in-out"
                  bg="white"
                  templateRows="repeat(1, 1fr)"
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(3, 1fr)",
                  }}
                  gap={{ base: "5", md: "3" }}
                  border="none"
                  borderRadius={10}
                  mt={10}
                  color="black"
                >
                  {properties.map((property, index) => (
                    <GridItem
                      bgColor="#0d1117"
                      borderRadius={10}
                      border="solid thin"
                      borderColor="gray.400"
                      cursor="pointer"
                      transition="transform 0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.05)",
                        borderColor: "#06b6d4",
                      }}
                      key={property.id}
                    >
                      <PropertyCard data={property} />
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            </Card.Body>
          </Card.Root>
        </article>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <article id="contact">
            <Card.Root
              bgColor="#0d1117"
              p={3}
              maxW="full"
              borderRadius="0"
              overflow="hidden"
            >
              <Card.Body gap="2">
                <Card.Title
                  fontFamily="mono"
                  color="#06b6d4"
                  pt={7}
                  fontSize="2xl"
                  textAlign="center"
                >
                  Get in Touch
                </Card.Title>
                <Flex
                  mt={3}
                  flexDir={{ base: "column", md: "row" }}
                  justifyContent={{ md: "center" }}
                  gap={{ base: "4", md: "5" }}
                >
                  <Box
                    color="gray.400"
                    fontSize={{ xl: "xl" }}
                    w={{ base: "full", md: "45%" }}
                    border="solid"
                    borderColor="#06b6d4"
                    borderWidth="thin"
                    borderRadius={6}
                  >
                    <div style={{ padding: "30px" }}>
                      <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: "15px" }}>
                          <label>Name</label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{
                              backgroundColor: "#1d2330",
                              width: "100%",
                              padding: "10px",
                              borderRadius: "8px",
                            }}
                          />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                          <label>Email</label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                              backgroundColor: "#1d2330",
                              width: "100%",
                              padding: "10px",
                              borderRadius: "8px",
                            }}
                          />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                          <label>Message</label>
                          <textarea
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={{
                              backgroundColor: "#1d2330",
                              width: "100%",
                              padding: "10px",
                              borderRadius: "8px",
                            }}
                          ></textarea>
                        </div>
                        <Button
                          type="submit"
                          mb={4}
                          color="#06b6d4"
                          borderColor="#06b6d4"
                          variant="outline"
                          size="md"
                        >
                          Contact me
                        </Button>
                      </form>
                    </div>
                  </Box>
                  <Box
                    fontSize={{ xl: "xl" }}
                    w={{ base: "full", md: "40%" }}
                    id="contact and Connect"
                  >
                    {" "}
                    <Box
                      borderRadius={6}
                      p={3}
                      border="solid thin"
                      borderColor="#06b6d4"
                    >
                      {" "}
                      <Heading color="#06b6d4" ml={2} mb={2}>
                        Contact Information
                      </Heading>{" "}
                      <Box
                        color="gray.400"
                        ml={4}
                        mb={2}
                        flexDir="column"
                        display="flex"
                      >
                        {" "}
                        <Text
                          fontFamily="mono"
                          gap={2}
                          alignItems="center"
                          color="#06b6d4"
                          display="flex"
                        >
                          <LuMail /> Email:{" "}
                        </Text>
                        winnerumaemele2007@gmail.com
                      </Box>{" "}
                      <br />{" "}
                      <Box
                        color="gray.400"
                        ml={4}
                        mb={2}
                        flexDir="column"
                        display="flex"
                      >
                        {" "}
                        <Text
                          fontFamily="mono"
                          gap={2}
                          alignItems="center"
                          color="#06b6d4"
                          display="flex"
                        >
                          <LuLocate /> Location:{" "}
                        </Text>
                        Umuahia ,Abia State Nigeria
                      </Box>{" "}
                      <br />{" "}
                    </Box>{" "}
                  </Box>
                </Flex>
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card.Root>
          </article>
        </motion.section>
      </main>

      <Box
        pt={7}
        display="flex"
        flexDir="column"
        alignItems="center"
        bgColor="black"
      >
        <Box
          fontFamily="mono"
          fontSize={{ xl: "2xl" }}
          color="gray.600"
          textAlign="center"
          pb={4}
        >
          <Text color="white" fontWeight="bold">
            Winner Emele
          </Text>
          Frontend-developer
        </Box>
        <Button
          width={{ base: "45", md: "45", lg: "15%" }}
          mb={4}
          color="#06b6d4"
          borderColor="#06b6d4"
          variant="outline"
          size="md"
        >
          <a href="#contact">Contact me</a>
        </Button>
      </Box>

      <Box bgColor="black" textAlign="center">
        <Text color="gray.600">
          {" "}
          &copy;2025 Winner Emele. All rights reserved.{" "}
        </Text>
      </Box>
    </Box>
  );
}
interface PropertyCardProps {
  data: Property;
}

const PropertyCard = ({ data }: PropertyCardProps) => (
  <Stack gap="4">
    <Box position="relative">
      <Image
        src={data.image}
        alt={data.title}
        rounded="l2"
        w="full"
        h="300px"
        objectFit="cover"
        loading="lazy"
        draggable={false}
      />
    </Box>
    <Stack p={3} gap="1">
      <Span
        color="#06b6d4"
        fontFamily="mono"
        fontWeight="semibold"
        fontSize="xl"
      >
        {data.title}
      </Span>
      <HStack color="black" textStyle="md">
        <Span color="gray.400">{data.info}</Span>
      </HStack>

      <Flex pt={3}>
        {" "}
        <Badge
          bgColor="#0f071d"
          color="#06b6d4"
          borderRadius="99px"
          border="solid"
          borderWidth={2}
          p={2}
          fontSize="md"
        >
          NextJs
        </Badge>{" "}
        <Badge
          borderRadius="99px"
          ml={2}
          bgColor="#0f071d"
          color="#06b6d4"
          border="solid"
          borderWidth={2}
          p={2}
          fontSize="md"
        >
          React
        </Badge>{" "}
        <Badge
          borderRadius="99px"
          ml={2}
          bgColor="#0f071d"
          color="#06b6d4"
          border="solid"
          borderWidth={2}
          p={2}
          fontSize="md"
        >
          Chakra UI
        </Badge>{" "}
      </Flex>
      <br />
      <Flex gap="10px">
        {" "}
        <a href="https://github.com/Emele-Winner2/-Serenity-">
          {" "}
          <Button
            border="solid"
            borderWidth="1px"
            color="white"
            borderRadius="10px"
            bgColor="#0d1117"
          >
            <LuGithub color="#06b6d4" /> Github
          </Button>
        </a>
        <a href="https://serenity-o6vj1fnwa-emele-winners-projects.vercel.app/">
          <Button
            border="solid"
            borderWidth="1px"
            color="white"
            borderRadius="10px"
            bgColor="#0d1117"
          >
            Live Demo
          </Button>
        </a>
      </Flex>
    </Stack>
  </Stack>
);
interface Property {
  id: number;
  title: string;
  info: string;

  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Serenity",
    info: "Serenity is a polished, modern project portfolio interface demonstrating frontend development skills, clean UI design, and responsive layout. This site highlights ...",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
  },
];
