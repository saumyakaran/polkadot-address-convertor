import { Box } from "@chakra-ui/react"
import React, { Fragment, useState } from "react"
import ConvertorInput from "./convertor-input"
import ConvertorOutput from "./convertor-output"

const ConvertorApp = () => {
  const [accountId, setAccountId] = useState("")
  const [convertedId, setConvertedId] = useState()
  return (
    <Fragment>
      <ConvertorInput
        accountId={accountId}
        setAccountId={val => setAccountId(val)}
        setConvertedId={val => setConvertedId(val)}
      />
      <Box my={8}>
        {accountId && (
          <ConvertorOutput accountId={accountId} convertedId={convertedId} />
        )}
      </Box>
    </Fragment>
  )
}

export default ConvertorApp
