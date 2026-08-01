// O QUE ISSO FAZ: quando alguém clica em "Verificar atualizações", o app
// consulta a API pública do GitHub e compara o commit mais recente do seu
// repositório com o "commit" configurado aqui embaixo. Se forem diferentes,
// avisa a pessoa e oferece abrir a página do GitHub pra ela baixar a versão
// nova manualmente. NADA é baixado, instalado ou atualizado sozinho — é só
// um aviso.
// ============================================================
module.exports = {
  commit: 'aa6fbbd3330feaa2a69d70146150e95a8cf6c82e',
  repoOwner: 'Diinhow',
  repoName: 'Idle-Hub',
  repoBranch: 'main',
};
