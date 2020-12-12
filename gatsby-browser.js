import React from "react"
import { ChakraProvider, CSSReset } from "@chakra-ui/react"

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider>
      <CSSReset />
      {element}
    </ChakraProvider>
  )
}
