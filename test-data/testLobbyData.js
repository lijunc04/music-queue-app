const TestLobbyDB = {
    1111:{
        name: 'UserA',
        status: 2,
        songList: [
            {
                id: 'fffff', 
                userId: '123456'
            },
            {
                id: 'aaaaa',
                userId: '123456'
            },
        ],
        settings: {
            lobbyPassword: false,
            maxUserSelection: 1,
            bannedListActive: true,
            userControl: false,
            userPrioritize: false,
            filterExplicit: false,
        },
        bannedSongList: ['bbbbb'],
    },
}

export default TestLobbyDB;


//status: 0 not active, 1 active paused, 2 active playing