'use client';
import { useState } from "react";
import { Box,Button, Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text } from "../common/components";
import { Star } from "./Icon";
import { blogslug, detailHeader, explanetions } from "../const/const";

export const Gopher = () => {
    const push = (() =>{
        console.log("push");
    });

    return (
        <Box
            w={{ base: '65px', md: '95px'}} 
            h={{ base: '65px', md: '95px'}}
            margin='auto'
        >
            <Button
                w='100%'
                h='100%'
                onClick={() => push()}
                p={0}
            >
                <Image src='Gophersvg.svg' alt='gopher' />
            </Button>
        </Box>
    );
};

export const GopherPink = () => {
    const push = (() =>{
        console.log("push");
    });

    return (
        <Box
            w={{ base: '65px', md: '95px'}} 
            h={{ base: '65px', md: '95px'}}
            margin='auto'
        >
            <Button
                w='100%'
                h='100%'
                onClick={() => push()}
                p={0}
            >
                <Image src='Gophersvg_pink.svg' alt='gopher' />
            </Button>
        </Box>
    );
};

export const GopherYellow = () => {
    const push = (() =>{
        console.log("push");
    });

    return (
        <Box
            w={{ base: '65px', md: '95px'}} 
            h={{ base: '65px', md: '95px'}}
            margin='auto'
        >
            <Button
                w='100%'
                h='100%'
                onClick={() => push()}
                p={0}
            >
                <Image src='Gophersvg_yellow.svg' alt='gopher' />
            </Button>
        </Box>
    );
};

interface skillprops {
    title: string,
    evaluate: number,
    index: number
}

export const SkillCardButton = (props: skillprops) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ index, setIndex ] = useState(0);
    const title = props.title;
    const evaluate = props.evaluate;
    const i = props.index;
    const images = ['star','star','star'];
    const imagesToRender = images.slice(0, evaluate);
    const push = (index: number) => {
        onOpen();
        setIndex(index)
    };

    return (
        <Box 
          display='flex'
          alignItems='center'
          justifyContent='center'
          boxShadow='3px 3px 10px 2px rgba(133, 224, 92, 0.4)' 
          borderRadius='26px'
          w='300px'
          h='100px'
          fontSize='30px'
          bg='#adf0a2'
        >
            <Button
                w='100%'
                h='100%'
                onClick={() => push(i)}
                p={0}
                bg='#adf0a2'
                _hover={{ bg: '#adf0a2'}}
            >
                <Flex direction='column'>
                    <Heading textAlign='center' fontSize={24}>{title}</Heading>
                    <Flex direction='row'>
                        {imagesToRender.map((image, i) => (
                            <Star key={i} />
                        ))}
                    </Flex>
                </Flex>
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{detailHeader}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>{explanetions[index]}</Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
        </Box>
    );
};

interface OutPutprops {
    title: string,
}
export const OutPutCardButton = (props: OutPutprops) => {
    const title = props.title;
    const push = () => {
        window.location.href = 'https://pawafes-calc-20220223.dt.r.appspot.com/'
    };

    return (
        <Box 
          display='flex'
          alignItems='center'
          justifyContent='center'
          boxShadow='3px 3px 10px 2px rgba(133, 224, 92, 0.4)' 
          borderRadius='26px'
          w='300px'
          h='100px'
          fontSize='30px'
          bg='#adf0a2'
        >
            <Button
                w='100%'
                h='100%'
                onClick={() => push()}
                p={0}
                bg='#adf0a2'
                _hover={{ bg: '#adf0a2'}}
            >
                <Flex direction='column'>
                    <Heading textAlign='center' fontSize={24}>{title}</Heading>
                </Flex>
            </Button>
        </Box>
    );
};

interface Articleprops {
    title: string,
    index: number
}
export const ArticleCardButton = (props: Articleprops) => {
    const title = props.title;
    const index = props.index;
    const push = (index: number) => {
        switch(index) {
            case 0:
                window.location.href = 'https://qiita.com/o-ga/items/6abb7081d470926cb128';
                break;
            case 1:
                window.location.href = 'https://zenn.dev/o_ga/articles/51fb95bfcaf233';
                break;
            case 2:
                window.location.href = 'https://qiita.com/o-ga/items/c2ff5bbff7d76d4eace2';
                break;
        }
    };

    return (
        <Box 
          display='flex'
          alignItems='center'
          justifyContent='center'
          boxShadow='3px 3px 10px 2px rgba(133, 224, 92, 0.4)' 
          borderRadius='26px'
          w='300px'
          h='100px'
          fontSize='30px'
          bg='#adf0a2'
        >
            <Button
                w='100%'
                h='100%'
                onClick={() => push(index)}
                p={0}
                bg='#adf0a2'
                _hover={{ bg: '#adf0a2'}}
            >
                <Flex direction='column'>
                    <Heading textAlign='center' fontSize={16}>{title}</Heading>
                </Flex>
            </Button>
        </Box>
    );
};

export const BlogCardButton = (props: Articleprops) => {
    const title = props.title;
    const index = props.index;
    const push = (index: number) => {
        console.log(blogslug[index]);
    };

    return (
        <Box 
          display='flex'
          alignItems='center'
          justifyContent='center'
          boxShadow='3px 3px 10px 2px rgba(133, 224, 92, 0.4)' 
          borderRadius='26px'
          w='300px'
          h='100px'
          fontSize='30px'
          bg='#adf0a2'
        >
            <Button
                w='100%'
                h='100%'
                onClick={() => push(index)}
                p={0}
                bg='#adf0a2'
                _hover={{ bg: '#adf0a2'}}
            >
                <Flex direction='column'>
                    <Heading textAlign='center' fontSize={16}>{title}</Heading>
                </Flex>
            </Button>
        </Box>
    );
};