# Pàsso a Passo

## PARA VALIDAR ACESSO

1 - saber se tem um usuario logado
2 - se tiver, validar este usuario
3 - se sim, libera o acesso.

## PARA LOGAR

1 - Recebe os dados do LOGIN.
2 - envia uma requisicao para BACKEND validar estes
dados no BD.
2.1 -FRONTEND envia a requicao para BACKEND e espera a resposta.
3 - Estando correto (BACKEND dizendo ok), salva-se o token 
ou alguma referencia ao usuario no browser.
4 - se estiver errado, avisar do erro e nao salvar benhuma informação.

## PARA DESLOGAR

1 - Apago a referencia ou token que existir no BROWSER.
1.1 - Enviar uma requisição ao BACKEND para destruir aquela referencia.
2 - Atualizo a pagina ou vou para outra pagina.
