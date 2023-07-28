'use client';
import { Button, Image } from "../common/components";

const GopherButton = () => {
    const push = (() =>{
        console.log("push");
    });

    return (
        <Button
            w={{ base: '80px', md: '100px'}} 
            h={{ base: '80px', md: '100px'}}
            p={4}
            onClick={() => push()}
        >
            <Image src='Gophersvg.svg' w={{ base: '80px', md: '100px'}} h={{ base: '80px', md: '100px'}} alt='gopher' />
        </Button>
    );
};

export default GopherButton;