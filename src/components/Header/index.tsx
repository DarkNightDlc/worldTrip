import { Img, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

export function Header(){
    return (
        <Stack as="header" w="full" py="1.6875rem" alignItems="center">
            <NextLink href="/" passHref >
                <Link>
                 <Img w='11.50375rem' src="/image/logo.png"/>
                </Link>
            </NextLink>
        </Stack>
    )
}