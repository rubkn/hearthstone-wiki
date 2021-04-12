import { useReducer, useEffect } from 'react'
import axios from 'axios'
const API_KEY = process.env.REACT_APP_KEY;

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, cards: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, cards: action.payload.cards }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, cards: [] }
        default:
            return state;
    }
}

const options = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  };

export default function fetchCards(params, page) {
    const [state, dispatch] = useReducer(reducer, { cards: [], loading: true})

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()

        dispatch({ type: ACTIONS.MAKE_REQUEST })
        axios.request(options, {
            cancelToken: cancelToken.token,
            params: { name: true, locale: true, collectible: true, page: page, ...params }
        }).then(res => {
            console.log(res.data.Core)
            dispatch({ type: ACTIONS.GET_DATA, payload: {cards: res.data }})
        }).catch(err => {
            if (axios.isCancel(err)) return
            dispatch({type: ACTIONS.ERROR, payload: { error: err }})
        })

        return () => {
            cancelToken.cancel()
        }

    }, [params, page])
    
    return state
}