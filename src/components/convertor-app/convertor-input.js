import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { decodeAddress, encodeAddress } from "@polkadot/util-crypto"
import settings from "@polkadot/ui-settings"

const ConvertorInput = ({ accountId, setAccountId, setConvertedId }) => {
  const [invalid, setInvalid] = useState(false)

  const [prefix, setPrefix] = useState(
    `${settings.prefix === -1 ? 42 : settings.prefix}`
  )

  const prefixOptions = settings.availablePrefixes
    .filter(({ value }) => value !== -1)
    .map(({ text, value }) => ({ text, value: `${value}` }))

  const _onChangePrefix = e => {
    const value = e.target.value
    console.log(e.target.value)
    setPrefix(value)
    settings.set({ prefix: parseInt(value, 10) })
  }

  useEffect(() => {
    if (accountId) {
      try {
        setConvertedId(encodeAddress(decodeAddress(accountId), prefix))
        setInvalid(false)
      } catch (error) {
        setInvalid(true)
      }
    } else setConvertedId("Enter an accountId")
  }, [accountId, prefix, setConvertedId])

  return (
    <>
      <FormControl>
        <FormLabel>Account Id</FormLabel>
        <Input
          id="accountId"
          type="text"
          onChange={e => setAccountId(e.target.value)}
          defaultValue={""}
          placeholder="Enter your accountId"
          isInvalid={invalid}
          isRequired
        />
      </FormControl>
      <FormControl mt={8}>
        <FormLabel>Select network</FormLabel>
        <Select onChange={_onChangePrefix}>
          {prefixOptions.map(val => (
            <option key={val.text} value={val.value}>
              {val.text}
            </option>
          ))}
        </Select>
        <FormHelperText>
          This is the network that you want to convert to
        </FormHelperText>
      </FormControl>
    </>
  )
}

export default ConvertorInput
