import {JWT} from "google-auth-library";
import {GoogleSpreadsheet} from "google-spreadsheet";

// Config variables
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID || '';
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID || 0;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY?.replace(/\\n/g, "\n");


const SCOPES = ['https://www.googleapis.com/auth/spreadsheets',];

const jwtFromEnv = new JWT({
    email: GOOGLE_CLIENT_EMAIL, key: GOOGLE_SERVICE_PRIVATE_KEY, scopes: SCOPES,
});
const doc = new GoogleSpreadsheet(SPREADSHEET_ID, jwtFromEnv);

export interface Row {
    eth_address: string;
    principle: string;
    ensure_people: string;
    first_name: string;
    last_name: string;
    email: string;
    community_choice: string;
    hours_available: string;
    survey_motivation_1: string;
    survey_motivation_2: string;
    survey_motivation_3: string;
    survey_motivation_4: string;
    survey_motivation_5: string;
    survey_motivation_6: string;
    survey_project_1: string;
    survey_project_2: string;
    survey_experience_1: string;
    survey_experience_2: string;
    survey_experience_3: string;
}

// Append Function
export const appendSpreadsheet = async (row: Row) => {
    try {
        // loads document properties and worksheets
        await doc.loadInfo();
        const sheet = doc.sheetsById[Number(SHEET_ID)];
        await sheet.setHeaderRow(['eth_address', 'principle', 'ensure_people', 'first_name', 'last_name', 'email', 'community_choice', 'hours_available', 'survey_motivation_1', 'survey_motivation_2', 'survey_motivation_3', 'survey_motivation_4', 'survey_motivation_5', 'survey_motivation_6', 'survey_project_1', 'survey_project_2', 'survey_experience_1', 'survey_experience_2', 'survey_experience_3'])
        await sheet.addRow({...row});
    } catch (e) {
        console.error('Error: ', e);
    }
};