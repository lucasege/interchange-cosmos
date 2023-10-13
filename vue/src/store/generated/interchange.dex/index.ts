import { Client, registry, MissingWalletError } from 'interchange-client-ts'

import { BuyOrderBook } from "interchange-client-ts/interchange.dex/types"
import { DenomTrace } from "interchange-client-ts/interchange.dex/types"
import { DexPacketData } from "interchange-client-ts/interchange.dex/types"
import { NoData } from "interchange-client-ts/interchange.dex/types"
import { CreatePairPacketData } from "interchange-client-ts/interchange.dex/types"
import { CreatePairPacketAck } from "interchange-client-ts/interchange.dex/types"
import { SellOrderPacketData } from "interchange-client-ts/interchange.dex/types"
import { SellOrderPacketAck } from "interchange-client-ts/interchange.dex/types"
import { BuyOrderPacketData } from "interchange-client-ts/interchange.dex/types"
import { BuyOrderPacketAck } from "interchange-client-ts/interchange.dex/types"
import { Params } from "interchange-client-ts/interchange.dex/types"
import { SellOrderBook } from "interchange-client-ts/interchange.dex/types"


export { BuyOrderBook, DenomTrace, DexPacketData, NoData, CreatePairPacketData, CreatePairPacketAck, SellOrderPacketData, SellOrderPacketAck, BuyOrderPacketData, BuyOrderPacketAck, Params, SellOrderBook };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				SellOrderBook: {},
				SellOrderBookAll: {},
				BuyOrderBook: {},
				BuyOrderBookAll: {},
				DenomTrace: {},
				DenomTraceAll: {},
				
				_Structure: {
						BuyOrderBook: getStructure(BuyOrderBook.fromPartial({})),
						DenomTrace: getStructure(DenomTrace.fromPartial({})),
						DexPacketData: getStructure(DexPacketData.fromPartial({})),
						NoData: getStructure(NoData.fromPartial({})),
						CreatePairPacketData: getStructure(CreatePairPacketData.fromPartial({})),
						CreatePairPacketAck: getStructure(CreatePairPacketAck.fromPartial({})),
						SellOrderPacketData: getStructure(SellOrderPacketData.fromPartial({})),
						SellOrderPacketAck: getStructure(SellOrderPacketAck.fromPartial({})),
						BuyOrderPacketData: getStructure(BuyOrderPacketData.fromPartial({})),
						BuyOrderPacketAck: getStructure(BuyOrderPacketAck.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						SellOrderBook: getStructure(SellOrderBook.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getSellOrderBook: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SellOrderBook[JSON.stringify(params)] ?? {}
		},
				getSellOrderBookAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SellOrderBookAll[JSON.stringify(params)] ?? {}
		},
				getBuyOrderBook: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BuyOrderBook[JSON.stringify(params)] ?? {}
		},
				getBuyOrderBookAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BuyOrderBookAll[JSON.stringify(params)] ?? {}
		},
				getDenomTrace: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DenomTrace[JSON.stringify(params)] ?? {}
		},
				getDenomTraceAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DenomTraceAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: interchange.dex initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.InterchangeDex.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySellOrderBook({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.InterchangeDex.query.querySellOrderBook( key.index)).data
				
					
				commit('QUERY', { query: 'SellOrderBook', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySellOrderBook', payload: { options: { all }, params: {...key},query }})
				return getters['getSellOrderBook']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QuerySellOrderBook API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySellOrderBookAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.InterchangeDex.query.querySellOrderBookAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.InterchangeDex.query.querySellOrderBookAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'SellOrderBookAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySellOrderBookAll', payload: { options: { all }, params: {...key},query }})
				return getters['getSellOrderBookAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QuerySellOrderBookAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBuyOrderBook({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.InterchangeDex.query.queryBuyOrderBook( key.index)).data
				
					
				commit('QUERY', { query: 'BuyOrderBook', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBuyOrderBook', payload: { options: { all }, params: {...key},query }})
				return getters['getBuyOrderBook']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBuyOrderBook API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBuyOrderBookAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.InterchangeDex.query.queryBuyOrderBookAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.InterchangeDex.query.queryBuyOrderBookAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'BuyOrderBookAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBuyOrderBookAll', payload: { options: { all }, params: {...key},query }})
				return getters['getBuyOrderBookAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBuyOrderBookAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDenomTrace({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.InterchangeDex.query.queryDenomTrace( key.index)).data
				
					
				commit('QUERY', { query: 'DenomTrace', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDenomTrace', payload: { options: { all }, params: {...key},query }})
				return getters['getDenomTrace']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDenomTrace API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDenomTraceAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.InterchangeDex.query.queryDenomTraceAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.InterchangeDex.query.queryDenomTraceAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'DenomTraceAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDenomTraceAll', payload: { options: { all }, params: {...key},query }})
				return getters['getDenomTraceAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDenomTraceAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgCancelSellOrder({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.InterchangeDex.tx.sendMsgCancelSellOrder({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCancelSellOrder:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCancelSellOrder:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCancelBuyOrder({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.InterchangeDex.tx.sendMsgCancelBuyOrder({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCancelBuyOrder:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCancelBuyOrder:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendSellOrder({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.InterchangeDex.tx.sendMsgSendSellOrder({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendSellOrder:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendSellOrder:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendCreatePair({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.InterchangeDex.tx.sendMsgSendCreatePair({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendCreatePair:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendCreatePair:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendBuyOrder({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.InterchangeDex.tx.sendMsgSendBuyOrder({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendBuyOrder:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendBuyOrder:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgCancelSellOrder({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.InterchangeDex.tx.msgCancelSellOrder({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCancelSellOrder:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCancelSellOrder:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCancelBuyOrder({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.InterchangeDex.tx.msgCancelBuyOrder({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCancelBuyOrder:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCancelBuyOrder:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendSellOrder({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.InterchangeDex.tx.msgSendSellOrder({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendSellOrder:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendSellOrder:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendCreatePair({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.InterchangeDex.tx.msgSendCreatePair({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendCreatePair:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendCreatePair:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendBuyOrder({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.InterchangeDex.tx.msgSendBuyOrder({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendBuyOrder:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendBuyOrder:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
