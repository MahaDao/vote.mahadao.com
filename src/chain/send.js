//////////////////////////////////////////////////////////
//// Sign & send transactions to the ethereum network ////
//////////////////////////////////////////////////////////

import {
  getTxDetails,
  getMethodSig,
  getProxyFactory,
  getMkrAddress,
  getChief,
  encodeParameter
} from "./web3";
import { getProxyStatus } from "./read";
import {
  generateCallData,
  removeHexPrefix,
  stringToHex,
  etherToWei
} from "../utils/ethereum";
import ledgerSubprovider from "./ledger";

/**
 * @desc metamask send transaction
 * @param  {Object} transaction { from, to, value, data, gasPrice, gasLimit }
 * @return {Promise} tx
 */
export const web3MetamaskSendTransaction = transaction =>
  new Promise((resolve, reject) => {
    const from =
      transaction.from.substr(0, 2) === "0x"
        ? transaction.from
        : `0x${transaction.from}`;
    const to =
      transaction.to.substr(0, 2) === "0x"
        ? transaction.to
        : `0x${transaction.to}`;
    const value = transaction.value ? etherToWei(transaction.value) : "0x00";
    const data = transaction.data ? transaction.data : "0x";
    getTxDetails({
      from,
      to,
      data,
      value,
      gasPrice: transaction.gasPrice,
      gasLimit: transaction.gasLimit
    })
      .then(txDetails => {
        if (typeof window.web3 !== "undefined") {
          window.web3.eth.sendTransaction(txDetails, (err, txHash) => {
            if (err) {
              reject(err);
            }
            resolve(txHash);
          });
        } else {
          throw new Error(`Metamask is not installed`);
        }
      })
      .catch(error => reject(error));
  });

export const sendTransactionMulti = (type, tranasction) => {
  switch (type) {
    case "METAMASK":
      return web3MetamaskSendTransaction(tranasction);
    case "LEDGER":
      return ledgerSubprovider.signTransaction(tranasction);
  }
};

/**
 * @async @desc metamask send transaction
 * @param  {Object}  wallets { cold, hot }
 * @return {Promise} tx
 */
export const buildVoteProxy = async ({ cold, hot }) => {
  const factory = await getProxyFactory();
  const methodSig = getMethodSig("newVoteProxy(address,address)");
  const callData = generateCallData({
    method: methodSig,
    args: [removeHexPrefix(cold), removeHexPrefix(hot)]
  });
  const tx = { to: factory, from: cold, data: callData };
  console.log(tx);
  return web3MetamaskSendTransaction(tx);
};

/**
 * @async @desc metamask send transaction
 * @param  {Object} transferDetails { from, value }
 * @return {Promise} tx
 */
export const sendMkrToProxy = async ({ from, value }) => {
  const { proxy } = await getProxyStatus(from);
  const mkrToken = await getMkrAddress();
  const methodSig = getMethodSig("transfer(address,uint256)");
  // TODO error handle if isCold is false
  const weiAmtHex = stringToHex(etherToWei(value));
  const callData = generateCallData({
    method: methodSig,
    args: [removeHexPrefix(proxy), removeHexPrefix(weiAmtHex)]
  });
  const tx = { to: mkrToken, from, data: callData };
  return web3MetamaskSendTransaction(tx);
};

/**
 * @async @desc vote for a single proposal (in the form of an address)
 * @param {Object} voteDetails { acccount: { address, type }, proposal }
 * @return {Promise} tx
 */
export const voteProposal = async ({ account, proposal }) => {
  const chief = await getChief();
  const methodSig = getMethodSig("vote(address[])");
  const proposalParam = encodeParameter("address[]", [proposal]);
  const callData = generateCallData({
    method: methodSig,
    args: [removeHexPrefix(proposalParam)]
  });
  const tx = { to: chief, from: account.address, data: callData };
  return sendTransactionMulti(account.type, tx);
};
