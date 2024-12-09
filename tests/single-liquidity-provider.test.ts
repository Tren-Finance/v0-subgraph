import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AddressesSet } from "../generated/schema"
import { AddressesSet as AddressesSetEvent } from "../generated/SingleLiquidityProvider/SingleLiquidityProvider"
import { handleAddressesSet } from "../src/single-liquidity-provider"
import { createAddressesSetEvent } from "./single-liquidity-provider-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let treasury = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let stable = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let vault = Address.fromString("0x0000000000000000000000000000000000000001")
    let debtToken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAddressesSetEvent = createAddressesSetEvent(
      treasury,
      stable,
      vault,
      debtToken
    )
    handleAddressesSet(newAddressesSetEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddressesSet created and stored", () => {
    assert.entityCount("AddressesSet", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddressesSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "treasury",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddressesSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "stable",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddressesSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "vault",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddressesSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "debtToken",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
