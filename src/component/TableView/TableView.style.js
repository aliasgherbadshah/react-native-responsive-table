import { StyleSheet } from "react-native";

export default StyleSheet.create({
     
    header_text_container:{
        height:50,
        justifyContent:"center",
        alignItems:"center"
    },
    column_style: {
        backgroundColor: "#EFEFEF",
        alignItems: "center"
    },
    header_text: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 14,
        fontWeight: "600"
    },
    row_container: {
        backgroundColor: "white",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        borderBottomWidth: 1,
        marginBottom:5,
        borderBottomColor: "#EFEFEF"
    },
    row_text: {
        color:"#858383",
        fontSize:12
    },
    disable_horizontal_scroll:{
        width:"100%"
    }
})