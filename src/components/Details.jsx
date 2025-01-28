import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    Button,
    Icon,
    Flex,
  } from '@chakra-ui/react';
  import React from 'react';
  import { FaWhatsapp } from 'react-icons/fa';
  
  const Details = () => {
    const devlinksHelp = [
      {
        id: 1,
        url: 'https://yt3.googleusercontent.com/NIKFAdA-99YFgwI35mQfQfBqtCrrKGCTuwD7NGIXXJ76F6aF1g9zaXGp3KdbH4mdR3uV1TFkIg=s900-c-k-c0x00ffffff-no-rj',
        imgTitle: 'MBANK',
        text: '4177 4901 7742 7152',
        textFirst: '+996 998 08 38 28',
        textSecond: 'Адилет З.',
      },
      {
        id: 2,
        url: 'https://static.tildacdn.one/tild6631-3335-4631-b236-333435663230/bakai_icon_with_back.png',
        imgTitle: 'BakAi',
        text: '4714 2400 0199 0424',
        textFirst: '+996 998 08 38 28',
        textSecond: 'Адилет З.',
      },
    ];
  
    return (
      <>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="white"
          mb="1em"
          textAlign="center"
        >
          Реквизиты
        </Text>
        <Accordion allowToggle>
          {devlinksHelp.map(link => (
            <AccordionItem key={link.id} border="none" mb="1em">
              <AccordionButton
                bg="rgba(255,255,255,0.9)"
                _hover={{ bg: 'rgba(240,240,240,1)' }}
                borderRadius="8px"
                boxShadow="md"
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  {link.id}. {link.imgTitle}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bg="white" borderRadius="8px" boxShadow="sm">
                <Flex direction="column" alignItems="center" mb="1em">
                  <img
                    src={link.url}
                    alt="Bank Logo"
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                  />
                </Flex>
                <Text fontSize="md" fontWeight="bold">
                  Номер карты: {link.text}
                </Text>
                <Text fontSize="md">Телефон: {link.textFirst}</Text>
                <Text fontSize="md">Имя: {link.textSecond}</Text>
                <Text fontSize="sm" mt="1em" color="gray.600" textAlign="justify">
                  Чтобы перевести деньги, скопируйте номер карты или
                  воспользуйтесь приложением вашего банка.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
  
        {/* Инструкция и кнопка WhatsApp */}
        <Text
          fontSize="lg"
          fontWeight="bold"
          color="white"
          mt="2em"
          textAlign="center"
        >
          Если у вас возникли трудности с переводом, <br /> свяжитесь со мной
          через WhatsApp:
        </Text>
        <Box textAlign="center" mt="1em">
          <Button
            as="a"
            href="https://wa.me/996998083828"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="green"
            size="lg"
            leftIcon={<Icon as={FaWhatsapp} />}
            _hover={{ transform: 'scale(1.05)' }}
          >
            Написать в WhatsApp
          </Button>
        </Box>
      </>
    );
  };
  
  export default Details;
  