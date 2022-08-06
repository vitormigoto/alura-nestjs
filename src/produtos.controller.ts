import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

//Para o nest saber que esse arquivo é uma controller devemos usar o @Controller('url')
@Controller('produtos')
export class ProdutosController {
  //para o controller devolver algo vamos definir um metodo
  //Para o Nest saber que esta requisicao sera feita através de um Get usamos o @Get
  @Get()
  obterTodos(): string {
    return 'Lista todos os produtos';
  }

  //Para passarmos um parâmetro novo para nosso endpoint usamos dentro do método @Get o nome do parametro desejado, e para funcionar devemos colocar dentro da nossa função o @Param() params para que o parametro seja passado. 
  //Feito isso podemos chamar o parametro através do ${params.NOME_DO_PARAMETRO}
  @Get(':id')
  obterUm(@Param() params): string {
    return `Retorna os dados do produto ${params.id}`;
  }

  // Recebendo um Post para acessarmos o corpo da requisição usamos um decorator @Body com o nome produto
  @Post()
  criar(@Body() produto): string{
    //Exibindo no console os valores do corpo da requisição
    console.log(produto);
    return 'Produto Criado';
  }

  @Put()
  alterar(@Body() produto): string{
    //Exibindo no console os valores do corpo da requisição
    console.log(produto);
    return 'Produto Alterado';
  }

  @Delete(':id')
  apagar(@Param() params): string{
    return `Apaga o produto ${params.id}`;
  }
}
