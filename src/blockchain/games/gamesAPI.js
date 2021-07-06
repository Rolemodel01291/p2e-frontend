// A mock function to mimic making an async request for data
import columns from '../../data/columns';
import api from '../../api/api';

export function fetchColumns() {
    return columns;
}

export async function fetchRows() {
    const rows = await api().get('games/page/1'); 
    return rows;
}

export async function fetchDetails(id) {
    const details = await api().get(`game/${id}`); 
    return details;
}

export async function fetchNewItems() {
    const details = await api().get('games/new'); 
    return details;
}



  
  