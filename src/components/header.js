import { Flex, IconButton, useColorMode } from "@chakra-ui/react"
import { CgDarkMode } from "@react-icons/all-files/cg/CgDarkMode"

import PropTypes from "prop-types"
import React from "react"

const Header = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <header>
      <Flex maxW="960px" mx="auto" justifyContent="flex-end" py={4}>
        <IconButton
          as={CgDarkMode}
          onClick={toggleColorMode}
          cursor="pointer"
          background="none"
          rounded="4rem"
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
