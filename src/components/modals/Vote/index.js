import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../Button';
import { getActiveAccount } from '../../../reducers/accounts';
import { modalClose } from '../../../reducers/modal';
import { sendVote } from '../../../reducers/vote';
import { StyledTitle, StyledBlurb, StyledTop } from '../shared/styles';
import Transaction from '../shared/Transaction';

class Vote extends Component {
  state = {
    step: 1
  };

  componentDidUpdate(prevProps) {
    if (this.props.voteTxHash !== prevProps.voteTxHash) this.nextStep();
  }

  nextStep = () => {
    this.setState(state => ({ step: state.step + 1 }));
  };

  // HANDLE ALL THE WAYS USERS COULD BE SILLY eg validate inputs, reject transaction, why did this tx fail
  render() {
    switch (this.state.step) {
      case 1:
        const { proposal } = this.props.modalProps;
        return (
          <Fragment>
            <StyledTop>
              <StyledTitle>Confirmation</StyledTitle>
            </StyledTop>
            <StyledBlurb>
              You will be voting for{' '}
              <strong style={{ color: '#212536' }}>{proposal.title}</strong>{' '}
              please confirm vote below. Vote can be withdrawn at anytime
            </StyledBlurb>
            <StyledBlurb>
              Your voting power: {this.props.activeAccount.proxy.votingPower}{' '}
              MKR
            </StyledBlurb>
            <div
              style={{
                margin: 'auto',
                marginTop: '18px'
              }}
            >
              <Button
                slim
                onClick={() => this.props.sendVote(proposal.address)}
              >
                Confirm
              </Button>
            </div>
          </Fragment>
        );
      case 2:
        return (
          <Transaction
            txHash={this.props.voteTxHash}
            nextStep={() => window.location.reload()}
            network={this.props.network}
            lastCard={true}
            confirming={this.props.confirming}
          />
        );
      default:
        return null;
    }
  }
}

Vote.propTypes = {
  voteTxHash: PropTypes.string,
  sendVote: PropTypes.func,
  modalProps: PropTypes.object
};

Vote.defaultProps = {
  voteTxHash: ''
};

export default connect(
  state => ({
    activeAccount: getActiveAccount(state),
    voteTxHash: state.vote.txHash,
    confirming: state.vote.confirming,
    network: state.metamask.network === 'kovan' ? 'kovan' : 'mainnet'
  }),
  { modalClose, sendVote }
)(Vote);