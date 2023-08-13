import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
// ----------------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    item: {
        fontSize: 12,
        marginBottom: 8,
    },
    total: {
        fontSize: 16,
        marginTop: 20,
    },
});
// ----------------------------------------------------------------------------------------------------

const PDFBill = ({ items, totalPrice }) => (
    <PDFViewer>
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.title}>Bill Details</Text>
                {items.map((item, index) => (
                    <View key={index} style={styles.item}>
                        <Text>{item.name}: ₹{item.price}</Text>
                        <Text>{item.description}</Text>
                    </View>
                ))}
                <Text style={styles.total}>Total Price: ₹{totalPrice.toFixed(2)}</Text>
            </Page>
        </Document>
    </PDFViewer>
);

export default PDFBill;
