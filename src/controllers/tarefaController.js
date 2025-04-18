import tarefaModel from "../models/tarefaModel.js";

class TarefaController {
  getAll = async (req, res) => {
    try {
      const tarefas = await tarefaModel.getAll();
      res.json(tarefas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar as tarefas" });
    }
  };

  create = (req, res) => {
    const { descricao } = req.body;
    try {
    if (!descricao) {
      return res.status(400).json({ erro: "Descrição é obrigatória" });
    }
    
    const novaTarefa = tarefaModel.create(descricao);
    res.status(201).json(novaTarefa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao criar a tarefa" });
  }
  };
  update = async (req, res) => {
const { id } = req.params;
const {concluida, descricao} = req.body;

try {
const tarefaAtualizada = await tarefaModel.update(Number(id), concluida,
 descricao
);

if (!tarefaAtualizada) {
  return res.status(404).json({ erro: "Tarefa não encontrada" });
}

res.json(tarefaAtualizada);
} catch (error) {
  console.error(error);
  res.status(500).json({ erro: "Erro ao atualizar a tarefa" });
}
  };
  
  delete = ({ params: { id } }, res) => {
    const sucesso = tarefaModel.delete(id);
    if (!sucesso) {
      return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    res.status(204).send();
  };
}
export default new TarefaController();
