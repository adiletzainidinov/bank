import { Box, Text, CircularProgress, CircularProgressLabel, Flex } from "@chakra-ui/react";

const HelpersText = () => {
  return (
    <Flex 
      direction="column" 
      maxW="300px" 
      justify="space-between" 
      align="center" 
      bg="#f1e7eb" 
      p={5} 
      borderRadius="lg" 
      boxShadow="md"
      mb={7}
      mt={3}
    >
      {/* Левая часть - текст о пожертвованиях */}
      <Box flex="1" textAlign="center">
        <Text fontWeight="bold" fontSize="lg">Поддержите нас</Text>
        <Text fontSize="md">
        Я хочу создать исламский YouTube для детей — платформу с проверенными мультфильмами и видео, соответствующими исламским ценностям. Для реализации проекта необходимо 100 000 $.        </Text>
      </Box>

      {/* Правая часть - информация о сборе */}
      <Box textAlign="center" mt={4}>
        <Text fontWeight="bold" fontSize="lg">Собранная сумма:</Text>
        <Text fontSize="xl" fontWeight="bold" color="blue.600">1 $ (0,001%)</Text>
        <CircularProgress 
          value={0.1} 
          color="blue.500" 
          size="80px" 
          thickness="8px"
          trackColor="gray.200"
          capIsRound
        >
          <CircularProgressLabel fontSize="md" fontWeight="bold">0,001%</CircularProgressLabel>
        </CircularProgress>
      </Box>
    </Flex>
  );
};

export default HelpersText;