import React from 'react';
import { Grid, Box, Button, Flex } from '@makerdao/ui-components';
import { connect } from 'react-redux';

import { AccountTypes } from '../../utils/constants';

import LedgerStep from './LedgerStep';
import Sidebar from './shared/Sidebar';
import Header from './shared/Header';
import Stepper from './shared/Stepper';
import ButtonCard from './shared/ButtonCard';
import WalletIcon from './shared/WalletIcon';
import AccountInfo from './shared/AccountInfo';
import TwoColumnSidebarLayout from './shared/TwoColumnSidebarLayout';
import faqs from './data/faqs';
import { addMkrAndEthBalance } from './utils';
import { HotWalletTag, ColdWalletTag } from './shared/Tags';

import ChooseMKRBalanceStep from './ChooseMKRBalanceStep';

import linkImg from '../../imgs/onboarding/link.svg';

import { setColdWallet, resetColdWallet } from '../../reducers/onboarding';
import { setActiveAccount } from '../../reducers/accounts';

import {
  connectHardwareAccounts,
  addHardwareAccount
} from '../../reducers/accounts';

const SelectAWalletStep = ({
  active,
  onTrezorSelected,
  onLedgerSelected,
  onCancel
}) => {
  return (
    <Grid gridRowGap="m" alignContent="start">
      <Header
        mt={[0, 0, 0, 'l']}
        title="Select a cold wallet"
        subtitle="Select the cold wallet that holds your MKR. This selection will
      enable you to vote and will not relinquish the custody that you
      have over your MKR."
      />
      <ButtonCard
        icon={<WalletIcon provider="trezor" />}
        title="Trezor"
        subtitle="Connect via USB and unlock."
        buttonText="Connect"
        onNext={onTrezorSelected}
      />
      <ButtonCard
        icon={<WalletIcon provider="ledger" />}
        title="Ledger"
        subtitle="Open and unlock wallet."
        buttonText="Connect"
        onNext={onLedgerSelected}
      />
      <Flex justifyContent="right">
        <Button variant="secondary-outline" onClick={onCancel}>
          Change hot wallet
        </Button>
      </Flex>
    </Grid>
  );
};

const ConfirmWalletStep = ({
  active,
  hotWallet,
  coldWallet,
  onConfirm,
  onCancel
}) => {
  return (
    <Grid gridRowGap="l" alignContent="start">
      <Header
        mt={[0, 0, 0, 'l']}
        title="Link hot and cold wallet"
        subtitle="Linking your hot and cold wallet will enable you to vote while your MKR is still stored in your cold wallet."
      />
      <Grid>
        <AccountInfo account={coldWallet} tag={<ColdWalletTag />} />
        <Box gridColumn="1" mb="-7px" justifySelf="center">
          <img src={linkImg} alt="" />
        </Box>
        <Box
          gridColumn="2"
          alignSelf="center"
          fontWeight="medium"
          color="#48495F"
        >
          <p>You are linking the above cold wallet to the below hot wallet</p>
        </Box>
        <AccountInfo account={hotWallet} tag={<HotWalletTag />} />
      </Grid>
      <Grid
        gridRowGap="xs"
        gridColumnGap="s"
        gridTemplateColumns={['1fr', 'auto auto']}
        justifySelf={['stretch', 'end']}
      >
        <Button variant="secondary-outline" onClick={onCancel}>
          Change wallet
        </Button>
        <Button onClick={onConfirm}>Link wallets</Button>
      </Grid>
    </Grid>
  );
};

class ChooseColdWallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      faqs: faqs.coldWallet,
      availableAccounts: [],
      connecting: false,
      error: false
    };
  }

  toSelectAWallet = () => {
    this.props.resetColdWallet();
    this.setState({
      step: 0,
      faqs: faqs.coldWallet
    });
  };

  connectWallet = async (accountType, options = {}) => {
    this.setState({
      connecting: true,
      error: false
    });
    this.toSelectMKRBalance();
    try {
      const accounts = await this.props.connectHardwareAccounts(
        accountType,
        options
      );
      const accountsWithBalances = await Promise.all(
        accounts.map(async account => {
          return await addMkrAndEthBalance(account);
        })
      );
      this.setState({
        availableAccounts: accountsWithBalances,
        connecting: false
      });
    } catch (err) {
      this.setState({
        connecting: false,
        error: true
      });
    }
  };

  onTrezorSelected = async () => {
    this.connectWallet(AccountTypes.TREZOR);
  };

  onLedgerSelected = () => {
    this.setState({
      step: 1,
      faqs: faqs.ledger
    });
  };

  onLedgerLiveSelected = () => {
    this.connectWallet(AccountTypes.LEDGER, { live: true });
  };

  onLedgerLegacySelected = () => {
    this.connectWallet(AccountTypes.LEDGER, { live: false });
  };

  toSelectMKRBalance = () => {
    this.setState({
      step: 2,
      faqs: faqs.selectMKRBalance
    });
  };

  onAccountSelected = async account => {
    await this.props.addHardwareAccount(account.address, account.type);
    this.props.setColdWallet(account);
    this.props.setActiveAccount(this.props.coldWallet.address);
    this.toConfirmWallet();
  };

  toConfirmWallet = () => {
    this.setState({
      step: 3,
      faqs: faqs.selectMKRBalance
    });
  };

  render() {
    return (
      <TwoColumnSidebarLayout
        sidebar={
          <Sidebar faqs={this.state.faqs} hotWallet={this.props.hotWallet} />
        }
      >
        <Stepper step={this.state.step}>
          <SelectAWalletStep
            onTrezorSelected={this.onTrezorSelected}
            onLedgerSelected={this.onLedgerSelected}
            onCancel={this.props.onCancel}
          />
          <LedgerStep
            onLedgerLive={this.onLedgerLiveSelected}
            onLedgerLegacy={this.onLedgerLegacySelected}
            onCancel={this.toSelectAWallet}
          />
          <ChooseMKRBalanceStep
            accounts={this.state.availableAccounts}
            connecting={this.state.connecting}
            error={this.state.error}
            onAccountSelected={this.onAccountSelected}
            onCancel={this.toSelectAWallet}
          />
          <ConfirmWalletStep
            hotWallet={this.props.hotWallet}
            coldWallet={this.props.coldWallet}
            connecting={this.state.connecting}
            onConfirm={this.props.onComplete}
            onCancel={this.toSelectAWallet}
          />
        </Stepper>
      </TwoColumnSidebarLayout>
    );
  }
}

export default connect(
  state => ({
    ...state.onboarding
  }),
  {
    connectHardwareAccounts,
    addHardwareAccount,
    setColdWallet,
    resetColdWallet,
    setActiveAccount
  }
)(ChooseColdWallet);
