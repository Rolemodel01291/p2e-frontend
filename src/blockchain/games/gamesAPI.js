// A mock function to mimic making an async request for data
import columns from '../../data/columns';
import api from '../../api/api';

export function fetchColumns() {
    return columns;
}

// export async function fetchRows(page) {
//     const rows = await api().get(`games/page/${page}`); 
//     return rows;
// }

export async function fetchDetails(id) {
    const details = await api().get(`game/${id}`); 
    return details[0];
}

export async function fetchNewItems() {
    const details = await api().get('games/new'); 
    return details;
}

export async function fetchFilterGames(props) {
    const details = await api().get(`games/filter?blockchain=${props?.platform}&genre=${props?.category}&device=${props?.device}&status=${props?.status}&nft=${props?.nft}&f2p=${props?.f2p}&p2e=${props?.p2e}&sort=${props.sort}&direction=${props.direction}&page=${props.page}&is_new=${props.is_new}&keyword=${props.keyword}`);
    return details;
}

export async function fetchItemsSort(sort, direction) {
    const details = await api().get(`games/page/1?sort=${sort}&direction=${direction}`);
    return details;
}





  
  