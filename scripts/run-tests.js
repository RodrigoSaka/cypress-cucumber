const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const reportsDir = path.resolve(__dirname, '../coverage');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

try {
  if (fs.existsSync(reportsDir)) {
    fs.rmSync(reportsDir, { recursive: true, force: true });
  }
  fs.mkdirSync(reportsDir, { recursive: true });

  run('npx cypress run --headless');

  console.log('\x1b[32m%s\x1b[0m', '\nRelatório de testes gerado com sucesso!');
} catch (err) {
  console.error('Erro ao executar os testes:', err.message);
  process.exit(1);
}
