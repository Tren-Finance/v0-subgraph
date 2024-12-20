import { BigInt } from "@graphprotocol/graph-ts"
import {
  AddressesSet as AddressesSetEvent,
  Approval as ApprovalEvent,
  ClaimRewards as ClaimRewardsEvent,
  ClaimStatusChanged as ClaimStatusChangedEvent,
  DepositRemoved as DepositRemovedEvent,
  DepositStatusChanged as DepositStatusChangedEvent,
  Deposited as DepositedEvent,
  Initialized as InitializedEvent,
  OwnershipTransferStarted as OwnershipTransferStartedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Requested as RequestedEvent,
  Transfer as TransferEvent,
  TrenTokenSet as TrenTokenSetEvent,
  UpdatedRewardsPerShare as UpdatedRewardsPerShareEvent,
  Withdrawn as WithdrawnEvent
} from "../generated/SingleLiquidityProvider/SingleLiquidityProvider"
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
  Withdrawn,
  User
} from "../generated/schema"

export function handleAddressesSet(event: AddressesSetEvent): void {
  let entity = new AddressesSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.treasury = event.params.treasury
  entity.stable = event.params.stable
  entity.vault = event.params.vault
  entity.debtToken = event.params.debtToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimRewards(event: ClaimRewardsEvent): void {
  let entity = new ClaimRewards(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.rewardAmount = event.params.rewardAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimStatusChanged(event: ClaimStatusChangedEvent): void {
  let entity = new ClaimStatusChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositRemoved(event: DepositRemovedEvent): void {
  let entity = new DepositRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositStatusChanged(
  event: DepositStatusChangedEvent
): void {
  let entity = new DepositStatusChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposited(event: DepositedEvent): void {
  let user = User.load(event.params.user.toHex())
  if (user == null) {
    user = new User(event.params.user.toHex())
    user.totalDeposited = BigInt.fromI32(0)
    user.totalWithdrawn = BigInt.fromI32(0)
    user.isActive = false
    user.tvl = BigInt.fromI32(0)
  }

  let entity = new Deposited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = user.id
  entity.amount = event.params.amount
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  user.totalDeposited = user.totalDeposited.plus(event.params.amount)
  user.isActive = user.totalDeposited.gt(user.totalWithdrawn)
  let decimals = BigInt.fromI32(10).pow(18);
  user.tvl = user.totalDeposited.minus(user.totalWithdrawn).div(decimals);
  user.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.startDate = event.params.startDate
  entity.endDate = event.params.endDate
  entity.totalAllocation = event.params.totalAllocation
  entity.allocationPerSecond = event.params.allocationPerSecond

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferStarted(
  event: OwnershipTransferStartedEvent
): void {
  let entity = new OwnershipTransferStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequested(event: RequestedEvent): void {
  let entity = new Requested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.requestId = event.params.requestId
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTrenTokenSet(event: TrenTokenSetEvent): void {
  let entity = new TrenTokenSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trenToken = event.params.trenToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdatedRewardsPerShare(
  event: UpdatedRewardsPerShareEvent
): void {
  let entity = new UpdatedRewardsPerShare(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.timestamp = event.params.timestamp
  entity.totalDepositedAmount = event.params.totalDepositedAmount
  entity.rewardPerShare = event.params.rewardPerShare

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let user = User.load(event.params.user.toHex())
  if (user == null) {
    user = new User(event.params.user.toHex())
    user.totalDeposited = BigInt.fromI32(0)
    user.totalWithdrawn = BigInt.fromI32(0)
    user.isActive = false
    user.tvl = BigInt.fromI32(0)
  }

  let entity = new Withdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = user.id
  entity.amount = event.params.amount
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  user.totalWithdrawn = user.totalWithdrawn.plus(event.params.amount)
  user.isActive = user.totalDeposited.gt(user.totalWithdrawn)
  let decimals = BigInt.fromI32(10).pow(18);
  user.tvl = user.totalDeposited.minus(user.totalWithdrawn).div(decimals);
  user.save()
}
