import { Flex, IconButton, useColorMode } from "@chakra-ui/react"
import { CgDarkMode } from "@react-icons/all-files"

import PropTypes from "prop-types"
import React from "react"

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Flex maxW="960px" mx="auto" justifyContent="flex-end" py={4}>
        <IconButton
          as={CgDarkMode}
          onClick={toggleColorMode}
        />
      </Flex>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
