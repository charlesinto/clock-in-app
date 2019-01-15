import React, { Component } from 'react';
import { 
    Container, Header, Icon, Button, Title, Body, Content 
} from 'native-base';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import {
    LoginCard, LoginCardSection, InputTag, ForgotPassword
 } from './common';

class LogginForm extends Component {
    constructor(){
        super();
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
    }
    emailChange(email){
       this.props.emailChange({ email });
    }
    passwordChange(password){
        this.props.passwordChange({ password });
    }
    loginHandler(){
        const { email, password } = this.props;
        this.props.authenticateUser({ email, password });
    }
    render(){
        const { 
            containerStyles, keyoardContainer, container, cardContainer,
            cardSection, iconStyle, input, forgotPassword
        } = styles;
        return (
        <Container 
            style={{ flex: 1 }}
        >
            <Header>
                <Body>
                    <View style={{marginLeft: 10 }}>
                        <Title>
                                timeTicker
                            
                        </Title>
                    </View>
                </Body>
            </Header>
            <View style={containerStyles}>
                <Content>
                <KeyboardAvoidingView behavior="padding" style={keyoardContainer}>
                        <View style={container}>
                            <LoginCard style={cardContainer}>
                                <LoginCardSection style={cardSection}>
                                    <Text style ={iconStyle}>
                                        <Icon name="ios-mail" />
                                    </Text>
                                    
                                    <InputTag 
                                        style ={input}
                                        placeholder={'email address'} 
                                        label={'email'}
                                        autoCorrect={false} 
                                        keyboardType={'email-address'}
                                        onChangeText={this.emailChange}
                                        value={this.props.email}
                                    />
                                </LoginCardSection>
                                
                                <LoginCardSection style={cardSection} >
                                    <Text style ={iconStyle}>
                                        <Icon name="ios-lock" />
                                    </Text>
                                    <InputTag 
                                            style ={input}
                                            placeholder={'password'} 
                                            label={'Password'}
                                            autoCorrect
                                            onChangeText={this.passwordChange}
                                            value={this.props.password}
                                        />
                                </LoginCardSection>
                                    <ForgotPassword style={forgotPassword} onPress={() => console.log()} text={'ForgotPassword?'}/>
                            </LoginCard>
                            <View style={{width: '100%'}}>
                                <Button onPress={this.loginHandler} style={{backgroundColor: '#669933' }} rounded full>
                                    <Text style={{color: '#fff', fontSize: 16 }}>
                                        Log in
                                    </Text>
                                </Button>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </Content>
            </View>
        </Container>
        );
    }
}

const styles = {
    containerStyles: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 8,
        marginRight: 8
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#bdbdbd',
        flex: 4,
    },
    iconStyle: {
        flex: 0.5,
        marginBottom: 10
    },
    keyoardContainer:{
        flex: 1
    },
    container: {
        
        flexGrow: 1,
        position: 'relative',
        flexDirection:'column',
        justifyContent:'space-between'
        
    },
    cardContainer: { 
        flex:1,
        flexGrow: 1,
        flexDirection: 'column',
        position: 'relative',
        top: 40
    },
    cardSection: {
       height: 60,
       marginLeft: 10,
       marginRight: 10,
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'flex-end'
    },
    loginButtonStyle:{
        backgroundColor: '#1976d2',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.2,
        width: '90%',
        alignSelf: 'center',
        height: 35,
        elevation: 2,
        padding: 5,
        marginTop: 25,
        color: '#fff'
    },
    forgotPassword:{
        alignSelf: 'flex-end',
        marginTop: 10,
        marginRight: 10
    }
}

const mapStateToProps = state => {
    const { email, password } = state;
    return { email, password };
};

export default connect(mapStateToProps, actions)(LogginForm);
