# react-native-responsive-table

This is an cross-platform component which provide an responsive data table view for both Android and IOS.

It is easy to use component which dynamicly fit within your view and adjust its area accordigly.
# Installation and Usage
## Installation
just simply install the library the library with
```sh
$ npm install react-native-responsive-table
```
and thats it no aditional installation require you are good to go.

## Usage
- first import the "TableView" component from react-native-responsive-table.
```javascript
import {TableView} from "react-native-responsive-table"
```

- now simply render the "TableView" component.
```javascript
import {TableView} from "react-native-responsive-table"

<TableView 
    headers={[
        {
            name:"S.no.",
            reference_key:"no",
        },
        {
            name:"Name",
            reference_key:"name",
        },
        {
            name:"Age",
            reference_key:"age",
        },]}
    rows={[
            {
                no:1,
                name:"jhon",
                age:25
            },
            {
                no:2,
                name:"snow",
                age:23
            }
        ]}
/>
```
- "reference_key" contain the value from which it extract the values from objects passed in rows array

> **Make sure that name to pass "reference_key" in headers. By default name will be consider as a "reference_key" :-** take the refrence of above example

## Render custom View in row
you can also render your custom view insted of simple text string in rows.

```javascript
import {TableView} from "react-native-responsive-table";
import {TouchableOpacity, Text} from "react-native";

<TableView 
    headers={[
        {
            name:"S.no.",
            reference_key:"no",
        },
        {
            name:"Name",
            reference_key:"name",
        },
        {
            name:"Age",
            reference_key:"age",
        },
        {
            name:"Actions",
            reference_key:"action",
        }
    ]}
    rows={[
            {
                no:1,
                name:"jhon",             
                age:25,
                action:(
                    <TouchableOpacity>
                        <Text>X</Text>
                    </TouchableOpacity>
                )
            },
            {
                no:2,
                name:"snow",
                age:23,
                action:(
                    <TouchableOpacity>
                        <Text>X</Text>
                    </TouchableOpacity>
                )
            }
        ]}
/>
```
it gives you full power to design the row cantaine inside table view so that you can freally move around insede table view.

> **It's recommended to use percentage value at setting heights and width of elements to make your component responsive accross multiple devices**

by default table view adjust itself in available width but you cn also make it horizontal scrollable by playing with following properties.

## Properties

 name            | description                    | type | default
:--------------- |:------------------------------ |:-------- |:--------
 width   |  it set the width of table view (by defaul it is off full width of the device)  | Number & Percent | device width (100%)
  height   | it set the height of table view (by defaul it is off 50% of the device)  | Number & Percent | 50% (device height)
 horizontalScroll | to enable the horizontal scroll within table  | Boolean | false
 columnWidth   | Set the width of column (only works when horizontalScroll is enabled)| Number | 50
 headerHeight   | to set the height of header on table   | Number | 50
 
## **TO DO :-**
- make table container style adjustable
- insert customs style to headers and rows

## **ABOUT :-**

Nothing is perfect in this world as this package is in its initial age so you may face some bugs and difficulties by using this but i am intresterd to know about your thoughts regarding this package so i can develop it more further and i hope that some of you may  interested helping me with this package and give me new ideas that help me building this more further. 

you can mail me your reviews and idea to my gmail account _**aliasgherbadshah128@gmail.com**_