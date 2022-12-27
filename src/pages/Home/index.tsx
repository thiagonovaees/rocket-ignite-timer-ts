import { Play } from "phosphor-react";
import {
  ContdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

// React hook para formulários
import { useForm } from "react-hook-form";

export function Home() {
  //Cria um objeto de regras para a validação do formulário.
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutesAmount: zod.number().min(5).max(60),
  });

  // Usa o zod.infer para criar automáticamente a tipagem baseado no schema criado anteriormente.
  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

  // register => Agrega todos os campos base do form, como name, id e etc;
  // handleSubmit => Lida com o envio das informações pelo usuário. É utilizada como parametro do onSubmit do formulário;
  // watch => monitora o campo input de forma controlada;
  // reset => reseta o campo input;
  // formState => retorna os erros de validação do formulário;

  const { register, handleSubmit, watch, reset, formState } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      // deafultvalues = ?? (qual o motivo de utilizar isso??)
      defaultValues: {
        task: "",
        minutesAmount: 0,
      },
    });

  // O formState.errors retorna os erros da validação do formulário.
  // console.log(formState.errors);

  // Cria a função que vai responder ao submit do formulário, criando um novo ciclo;
  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data);
    reset();
  }

  // Função watch monitora o campo de input de forma controlada;
  const task = watch("task");

  // Ao submeter o formulário, utiliza a handleSubmit do React Hook Form e utiliza como parametro dela a função criada para iniciar um novo ciclo;
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
            // A função register utiliza a sintaxe de spread operator. {...register("nome: string")};
            {...register("task")}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            // Faço o mesmo nesse input, passando como segundo parametro para forçar um retorno em formato number;
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span>minutos</span>
        </FormContainer>
        <ContdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </ContdownContainer>

        <StartCountdownButton
          type="submit"
          // O botão só será habilitado se o campo task, que está sendo monitorado pelo watch for !== de vazio;
          disabled={!task}
        >
          <Play size={24} /> Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
