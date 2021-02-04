import request from './connect';

// start create maps
export const addMapsSuccess = (maps) => ({
    type: 'ADD_MAPS_SUCCESS',
    maps
})

export const addMapsFailure = (id) => ({
    type: 'ADD_MAPS_FAILURE',
    id
})

export const addMapsView = (id, title, lat, lang) => ({
    type: 'ADD_MAPS',
    id, title, lat, lang
})

export const addMaps = (title, lat, lang) => {
    let id = Date.now()
    return dispatch => {
        dispatch(addMapsView(id, title, lat, lang))
        return request.post('/api/maps', {
            id, title, lat, lang
        }).then(response => {
            dispatch(addMapsSuccess(response.data))
        }).catch(function (error) {
            console.log(error);
            dispatch(addMapsFailure(id))
        })
    }
};
// end create maps

// load maps
export const loadMapsSuccess = (data) => ({
    type: 'LOAD_MAPS_SUCCESS',
    data
})

export const loadMapsFailure = () => ({
    type: 'LOAD_MAPS_FAILURE'
})

export const loadMaps = () => {
    return dispatch => {
        return request.get('/api/maps')
            .then(response => {
                dispatch(loadMapsSuccess(response.data))
            }).catch(function (error) {
                console.log(error);
                dispatch(loadMapsFailure())
            })
    }
}
// end load maps

//Edit maps 
export const updateMapsSuccess = (data) => ({
    type: 'UPDATE_MAPS_SUCCESS',
    data
})

export const updateMapsFailure = (id) => ({
    type: 'UPDATE_MAPS_FAILURE',
    id
})

export const updateMapsView = (id, title, lat,lang) => ({
    type: 'UPDATE_MAPS',
    id, title, lat,lang
})

export const updateMaps = (id, title ,lat , lang) => {
    return dispatch => {
        dispatch(updateMapsView(id, title,lat ,lang))
        return request.put(`/api/maps/${id}`, {
            id, title,lat,lang
        }).then(response => {
            dispatch(updateMapsSuccess(response.data.data))
        }).catch(function (error) {
            console.log(error);
            dispatch(updateMapsFailure(id))
        })
    }
}
//end edit maps

//delete data 
export const deleteMapsSuccess = (data) => ({
    type: 'DELETE_MAPS_SUCCESS',
    data
})

export const deleteMapsFailure = () => ({
    type: 'DELETE_MAPS_FAILURE'
})

export const deleteMapsView = (id) => ({
    type: 'DELETE_MAPS',
    id
})

export const deleteMaps = (id) => {
    return dispatch => {
        dispatch(deleteMapsView(id))
        return request.delete(`/api/maps/${id}`)
            .then(response => {
                dispatch(deleteMapsSuccess(response.data.data))
            }).catch(function (error) {
                dispatch(deleteMapsFailure())
            })
    }
}
//end delete data

//start resend data
export const resendMaps = (id, letter, frequency) => {
    return dispatch => {
        return request.post('/api/maps', { id, letter, frequency })
            .then(function (response) {
                dispatch(addMapsSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(addMapsFailure(id))
            });
    }
}
//end resend data