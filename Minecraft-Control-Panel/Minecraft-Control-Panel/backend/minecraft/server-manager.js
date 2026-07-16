const { spawn } = require('child_process');

class ServerManager {
  constructor() {
    this.process = null;
  }

  start(path, ram='4096M') {
    this.process = spawn('java', [
      `-Xmx${ram}`,
      '-jar',
      'server.jar',
      'nogui'
    ], {cwd:path});

    return this.process;
  }

  stop() {
    if (this.process) {
      this.process.stdin.write('stop\n');
    }
  }
}

module.exports = ServerManager;
