import React from "react";
import styles from "./styles";
import { Container } from "native-base";
import PlaidAuth from "../PlaidAuth/PlaidAuth";

export interface Props {
    navigation: any;
}

interface Account {
    id: string;
    name: string;
    type: string;
    subtype: string;
    mask: string;
}

interface Institution {
    name: string;
    institution_id: string;
}

interface PlaidData {
    link_session_id?: string;
    public_token: string;
    account_id?: string;
    account?: Account;
    accounts?: Account[];
    institution?: Institution;
}

export interface State {
    plaidData?: PlaidData;
    error: string;
    loading: boolean;
}

class AddWalletAccountScreen extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            loading: false,
        };
    }

    handleOnPlaidLinkComplete(metadata) {
        // Optionally capture Link flow events, streamed through
        // this callback as your users connect an Item to Plaid.
        // For example:
        // eventName = "TRANSITION_VIEW"
        // metadata  = {
        //   link_session_id: "123-abc",
        //   mfa_type:        "questions",
        //   timestamp:       "2017-09-14T14:42:19.350Z",
        //   view_name:       "MFA",
        // }
        console.log('metadata: ' + JSON.stringify(metadata));
        console.log('SETTING STATE');

        if (!!metadata && !!metadata.public_token && metadata.public_token.length > 0) {
            this.setState({
                plaidData: metadata,
            });
        }
    }

    handleEventTracking(event) {
        // Optionally capture Link flow events, streamed through
        // this callback as your users connect an Item to Plaid.
        // For example:
        // eventName = "TRANSITION_VIEW"
        // metadata  = {
        //   link_session_id: "123-abc",
        //   mfa_type:        "questions",
        //   timestamp:       "2017-09-14T14:42:19.350Z",
        //   view_name:       "MFA",
        // }
        /**
         * eventName: TRANSITION_VIEW
            metadata: {"error_code":null,"error_message":null,"error_type":null,
            "exit_status":null,"institution_search_query":null,"mfa_type":null,"institution_name":"US Bank","
            institution_id":"ins_6","link_session_id":"9b31fba1-407d-46fb-a344-9f4722018748","request_id":"smeONMwyxIifyd6",
            "timestamp":"2019-05-18T23:08:53.273Z","view_name":"SELECT_ACCOUNT"}
         */
        console.log('eventName: ' + event.eventName);
        console.log('metadata: ' + JSON.stringify(event.metadata));
    }

    handleOnExit() {
        // handle the case when your user exits Link
        console.log('Failed to link');
        //
        this.setState({
            error: 'Please Retry',
            loading: false
        });
    }

    render() {
        return (
            <Container>
                <PlaidAuth
                    completePlaidLink={(metadata?: PlaidData) => this.handleOnPlaidLinkComplete(metadata)}
                    handleEvent={(event?: any) => this.handleEventTracking(event)}
                    navigation={this.props.navigation}
                />
            </Container >
        )
    }
}

export default AddWalletAccountScreen;