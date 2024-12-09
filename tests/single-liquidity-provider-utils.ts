import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddressesSet,
  Approval,
  ClaimRewards,
  ClaimStatusChanged,
  DepositRemoved,
  DepositStatusChanged,
  Deposited,
  Initialized,
  OwnershipTransferStarted,
  OwnershipTransferred,
  Requested,
  Transfer,
  TrenTokenSet,
  UpdatedRewardsPerShare,
  Withdrawn
} from "../generated/SingleLiquidityProvider/SingleLiquidityProvider"

export function createAddressesSetEvent(
  treasury: Address,
  stable: Address,
  vault: Address,
  debtToken: Address
): AddressesSet {
  let addressesSetEvent = changetype<AddressesSet>(newMockEvent())

  addressesSetEvent.parameters = new Array()

  addressesSetEvent.parameters.push(
    new ethereum.EventParam("treasury", ethereum.Value.fromAddress(treasury))
  )
  addressesSetEvent.parameters.push(
    new ethereum.EventParam("stable", ethereum.Value.fromAddress(stable))
  )
  addressesSetEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromAddress(vault))
  )
  addressesSetEvent.parameters.push(
    new ethereum.EventParam("debtToken", ethereum.Value.fromAddress(debtToken))
  )

  return addressesSetEvent
}

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createClaimRewardsEvent(
  user: Address,
  rewardAmount: BigInt
): ClaimRewards {
  let claimRewardsEvent = changetype<ClaimRewards>(newMockEvent())

  claimRewardsEvent.parameters = new Array()

  claimRewardsEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  claimRewardsEvent.parameters.push(
    new ethereum.EventParam(
      "rewardAmount",
      ethereum.Value.fromUnsignedBigInt(rewardAmount)
    )
  )

  return claimRewardsEvent
}

export function createClaimStatusChangedEvent(
  status: boolean
): ClaimStatusChanged {
  let claimStatusChangedEvent = changetype<ClaimStatusChanged>(newMockEvent())

  claimStatusChangedEvent.parameters = new Array()

  claimStatusChangedEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return claimStatusChangedEvent
}

export function createDepositRemovedEvent(user: Address): DepositRemoved {
  let depositRemovedEvent = changetype<DepositRemoved>(newMockEvent())

  depositRemovedEvent.parameters = new Array()

  depositRemovedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return depositRemovedEvent
}

export function createDepositStatusChangedEvent(
  status: boolean
): DepositStatusChanged {
  let depositStatusChangedEvent = changetype<DepositStatusChanged>(
    newMockEvent()
  )

  depositStatusChangedEvent.parameters = new Array()

  depositStatusChangedEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return depositStatusChangedEvent
}

export function createDepositedEvent(user: Address, amount: BigInt): Deposited {
  let depositedEvent = changetype<Deposited>(newMockEvent())

  depositedEvent.parameters = new Array()

  depositedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositedEvent
}

export function createInitializedEvent(
  startDate: BigInt,
  endDate: BigInt,
  totalAllocation: BigInt,
  allocationPerSecond: BigInt
): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "startDate",
      ethereum.Value.fromUnsignedBigInt(startDate)
    )
  )
  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "endDate",
      ethereum.Value.fromUnsignedBigInt(endDate)
    )
  )
  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "totalAllocation",
      ethereum.Value.fromUnsignedBigInt(totalAllocation)
    )
  )
  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "allocationPerSecond",
      ethereum.Value.fromUnsignedBigInt(allocationPerSecond)
    )
  )

  return initializedEvent
}

export function createOwnershipTransferStartedEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferStarted {
  let ownershipTransferStartedEvent = changetype<OwnershipTransferStarted>(
    newMockEvent()
  )

  ownershipTransferStartedEvent.parameters = new Array()

  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferStartedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRequestedEvent(
  user: Address,
  requestId: BigInt,
  amount: BigInt
): Requested {
  let requestedEvent = changetype<Requested>(newMockEvent())

  requestedEvent.parameters = new Array()

  requestedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  requestedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  requestedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return requestedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createTrenTokenSetEvent(trenToken: Address): TrenTokenSet {
  let trenTokenSetEvent = changetype<TrenTokenSet>(newMockEvent())

  trenTokenSetEvent.parameters = new Array()

  trenTokenSetEvent.parameters.push(
    new ethereum.EventParam("trenToken", ethereum.Value.fromAddress(trenToken))
  )

  return trenTokenSetEvent
}

export function createUpdatedRewardsPerShareEvent(
  timestamp: BigInt,
  totalDepositedAmount: BigInt,
  rewardPerShare: BigInt
): UpdatedRewardsPerShare {
  let updatedRewardsPerShareEvent = changetype<UpdatedRewardsPerShare>(
    newMockEvent()
  )

  updatedRewardsPerShareEvent.parameters = new Array()

  updatedRewardsPerShareEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  updatedRewardsPerShareEvent.parameters.push(
    new ethereum.EventParam(
      "totalDepositedAmount",
      ethereum.Value.fromUnsignedBigInt(totalDepositedAmount)
    )
  )
  updatedRewardsPerShareEvent.parameters.push(
    new ethereum.EventParam(
      "rewardPerShare",
      ethereum.Value.fromUnsignedBigInt(rewardPerShare)
    )
  )

  return updatedRewardsPerShareEvent
}

export function createWithdrawnEvent(
  user: Address,
  id: BigInt,
  amount: BigInt
): Withdrawn {
  let withdrawnEvent = changetype<Withdrawn>(newMockEvent())

  withdrawnEvent.parameters = new Array()

  withdrawnEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawnEvent
}
