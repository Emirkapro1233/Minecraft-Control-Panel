class ConsoleManager {
  send(process, command) {
    if (process) {
      process.stdin.write(command + '\n');
    }
  }
}

module.exports = ConsoleManager;
