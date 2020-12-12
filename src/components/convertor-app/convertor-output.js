import {
  Box,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  useColorMode,
} from "@chakra-ui/react"
import React, { useState } from "react"

const ConvertorOutput = ({ convertedId }) => {
  const { colorMode } = useColorMode()
  const copyToClipboard = str => {
    const el = document.createElement("textarea")
    el.value = str
    el.setAttribute("readonly", "")
    el.style.position = "absolute"
    el.style.left = "-9999px"
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
  }
  const [isCopied, setIsCopied] = useState(false)
  return (
    <Box
      position="relative"
      bg={colorMode === "light" ? "gray.50" : "gray.900"}
      rounded="xl"
      p={8}
    >
      <Stat>
        <StatLabel>Converted AccountId</StatLabel>
        <StatNumber>{convertedId}</StatNumber>
        <Button
          position="absolute"
          top="0"
          right="0"
          size="xs"
          onClick={() => {
            copyToClipboard(convertedId)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 3000)
          }}
        >
          {isCopied ? "🎉 Copied!" : "Copy"}
        </Button>
      </Stat>
    </Box>
  )
}

export default ConvertorOutput
