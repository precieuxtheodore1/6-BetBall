// Simple payment service scaffold
module.exports = {
  // debit wallet (internal)
  debitWallet: async function(walletModel, userId, amount){
    const w = await walletModel.findOne({ where: { userId }});
    if(!w) throw new Error('Wallet not found');
    const bal = parseFloat(w.cdf_balance);
    const amt = parseFloat(amount);
    if(bal < amt) throw new Error('Insufficient funds');
    w.cdf_balance = (bal - amt).toFixed(2);
    await w.save();
    return w;
  },

  creditWallet: async function(walletModel, userId, amount){
    const w = await walletModel.findOne({ where: { userId }});
    if(!w) throw new Error('Wallet not found');
    const bal = parseFloat(w.cdf_balance);
    const amt = parseFloat(amount);
    w.cdf_balance = (bal + amt).toFixed(2);
    await w.save();
    return w;
  },

  // stub: integrate real payment providers here
  startMobileMoneyPayment: async function(payload){
    // payload: { phone, amount, provider }
    // return provider response or URL
    return { ok: true, message: 'Simulated mobile money started' };
  },

  verifyCryptoTx: async function(txid){
    // verify transaction on blockchain (placeholder)
    return { ok: false, message: 'Not implemented' };
  }
};
