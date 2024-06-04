import { Heading, Card, CardHeader, CardBody, Text, Stack, Image, Wrap, WrapItem } from '@chakra-ui/react';
import PokemonType from './PokemonType';

const PokemonCard = ({ four, two, half, quarter, zero, name, img }) => {
  return (
    <Card variant='elevated' maxW='400px'>
      <CardBody>
        <Heading size='md'> {name} </Heading>
        <Image src={img} alt={name} />
        <Stack>
          {four.length > 0 && (
            <>
              <Heading size="md">4x</Heading>
              <Wrap>
                {four.map((type, index) => (
                  <WrapItem key={index}>
                    <PokemonType type={type} />
                  </WrapItem>
                ))}
              </Wrap>
            </>
          )}
          {two.length > 0 && (
            <>
              <Heading size="md">2x</Heading>
              <Wrap>
                {two.map((type, index) => (
                  <WrapItem key={index}>
                    <PokemonType type={type} />
                  </WrapItem>
                ))}
              </Wrap>
            </>
          )}
          {half.length > 0 && (
            <>
              <Heading size="md">0.5x</Heading>
              <Wrap>
                {half.map((type, index) => (
                  <WrapItem key={index}>
                    <PokemonType type={type} />
                  </WrapItem>
                ))}
              </Wrap>
            </>
          )}
          {quarter.length > 0 && (
            <>
              <Heading size="md">0.25x</Heading>
              <Wrap>
                {quarter.map((type, index) => (
                  <WrapItem key={index}>
                    <PokemonType type={type} />
                  </WrapItem>
                ))}
              </Wrap>
            </>
          )}
          {zero.length > 0 && (
            <>
              <Heading size="md">0x</Heading>
              <Wrap>
                {zero.map((type, index) => (
                  <WrapItem key={index}>
                    <PokemonType type={type} />
                  </WrapItem>
                ))}
              </Wrap>
            </>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
}

export default PokemonCard;
