const { Server } = require('socket.io');

let io = null;

function initSocket(server){
  io = new Server(server, {
    cors: { origin: '*' }
  });

  io.on('connection', socket => {
    console.log('Socket connected:', socket.id);

    socket.on('join_room', (room) => {
      socket.join(room);
      console.log('Joined room', room);
    });

    socket.on('leave_room', (room) => {
      socket.leave(room);
    });

    socket.on('match_event', (payload) => {
      if(payload && payload.room){
        io.to(payload.room).emit('match_update', payload);
      } else {
        io.emit('match_update', payload);
      }
    });

    socket.on('disconnect', () => {
      // console.log('Socket disconnected', socket.id);
    });
  });
}

function getIO(){
  return io;
}

module.exports = { initSocket, getIO };
