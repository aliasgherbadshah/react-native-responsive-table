import React, { Component } from "react";
import styles from "./TableView.style";
import { View, Text, ScrollView, Dimensions } from "react-native"

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class TableView extends Component {
    state = {
        column_width: 0
    }
    componentDidMount() {

        if (this.props.width && /^\d+(\.\d+)?%$/.test(this.props.width)) {
            this.props.width = screenWidth + parseInt(this.props.width) / 100
        } else {
            this.props.width = parseInt(this.props.width)
        }

        if (this.props.height && /^\d+(\.\d+)?%$/.test(this.props.height)) {
            this.props.height = screenHeight + parseInt(this.props.height) / 100
        } else {
            this.props.height = parseInt(this.props.height)
        }

        if (this.props.horizontalScroll) {
            this.setState({ column_width: this.props.columnWidth || 50 })
        } else {
            this.setState({ column_width: this.props.width || screenWidth * (100 / this.props.headers.length) / 100 })
        }
    }
    render() {
        return (
            <>
                <View style={{
                    width: this.props.width || screenWidth,
                    height: this.props.height || screenHeight * 50 / 100,
                }}>
                    <ScrollView bounces={false}>
                        <ScrollView bounces={false} horizontal contentContainerStyle={this.props.horizontalScroll ? {} : styles.disable_horizontal_scroll}>
                            {
                                this.props.headers.map((data) => {
                                    return (
                                        <View style={{ ...styles.column_style, width: this.state.column_width }} >
                                            <View style={{ ...styles.header_text_container, height: this.props.headerHeight || 50 }}>
                                                <Text style={styles.header_text}>{data.name}</Text>
                                            </View>
                                            {this.props.rows.map(obj => {
                                                return (
                                                    <View style={styles.row_container} >
                                                        {
                                                            typeof obj[data.reference_key || data.name] == "string" || typeof obj[data.reference_key || data.name] == "number" || typeof obj[data.reference_key || data.name] == "boolean" ?
                                                                <Text style={styles.row_text}>{obj[data.reference_key || data.name].toString()}</Text> :
                                                                obj[data.reference_key || data.name]
                                                        }
                                                    </View>
                                                )
                                            })}
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </ScrollView>
                </View>
            </>
        )
    }
}