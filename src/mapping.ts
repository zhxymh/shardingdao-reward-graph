import { Deposit } from '../generated/ShardingDAOMining/ShardingDAOMiningDelegator'
import { Transfer } from '../generated/MarketingMining/SHDToken'
import { ShardingDAOMiningDeposit, MarketingMiningTransfer } from '../generated/schema'
import { Address } from '@graphprotocol/graph-ts'

// export function handleMarketingMiningWithdraw(event: Withdraw): void{
//   let id = event.transaction.hash.toHexString()
//   let withdraw = new MarketingMiningWithdraw(id)
//   withdraw.user = event.params.user
//   withdraw.pid = event.params.pid
//   withdraw.amount = event.params.amount
//   withdraw.blockNumber = event.block.number
//   withdraw.blockHash = event.block.hash
//   withdraw.save()
// }

// ETH
//let MARKETING_ADDRESS = "0x0feCcB11C5B61B3922C511d0f002c0b72D770dCE"
// BSC
//let MARKETING_ADDRESS = "0x162017bd427604433CC93Ba3D0045D8A047F226D"
// kovan
let MARKETING_ADDRESS = "0xb58Dc64176285C9955624B029443a2b1F325d5D2"

export function handleMarketingMiningTransfer(event: Transfer): void{
  if(event.params.from != Address.fromHexString(MARKETING_ADDRESS)){
    return
  }

  let id = event.transaction.hash.toHexString() + event.params.to.toHexString()
  let transfer = new MarketingMiningTransfer(id)
  transfer.sender = event.params.from
  transfer.user = event.params.to
  transfer.amount = event.params.value
  transfer.blockNumber = event.block.number
  transfer.blockHash = event.block.hash
  transfer.save()
}

export function handleShardingDAOMiningDeposit(event: Deposit): void{
  let id = event.transaction.hash.toHexString()
  let deposit = new ShardingDAOMiningDeposit(id)
  deposit.user = event.params.user
  deposit.pid = event.params.pid
  deposit.amount = event.params.amount
  deposit.weight = event.params.weight
  deposit.blockNumber = event.block.number
  deposit.blockHash = event.block.hash
  deposit.save()
}