import { GoogleSpreadsheet } from 'google-spreadsheet';
import React from "react";

// Config variables
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID || '';
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID || '';
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY
    ? process.env.GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n')
    : '';

// GoogleSpreadsheet Initialize
const doc = new GoogleSpreadsheet(SPREADSHEET_ID, {
    apiKey: GOOGLE_SERVICE_PRIVATE_KEY,
});

interface Row {
    eth_address: string;
    principle: string;
    ensure_people: string;
    first_name: string;
    last_name: string;
    email: string;
}

// Append Function
const appendSpreadsheet = async (row: Row) => {
    try {
        // loads document properties and worksheets
        await doc.loadInfo();

        const sheet = doc.sheetsById[Number(SHEET_ID)];
        await sheet.addRow({ ...row });
    } catch (e) {
        console.error('Error: ', e);
    }
};

export default function submitForm(e: React.FormEvent) {
    e.preventDefault();

    const form = {
        eth_address: '',
        principle: '',
        ensure_people: '',
        first_name: '',
        last_name: '',
        email: '',
    };

    if (
        form.eth_address &&
        form.principle &&
        form.ensure_people &&
        form.first_name &&
        form.last_name &&
        form.email
    ) {
        // Data add for append
        const newRow: Row = {
            eth_address: form.eth_address,
            principle: form.principle,
            ensure_people: form.ensure_people,
            first_name: form.first_name,
            last_name: form.last_name,
            email: form.email,
        };

        appendSpreadsheet(newRow).then(() => {
            console.log('Appended');
        });
    }
};