import { Box } from "@chakra-ui/layout";
import Link from 'next/link';

export function Header() {
  return (
    <Box py="8" align="center">
      <Link href="/">
        <a>
          <img src="/images/logo.svg" alt="worldtrip"/>
        </a>
      </Link>
    </Box>
  )
}