const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const reportsDir = path.resolve(__dirname, '../coverage');
const junitDir = path.join(reportsDir, 'junit');
const consolidated = path.join(reportsDir, 'junit.xml');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

try {
  if (fs.existsSync(reportsDir)) {
    fs.rmSync(reportsDir, { recursive: true, force: true });
  }
  fs.mkdirSync(junitDir, { recursive: true });

  run('xvfb-run -a npx cypress run --headless');
  run(`npx junit-merge -d ${junitDir} -o ${consolidated}`);
  run(`npx nyc report --reporter=html --report-dir ${path.join(reportsDir, 'html')}`);

  console.log('\x1b[32m%s\x1b[0m', '\nRelat\u00f3rio de testes gerado com sucesso!');
} catch (err) {
  console.error('Erro ao executar os testes:', err.message);
  process.exit(1);
}

