import { Row, Text, Pressable } from 'native-base';

interface Props {
    code: String;
}

export function EmptyMyPoolList({ code }: Props) {
    return (
        <Row flexWrap="wrap" justifyContent="center" p={4}>
            <Text color="gray.200" fontSize="sm">
            Esse botão ainda não tem participantes, que tal
            </Text>

            <Pressable onPress={() => {}}>
                <Text textDecorationLine="underline" color="yellow.500" textDecoration="underline">
                compartilhar o código
                </Text>
            </Pressable>

            <Text color="gray.200" fontSize="sm" mx={1}>
                do lado com alguém?
            </Text>

            <Text color="gray.200" mr={1}>
                Use o código
            </Text>

            <Text color="gray.200" fontSize="sm" textAlign="center" fontFamily="heading">
                {code}
            </Text>
        </Row>
    );
}