import React, { Component } from "react";
import styles from "./TableView.style";
import { View, Text } from "react-native"

export default class TableView extends Component {
    render() {
        return (
            <>
                <View style={styles.table_containe}>
                    {
                        this.props.headers.map((data) => {
                            return (
                                <View style={{ ...styles.column_style, width: (100 / this.props.headers.length) + "%" }}>
                                    <Text style={styles.header_text}>{data.name}</Text>
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
                </View>
            </>
        )
    }
}