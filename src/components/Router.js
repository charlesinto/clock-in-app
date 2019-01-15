import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import Home from './LogginForm';

const ReactComponent = () => {
    return (
        <Router navigationBarStyle={styles.navBar} headerTitleStyle={styles.headerTitleStyle} titleStyle={styles.navTitle} >
            <Scene key="root" hideNavBar>
                <Scene key = "auth"  >
                    <Scene key="choprite" component={Home} title="timeTicker" hideNavBar />
                </Scene>
                {/* <Scene key="main">
                    <Scene key="home" component={Home} title='timeTicker' hideNavBar />
                </Scene> */}
                
            </Scene>
        </Router>
    )
}

const styles = StyleSheet.create({
    navBar: {
      backgroundColor: '#1976d2', // changing navbar color
    },
    navTitle: {
      color: '#fff', // changing navbar title color
    },
    headerTitleStyle: {
        textAlign: "center", 
        flex: 1,
        color: '#fff',
        fontSize: 16,
        fontWeight: '600' 
    }
  })

export default ReactComponent;
