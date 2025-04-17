import prisma from '../../prisma/client.js';

class CollectionModel {
  //Obter todas as coleções 
  async findAll() {
  const colecoes = await prisma.collection.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      cards: true,
    },
  });

  console.log(colecoes);

  return colecoes;
  };

  async create (name, description, releaseYear) {
    const newCollection = await prisma.collection.create ({
      data: {
        name,
        description,
        releaseYear,
      },
    })

    return newCollection;
  }
    


update = async (id, concluida, descricao) => {
try {
const tarefa =await prisma.task.update({
  where : {id},
  data : {
    concluida:concluida !== undefined ? concluida : true, 
    descricao
  },
});
return tarefa;
} catch (error) {
  console.log("Error", error);
    throw error
}

  };
  delete = (id) => {
    const index = this.tarefas.findIndex((t) => t.id === Number(id));
    if (index !== -1) {
      this.tarefas.splice(index, 1);
      return true;
    }
    return false;
  };
}
export default new CollectionModel();
