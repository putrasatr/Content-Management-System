const add = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const remove = async (path, params) =>
    await request.delete(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });
function* postChat(payload) {
    const { sender, message } = payload;
    const id = Date.now();
    yield put(actions.addChatView(id, sender, message));
    try {
        const data = yield call(add, PATH, { id, sender, message })
        socket.emit('chat', data)
        console.log('mengirim emit chat')
        yield put(actions.addChatSuccess(data))
    } catch (error) {
        yield put(actions.addChatFailure(id))
    }
}

function* deleteChat(payload) {
    const { id } = payload;
    console.log(id)
    yield put(actions.deleteChatView(id));
    try {
        const data = yield call(remove, `${PATH}/${id}`)
        socket.emit('chat', data)
        console.log('mengirim emit chat')
        yield put(actions.deleteChatSuccess())
    } catch (error) {
        yield put(actions.deleteChatFailure())
    }
}

function* resendChat(payload) {
    const { id, sender, message } = payload;
    try {
        const data = yield call(add, PATH, { id, sender, message })
        socket.emit('chat', data)
        // console.log('mengirim emit chat')
        yield put(actions.addChatSuccess(data))
    } catch (error) {
        yield put(actions.addChatFailure(id))
    }
}

