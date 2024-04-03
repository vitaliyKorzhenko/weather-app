import { LocationItem } from './LocationItem';

export interface SearchContextTypes {
    locations: LocationItem[];
    inputText: string;
    setInputText: (text: string) => void;
}
