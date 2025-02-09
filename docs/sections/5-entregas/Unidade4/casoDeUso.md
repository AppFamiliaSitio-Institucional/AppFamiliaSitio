# Casos de Uso - Connect Care

> 📝 Um Caso de Uso representa uma interação entre um ator (usuário ou outro sistema) e o sistema, com o objetivo de alcançar um resultado específico. Ele descreve como o sistema deve se comportar em resposta a ações do usuário.

No contexto do aplicativo Connect Care, a técnica foi utilizada como um facilitador no desenvolvimento do software. Nesse sentido, seguimos os passos:

**1. Identificação dos atores**, tais como: Paciente, Agente comunitário, Administrador do sistema, Organizações parceiras, Sistema de geolocalização e Profissional de saúde;

**2. Mapeamento dos Casos de Uso**: A partir de Verificação com a equipe de desenvolvimento;

**3. Desenvolvimento do diagrama**: feito no padrão UML;

**4. Inclusão das relações de Inclusão e Extensão;**

**5. Revisão e análise.**


## Diagrama de Casos de Uso realizado para a Connect Care:


![Diagrama de Casos de Uso](../../../assets/CasosDeUso.png)

_Fonte: Elaboração própria_

## Especificação de Casos de Uso


<div class="tab">
  <button class="tablinks" onclick="openTab(event, 'Agendar')">Agendar serviço de saúde</button>
  <button class="tablinks" onclick="openTab(event, 'X')">Caso 2</button>
  <button class="tablinks" onclick="openTab(event, 'Y')">Caso 3</button>
  <button class="tablinks" onclick="openTab(event, 'Registrar_visita_domiciliar')">Caso 4</button>
  <button class="tablinks" onclick="openTab(event, 'A')">Caso 5</button>
  <button class="tablinks" onclick="openTab(event, 'B')">Caso 6</button>
</div>

<div id="Agendar" class="tabcontent">

  <h2>UC - Agendar serviço de saúde</h2>

  <h3>Especificação de Caso de Uso</h3>
  <h3>Histórico de Revisão</h3>
  <table>
      <tr>
          <th>Data</th>
          <th>Autor</th>
          <th>Modificações</th>
          <th>Versão</th>
      </tr>
      <tr>
          <td>30/01/2025</td>
          <td>Daniel Rodrigues da Rocha, Manuella Magalhães Valadares, Ana Carolina Madeira Fialho, Arthur Miranda Suares
</td>
          <td>Adicionando caso de uso no documento</td>
          <td>1.0</td>
      </tr>
      <tr>
          <td>04/02/2025</td>
          <td>Daniel Rodrigues da Rocha, Manuella Magalhães Valadares, Ana Carolina Madeira Fialho, Arthur Miranda Suares, Marcella Sousa Anderle, João Pedro Ferreira Alves</td>
          <td>Revisão do documento</td>
          <td>1.1</td>
      </tr>
      <tr>
          <td>09/02/2025</td>
          <td>Manuella Magalhães Valadares</td>
          <td>Alterações no fluxo básico e outros</td>
          <td>1.2</td>
      </tr>
  </table>

  <h3>1. Breve Descrição</h3>
  <p>Esta especificação de caso de uso permite ao paciente realizar o agendamento de um serviço de saúde através do Connect Care. Para tanto é deve-se filtrar o tipo de especialização do serviço requerido, data e horário de preferência e recebendo os devidos locais e profissionais como resultado e, ao fim, confirmando seu agendamento. O paciente ainda pode visualizar um mapa para ver a distância e as rotas para chegar até o atendimento agendado. Os agendamentos poderão ser excluídos para casos de cancelamento e também serão acompanhados pela atualização de status de seu andamento.</p>

  <h3>2. Atores</h3>
  <ul>
      <li>Paciente</li>
  </ul>

  <h3>3. Condições Prévias</h3>
  <ul>
      <li>3.1 Paciente autenticado no sistema.</li>
      <li>3.2 Disponibilidade de profissionais de saúde e locais.</li>
  </ul>

  <h3>4. Fluxo Básico (FB)</h3>
  Esse caso de uso é iniciado quando o usuário selecionar a opção “Agendar serviço de saúde”.
  <ol>
      <li>O sistema apresenta as seguintes opções: </br>
        - Realizar novo agendamento; </br>
        - Remarcar agendamento [FA01]; </br>
        - Cancelar agendamento [FA02]; </br>
        - Consultar agendamentos [FA03]. </br>
      </li>
      <li>O usuário seleciona a opção de realizar um novo agendamento;</li>
      <li>O usuário seleciona a especialidade desejada;[FE03][RN01]</li>
      <li>O usuário seleciona a Data desejada; [FE03][RN01]</li>
      <li>O sistema faz a validação da data; [FE01][FE02][RN03]</li>
      <li>O sistema mostra os horários e locais disponíveis; [FE04][RN02]</li>
      <li>O usuário seleciona um agendamento único; [FA04] </li>
      <li>O sistema apresenta a opção "ver no mapa";</li>
      <li>O usuário confirma o agendamento;</li>
      <li>O sistema apresenta uma mensagem de agendamento realizado com sucesso;</li>
      <li>O caso de uso é encerrado.</li>
  </ol>

  <h3>5. Fluxo Alternativo (FA)</h3>

  <h4>FA01 - Remarcar agendamento</h4>
  No passo 1 do Fluxo Básico, o usuário seleciona a opção "Remarcar agendamento"
  <ol>
      <li>O sistema exibe os agendamentos ativos do paciente. [FE05][RN02]</li>
      <li>O paciente escolhe um agendamento para remarcar.[FE06][RN04]</li>
      <li>O paciente seleciona uma nova opção e confirma a remarcação.</li>
      <li>O sistema atualiza o status do agendamento.</li>
      <li>O sistema emite uma mensagem de sucesso.</li>
  </ol>

  <h4>FA02 - Cancelar agendamento</h4>
  No passo 1 do Fluxo Básico, o usuário seleciona a opção "Cancelar agendamento"
  <ol>
      <li>O sistema exibe os agendamentos ativos do paciente.[FE05][RN02]</li>
      <li>O paciente escolhe um agendamento para cancelar. [FE06][RN04]</li>
      <li>O sistema solicita confirmação do cancelamento.</li>
      <li>O paciente confirma e o sistema remove o agendamento.</li>
  </ol>

  <h4>FA03 - Consultar agendamentos</h4>
  No passo 1 do Fluxo Básico, o usuário seleciona a opção "Consultar agendamento"
  <ol>
      <li>O sistema exibe a lista de agendamentos futuros e passados.[FE05][RN02]</li>
      <li>O usuário aciona um agendamento específico.</li>
      <li>O Sistema exibe as informações: </br> 
      - Data e horário</br>
      - Especialidade
      </li>
  </ol>

  <h4>FA04 - Sair do Agendamento</h4>
  <p>No passo 7 do fluxo básico, se o sistema não apresentar uma data que agrade o usuário, ele pode selecionar a opção "cancelar" e sair do agendamento.</p>



  <h3>6. Fluxo de Exceção (FE)</h3>

  <h4>FE01 - Data anterior à atual</h4>
  <p>"As datas devem ser maiores que a de hoje". O caso de uso retorna ao passo 3 do FB.</p>

  <h4>FE02 - Data com mais de um ano à frente</h4>
  <p>"As datas não devem ser de mais de um ano". O caso de uso retorna ao passo 3 do FB.</p>

  <h4>FE03 - Cliente não digitou as informações necessárias</h4>
  <p>O sistema impedirá que o cliente avance para o próximo passo caso as informações estejam incompletas.</p>

  <h4>FE04 - Sem opções para a data ou especialidade selecionada</h4>
  <p>O sistema irá emitir um aleta de falta de disponibilidade. O caso de uso retorna ao passo 3 do FB.</p>

  <h4>FE05 - Nenhum agendamento no sistema</h4>
  <p>O usuário não possui nenhum agendamento no sistema. O usuário retorna ao passo anterior.</p>

  <h4>FE06 - Impossibilidade de ajuste no agendamento</h4>
  <p>O usuário é impedido de realizar a tarefa e volta ao passo 1 do FB.</p>

  <h3>7. Regras de Negócio (RN)</h3>

  <h4>RN01 - Validação dos Dados</h4>
  <p>Para que o sistema realize o pré-agendamento, é necessário que os passos 3 e 4 estejam preenchidos corretamente, e que o sistema valide o passo 5</p>

  <h4>RN02 - Agrupamento por agenda</h4>
  <p>O sistema fornece agendamentos agrupados com a especialidade, data, horário e local.</p>

  <h4>RN03 - Validação das Datas</h4>
  <p>As datas preenchidas devem seguir os seguintes critérios:</p>
  <ul>
      <li>Ser posteriores ou iguais ao dia atual.</li>
      <li>Ser de até um ano após o dia atual.</li>
  </ul>

  <h4>RN04 - Cancelamento e Remarcação</h4>
  <p>O paciente pode cancelar ou remarcar consultas apenas até 24 horas antes do horário marcado.</p>


  <h3>8. Pós-Condições</h3>
  <p>Não se aplica.</p>

  <h3>9. Ponto de Extensão</h3>
  <p><strong>Ver no mapa:</strong> O passo 8 do fluxo básico deve ser extendido para o caso de uso "Ver no mapa" com o objetivo de visualizar as rotas e distância dos agendamentos.</p>


</div>






<div id="X" class="tabcontent">
<h2>UC - Realizar Pré-Agendamento</h2>

  <h3>Especificação de Caso de Uso</h3>
  <h3>Histórico de Revisão</h3>
  <table>
      <tr>
          <th>Data</th>
          <th>Autor</th>
          <th>Modificações</th>
          <th>Versão</th>
      </tr>
      <tr>
          <td>24/04/2022</td>
          <td>Laís Portela</td>
          <td>Adicionando caso de uso no documento</td>
          <td>1.0</td>
      </tr>
      <tr>
          <td>26/04/2022</td>
          <td>Laís Portela</td>
          <td>Revisão do documento</td>
          <td>1.1</td>
      </tr>
      <tr>
          <td>26/04/2022</td>
          <td>Laís Portela</td>
          <td>Alterações no fluxo básico e outros</td>
          <td>1.2</td>
      </tr>
      <tr>
          <td>26/04/2022</td>
          <td>Laís Portela</td>
          <td>Adição de regra de negócio</td>
          <td>1.3</td>
      </tr>
  </table>

  <h3>1. Breve Descrição</h3>
  <p>Este caso de uso é utilizado pelos clientes para fazer o pré-agendamento do animal, bem como escolher os serviços prestados e meios de pagamento.</p>

  <h3>2. Atores</h3>
  <ul>
      <li>2.1 Cliente que deseja hospedar o seu animal em um hotel para pets.</li>
      <li>2.2 Funcionário que trabalha no hotel para animais e deseja aprovar agendamentos e definir serviços de forma virtual.</li>
  </ul>

  <h3>3. Condições Prévias</h3>
  <ul>
      <li>3.1 Cliente fez login.</li>
      <li>3.2 Cliente cadastrou pelo menos um animal.</li>
  </ul>

  <h3>4. Fluxo Básico (FB)</h3>
  <ol>
      <li>O cliente seleciona a opção "hospedar pet".</li>
      <li>O cliente seleciona o animal desejado.</li>
      <li>O cliente digita as datas desejadas (RN04).</li>
      <li>O sistema faz a validação da data (FE01, FE02, FE03, RN01).</li>
      <li>O sistema mostra o valor da hospedagem (RN01).</li>
      <li>O sistema solicita informações complementares do animal.</li>
      <li>O cliente confirma o pré-agendamento (RN02).</li>
      <li>O sistema verifica se o cliente deseja escolher algum serviço ou definir a forma de pagamento (FA01, FA02, FA03).</li>
  </ol>

  <h3>5. Fluxo Alternativo (FA)</h3>
  <h4>FA01 - Selecionar Serviços</h4>
  <ol>
      <li>O cliente seleciona "Serviços".</li>
      <li>O cliente escolhe quais serviços deseja.</li>
      <li>O cliente salva as informações (RN03).</li>
      <li>O sistema emite uma mensagem de sucesso.</li>
  </ol>

  <h4>FA02 - Selecionar Pagamento</h4>
  <ol>
      <li>O cliente seleciona "Pagamento".</li>
      <li>O cliente escolhe qual será o seu meio de pagamento.</li>
      <li>O sistema mostra o valor total.</li>
      <li>O cliente salva sua opção (RN03).</li>
      <li>O sistema emite uma mensagem de sucesso.</li>
  </ol>

  <h4>FA03 - Sair do Pré-Agendamento</h4>
  <p>O cliente decide finalizar o pré-agendamento, após a conclusão do fluxo básico.</p>

  <h3>6. Fluxo de Exceção (FE)</h3>
  <h4>FE01 - Data de entrada maior que a de saída</h4>
  <p>"A data de entrada deve ser maior que a de saída". O caso de uso retorna ao passo 4.3 do FB.</p>

  <h4>FE02 - Data anterior à atual</h4>
  <p>"As datas devem ser maiores que a de hoje". O caso de uso retorna ao passo 4.3 do FB.</p>

  <h4>FE03 - Data com mais de um ano à frente</h4>
  <p>"As datas não devem ser de mais de um ano". O caso de uso retorna ao passo 4.3 do FB.</p>

  <h4>FE04 - Cliente não digitou as informações necessárias</h4>
  <p>O sistema impedirá que o cliente avance para o próximo passo caso as informações estejam incompletas.</p>

  <h3>7. Regras de Negócio (RN)</h3>
  <h4>RN01 - Valor do Pré-Agendamento</h4>
  <p>O valor da hospedagem depende do peso do animal e dos dias agendados. Para que o valor seja mostrado, os campos "Pet", "Entrada" e "Saída" devem estar preenchidos.</p>

  <h4>RN02 - Validação dos Dados</h4>
  <p>Para que o sistema realize o pré-agendamento, é necessário que os passos 4.2 e 4.3 estejam preenchidos corretamente, e que o sistema valide o passo 4.4.</p>

  <h4>RN03 - Campo Preenchido</h4>
  <p>Para que o sistema confirme as informações, elas não devem ser nulas.</p>

  <h4>RN04 - Validação das Datas</h4>
  <p>As datas preenchidas devem seguir os seguintes critérios:</p>
  <ul>
      <li>Ser posteriores ou iguais ao dia atual.</li>
      <li>Ser de até um ano após o dia atual.</li>
      <li>A data de entrada não pode ser posterior à data de saída.</li>
  </ul>

  <h3>8. Pós-Condições</h3>
  <p>Pós-Condições</p>

  <h3>9. Ponto de Extensão</h3>
  <p>Ponto de Extensão</p>
</div>






<div id="Y" class="tabcontent">
<h2>UC - Realizar Pré-Agendamento</h2>

  <h3>Especificação de Caso de Uso</h3>
  <h3>Histórico de Revisão</h3>
  <table>
      <tr>
          <th>Data</th>
          <th>Autor</th>
          <th>Modificações</th>
          <th>Versão</th>
      </tr>
      <tr>
          <td>24/04/2022</td>
          <td>Laís Portela</td>
          <td>Adicionando caso de uso no documento</td>
          <td>1.0</td>
      </tr>
      <tr>
          <td>26/04/2022</td>
          <td>Laís Portela</td>
          <td>Revisão do documento</td>
          <td>1.1</td>
      </tr>
      <tr>
          <td>26/04/2022</td>
          <td>Laís Portela</td>
          <td>Alterações no fluxo básico e outros</td>
          <td>1.2</td>
      </tr>
      <tr>
          <td>26/04/2022</td>
          <td>Laís Portela</td>
          <td>Adição de regra de negócio</td>
          <td>1.3</td>
      </tr>
  </table>

  <h3>1. Breve Descrição</h3>
  <p>Este caso de uso é utilizado pelos clientes para fazer o pré-agendamento do animal, bem como escolher os serviços prestados e meios de pagamento.</p>

  <h3>2. Atores</h3>
  <ul>
      <li>2.1 Cliente que deseja hospedar o seu animal em um hotel para pets.</li>
      <li>2.2 Funcionário que trabalha no hotel para animais e deseja aprovar agendamentos e definir serviços de forma virtual.</li>
  </ul>

  <h3>3. Condições Prévias</h3>
  <ul>
      <li>3.1 Cliente fez login.</li>
      <li>3.2 Cliente cadastrou pelo menos um animal.</li>
  </ul>

  <h3>4. Fluxo Básico (FB)</h3>
  <ol>
      <li>O cliente seleciona a opção "hospedar pet".</li>
      <li>O cliente seleciona o animal desejado.</li>
      <li>O cliente digita as datas desejadas (RN04).</li>
      <li>O sistema faz a validação da data (FE01, FE02, FE03, RN01).</li>
      <li>O sistema mostra o valor da hospedagem (RN01).</li>
      <li>O sistema solicita informações complementares do animal.</li>
      <li>O cliente confirma o pré-agendamento (RN02).</li>
      <li>O sistema verifica se o cliente deseja escolher algum serviço ou definir a forma de pagamento (FA01, FA02, FA03).</li>
  </ol>

  <h3>5. Fluxo Alternativo (FA)</h3>
  <h4>FA01 - Selecionar Serviços</h4>
  <ol>
      <li>O cliente seleciona "Serviços".</li>
      <li>O cliente escolhe quais serviços deseja.</li>
      <li>O cliente salva as informações (RN03).</li>
      <li>O sistema emite uma mensagem de sucesso.</li>
  </ol>

  <h4>FA02 - Selecionar Pagamento</h4>
  <ol>
      <li>O cliente seleciona "Pagamento".</li>
      <li>O cliente escolhe qual será o seu meio de pagamento.</li>
      <li>O sistema mostra o valor total.</li>
      <li>O cliente salva sua opção (RN03).</li>
      <li>O sistema emite uma mensagem de sucesso.</li>
  </ol>

  <h4>FA03 - Sair do Pré-Agendamento</h4>
  <p>O cliente decide finalizar o pré-agendamento, após a conclusão do fluxo básico.</p>

  <h3>6. Fluxo de Exceção (FE)</h3>
  <h4>FE01 - Data de entrada maior que a de saída</h4>
  <p>"A data de entrada deve ser maior que a de saída". O caso de uso retorna ao passo 4.3 do FB.</p>

  <h4>FE02 - Data anterior à atual</h4>
  <p>"As datas devem ser maiores que a de hoje". O caso de uso retorna ao passo 4.3 do FB.</p>

  <h4>FE03 - Data com mais de um ano à frente</h4>
  <p>"As datas não devem ser de mais de um ano". O caso de uso retorna ao passo 4.3 do FB.</p>

  <h4>FE04 - Cliente não digitou as informações necessárias</h4>
  <p>O sistema impedirá que o cliente avance para o próximo passo caso as informações estejam incompletas.</p>

  <h3>7. Regras de Negócio (RN)</h3>
  <h4>RN01 - Valor do Pré-Agendamento</h4>
  <p>O valor da hospedagem depende do peso do animal e dos dias agendados. Para que o valor seja mostrado, os campos "Pet", "Entrada" e "Saída" devem estar preenchidos.</p>

  <h4>RN02 - Validação dos Dados</h4>
  <p>Para que o sistema realize o pré-agendamento, é necessário que os passos 4.2 e 4.3 estejam preenchidos corretamente, e que o sistema valide o passo 4.4.</p>

  <h4>RN03 - Campo Preenchido</h4>
  <p>Para que o sistema confirme as informações, elas não devem ser nulas.</p>

  <h4>RN04 - Validação das Datas</h4>
  <p>As datas preenchidas devem seguir os seguintes critérios:</p>
  <ul>
      <li>Ser posteriores ou iguais ao dia atual.</li>
      <li>Ser de até um ano após o dia atual.</li>
      <li>A data de entrada não pode ser posterior à data de saída.</li>
  </ul>

  <h3>8. Pós-Condições</h3>
  <p>Pós-Condições</p>

  <h3>9. Ponto de Extensão</h3>
  <p>Ponto de Extensão</p>
</div>






<div id="Registrar_visita_domiciliar" class="tabcontent">
<h2>UC - Realizar Pré-Agendamento</h2>

  <h3>Especificação de Caso de Uso</h3>
  <h3>Histórico de Revisão</h3>
  <table>
      <tr>
          <th>Data</th>
          <th>Autor</th>
          <th>Modificações</th>
          <th>Versão</th>
      </tr>
      <tr>
          <td>05/02/2025</td>
          <td>Arthur Suares</td>
          <td>Formulação do caso de uso no docs</td>
          <td>1.0</td>
      </tr>
      <tr>
          <td>09/02/2025</td>
          <td>Arthur Suares</td>
          <td>Passando caso de uso para o pages e Alterações no fluxo alternativo e regras de negócio</td>
          <td>1.1</td>
      </tr>
      <tr>
          <td>09/02/2025</td>
          <td>Arthur Suares</td>
          <td>Revisão do documento</td>
          <td>1.2</td>
      </tr>
  </table>

  <h3>1. Breve Descrição</h3>
    <p>
        Este caso de uso permite que um agente comunitário registre uma visita domiciliar a um paciente por meio da plataforma ConnectCare. Durante a visita, o agente pode inserir informações sobre o estado de saúde do paciente, tratamentos recomendados e encaminhamentos necessários. O objetivo é garantir um acompanhamento adequado e a atualização do prontuário digital do paciente.
    </p>

  <h3>2. Atores</h3>
  <ul>
      <li>2.1 Agente comunitário que está responsável por fazer visitas domiciliares</li>
  </ul>

  <h3>3. Condições Prévias</h3>
  <ul>
      <li>3.1 O agente comunitário deve estar cadastrado e autenticado na plataforma.</li>
      <li>3.2 Cliente cadastrou pelo menos um animal.</li>
  </ul>

  <h3>4. Fluxo Básico (FB)</h3>
  <ol>
      <li>O agente seleciona a opção "Registrar Visita Domiciliar" no menu principal.</li>
      <li>O sistema apresenta as seguintes opções:</li>
      <ul>
        <li>Consultar pacientes</li>
        <li>Registrar novo paciente [FA01]</li>
        <li>Emergência [FA02]</li>
      </ul>
      <li>O sistema exibe uma lista de pacientes cadastrados ou permite a busca por nome, CPF ou endereço.</li>
      <li>O agente seleciona o paciente visitado.</li>
      <li>O sistema exibe o prontuário digital do paciente, incluindo informações médicas anteriores.</li>
      <li>O agente insere os dados da visita, como sintomas observados, condições do paciente e orientações fornecidas.</li>
      <li>Se necessário, o agente pode registrar encaminhamentos para unidades de saúde ou solicitar exames complementares.</li>
      <li>O agente confirma o registro da visita.</li>
      <li>O sistema armazena os dados no prontuário digital do paciente e gera um relatório para acompanhamento.</li>
      <li>O agente recebe uma confirmação da operação bem-sucedida.</li>
      <li>O caso de uso se encerra</li>
  </ol>

  <h3>5. Fluxo Alternativo (FA)</h3>
  <h4>FA01 - Selecionar registrar novo paciente</h4>
  <ol>
      <li>O agente seleciona a opção de registrar um novo paciente.</li>
      <li>O sistema solicita os dados básicos do paciente (nome, CPF, data de nascimento, endereço, etc.).</li>
      <li>O sistema valida as informações e cadastra o paciente.</li>
      <li>O sistema emite uma mensagem de sucesso.</li>
  </ol>

  <h4>FA02 - Selecionar Emergência</h4>
  <ol>
      <li>O agente acessa a opção de emergência na plataforma.</li>
      <li>O sistema exibe um menu de serviços de urgência disponíveis.</li>
      <li>O agente seleciona a opção adequada (ex.: SAMU, hospital de referência, contato com médico responsável).</li>
      <li>O sistema registra a ação no prontuário do paciente e disponibiliza um canal para comunicação rápida.</li>
      <li>O fluxo retorna ao passo 7 do fluxo básico, permitindo que o agente registre a visita, incluindo a emergência relatada.</li>
  </ol>

  <h3>6. Fluxo de Exceção (FE)</h3>
  <h4>FE01 - Informações obrigatórias não preenchidas</h4>
  <p>"Todos os campos obrigatórios devem ser preenchidos antes de concluir o registro da visita" O caso de uso retorna ao passo 4.6 do FB.</p>

  <h4>FE02 - Paciente não encontrado no sistema</h4>
  <p>"Paciente não encontrado. Por favor, verifique os dados inseridos ou cadastre um novo paciente.". O caso de uso retorna ao passo 4.2 do FB.</p>

  <h3>7. Regras de Negócio (RN)</h3>
  <h4>RN01 - Disponibilidade dos registros</h4>
  <p>Os registros das visitas devem estar disponíveis, se existirem, para consulta posterior por profissionais de saúde autorizados, garantindo rastreabilidade no acompanhamento do paciente.</p>

  <h4>RN02 - Segurança e privacidade dos dados</h4>
  <p>Os dados da visita devem ser armazenados seguindo as diretrizes da LGPD, garantindo que apenas usuários autorizados possam acessá-los.</p>

  <h4>RN03 - Registro de emergência</h4>
  <p>Caso uma emergência seja identificada, o agente deve registrar a ocorrência e acionar os serviços apropriados antes de concluir o registro da visita, conforme o fluxo alternativo [FA02].</p>

  <h4>RN02 - O registro da visita deve conter informações obrigatórias</h4>
  <p>Para que o registro seja concluído, os campos obrigatórios (como sintomas observados, condições do paciente e orientações fornecidas) devem estar preenchidos.</p>

  <h3>8. Pós-Condições</h3>
    <h3>Pós-Condições</h3>
    <ul>
        <li>A visita domiciliar é registrada no prontuário digital do paciente.</li>
        <li>Encaminhamentos e solicitações de exames ficam disponíveis para análise dos profissionais de saúde.</li>
    <ul>
   
  

  <h3>9. Ponto de Extensão</h3>
  <h4>PE01 Integração com Prontuários de Outros Sistemas</h4>
  <ol>
      <li>Local do Ponto de Extensão: Após o passo 5 do fluxo básico, quando o prontuário digital do paciente é exibido.</li>
      <li>Descrição: O sistema pode estender a funcionalidade para buscar e integrar dados de prontuários eletrônicos de outros sistemas de saúde.</li>
  </ol>

  <h4>PE02 Notificações Automáticas</h4>
  <ol>
      <li>Local do Ponto de Extensão: Após o passo 9 do fluxo básico, quando os dados da visita são armazenados.</li>
      <li>Descrição: O sistema pode enviar notificações automáticas para profissionais de saúde ou familiares cadastrados sempre que um novo registro de visita for realizado.</li>
  </ol>
</div>





<div id="A" class="tabcontent">
<h2>UC - Realizar Pré-Agendamento</h2>

  <h3>Especificação de Caso de Uso</h3>
  <h3>Histórico de Revisão</h3>
  <table>
      <tr>
          <th>Data</th>
          <th>Autor</th>
          <th>Modificações</th>
          <th>Versão</th>
      </tr>
      <tr>
          <td>24/04/2022</td>
          <td>Laís Portela</td>
          <td>Adicionando caso de uso no documento</td>
          <td>1.0</td>
      </tr>
      <tr>
          <td>26/04/2022</td>
          <td>Laís Portela</td>
          <td>Revisão do documento</td>
          <td>1.1</td>
      </tr>
      <tr>
          <td>26/04/2022</td>
          <td>Laís Portela</td>
          <td>Alterações no fluxo básico e outros</td>
          <td>1.2</td>
      </tr>
      <tr>
          <td>26/04/2022</td>
          <td>Laís Portela</td>
          <td>Adição de regra de negócio</td>
          <td>1.3</td>
      </tr>
  </table>

  <h3>1. Breve Descrição</h3>
  <p>Este caso de uso é utilizado pelos clientes para fazer o pré-agendamento do animal, bem como escolher os serviços prestados e meios de pagamento.</p>

  <h3>2. Atores</h3>
  <ul>
      <li>2.1 Cliente que deseja hospedar o seu animal em um hotel para pets.</li>
      <li>2.2 Funcionário que trabalha no hotel para animais e deseja aprovar agendamentos e definir serviços de forma virtual.</li>
  </ul>

  <h3>3. Condições Prévias</h3>
  <ul>
      <li>3.1 Cliente fez login.</li>
      <li>3.2 Cliente cadastrou pelo menos um animal.</li>
  </ul>

  <h3>4. Fluxo Básico (FB)</h3>
  <ol>
      <li>O cliente seleciona a opção "hospedar pet".</li>
      <li>O cliente seleciona o animal desejado.</li>
      <li>O cliente digita as datas desejadas (RN04).</li>
      <li>O sistema faz a validação da data (FE01, FE02, FE03, RN01).</li>
      <li>O sistema mostra o valor da hospedagem (RN01).</li>
      <li>O sistema solicita informações complementares do animal.</li>
      <li>O cliente confirma o pré-agendamento (RN02).</li>
      <li>O sistema verifica se o cliente deseja escolher algum serviço ou definir a forma de pagamento (FA01, FA02, FA03).</li>
  </ol>

  <h3>5. Fluxo Alternativo (FA)</h3>
  <h4>FA01 - Selecionar Serviços</h4>
  <ol>
      <li>O cliente seleciona "Serviços".</li>
      <li>O cliente escolhe quais serviços deseja.</li>
      <li>O cliente salva as informações (RN03).</li>
      <li>O sistema emite uma mensagem de sucesso.</li>
  </ol>

  <h4>FA02 - Selecionar Pagamento</h4>
  <ol>
      <li>O cliente seleciona "Pagamento".</li>
      <li>O cliente escolhe qual será o seu meio de pagamento.</li>
      <li>O sistema mostra o valor total.</li>
      <li>O cliente salva sua opção (RN03).</li>
      <li>O sistema emite uma mensagem de sucesso.</li>
  </ol>

  <h4>FA03 - Sair do Pré-Agendamento</h4>
  <p>O cliente decide finalizar o pré-agendamento, após a conclusão do fluxo básico.</p>

  <h3>6. Fluxo de Exceção (FE)</h3>
  <h4>FE01 - Data de entrada maior que a de saída</h4>
  <p>"A data de entrada deve ser maior que a de saída". O caso de uso retorna ao passo 4.3 do FB.</p>

  <h4>FE02 - Data anterior à atual</h4>
  <p>"As datas devem ser maiores que a de hoje". O caso de uso retorna ao passo 4.3 do FB.</p>

  <h4>FE03 - Data com mais de um ano à frente</h4>
  <p>"As datas não devem ser de mais de um ano". O caso de uso retorna ao passo 4.3 do FB.</p>

  <h4>FE04 - Cliente não digitou as informações necessárias</h4>
  <p>O sistema impedirá que o cliente avance para o próximo passo caso as informações estejam incompletas.</p>

  <h3>7. Regras de Negócio (RN)</h3>
  <h4>RN01 - Valor do Pré-Agendamento</h4>
  <p>O valor da hospedagem depende do peso do animal e dos dias agendados. Para que o valor seja mostrado, os campos "Pet", "Entrada" e "Saída" devem estar preenchidos.</p>

  <h4>RN02 - Validação dos Dados</h4>
  <p>Para que o sistema realize o pré-agendamento, é necessário que os passos 4.2 e 4.3 estejam preenchidos corretamente, e que o sistema valide o passo 4.4.</p>

  <h4>RN03 - Campo Preenchido</h4>
  <p>Para que o sistema confirme as informações, elas não devem ser nulas.</p>

  <h4>RN04 - Validação das Datas</h4>
  <p>As datas preenchidas devem seguir os seguintes critérios:</p>
  <ul>
      <li>Ser posteriores ou iguais ao dia atual.</li>
      <li>Ser de até um ano após o dia atual.</li>
      <li>A data de entrada não pode ser posterior à data de saída.</li>
  </ul>

  <h3>8. Pós-Condições</h3>
  <p>Pós-Condições</p>

  <h3>9. Ponto de Extensão</h3>
  <p>Ponto de Extensão</p>
</div>






<div id="B" class="tabcontent">
<h2>UC - Realizar Pré-Agendamento</h2>

  <h3>Especificação de Caso de Uso</h3>
  <h3>Histórico de Revisão</h3>
  <table>
      <tr>
          <th>Data</th>
          <th>Autor</th>
          <th>Modificações</th>
          <th>Versão</th>
      </tr>
      <tr>
          <td>24/04/2022</td>
          <td>Laís Portela</td>
          <td>Adicionando caso de uso no documento</td>
          <td>1.0</td>
      </tr>
      <tr>
          <td>26/04/2022</td>
          <td>Laís Portela</td>
          <td>Revisão do documento</td>
          <td>1.1</td>
      </tr>
      <tr>
          <td>26/04/2022</td>
          <td>Laís Portela</td>
          <td>Alterações no fluxo básico e outros</td>
          <td>1.2</td>
      </tr>
      <tr>
          <td>26/04/2022</td>
          <td>Laís Portela</td>
          <td>Adição de regra de negócio</td>
          <td>1.3</td>
      </tr>
  </table>

  <h3>1. Breve Descrição</h3>
  <p>Este caso de uso é utilizado pelos clientes para fazer o pré-agendamento do animal, bem como escolher os serviços prestados e meios de pagamento.</p>

  <h3>2. Atores</h3>
  <ul>
      <li>2.1 Cliente que deseja hospedar o seu animal em um hotel para pets.</li>
      <li>2.2 Funcionário que trabalha no hotel para animais e deseja aprovar agendamentos e definir serviços de forma virtual.</li>
  </ul>

  <h3>3. Condições Prévias</h3>
  <ul>
      <li>3.1 Cliente fez login.</li>
      <li>3.2 Cliente cadastrou pelo menos um animal.</li>
  </ul>

  <h3>4. Fluxo Básico (FB)</h3>
  <ol>
      <li>O cliente seleciona a opção "hospedar pet".</li>
      <li>O cliente seleciona o animal desejado.</li>
      <li>O cliente digita as datas desejadas (RN04).</li>
      <li>O sistema faz a validação da data (FE01, FE02, FE03, RN01).</li>
      <li>O sistema mostra o valor da hospedagem (RN01).</li>
      <li>O sistema solicita informações complementares do animal.</li>
      <li>O cliente confirma o pré-agendamento (RN02).</li>
      <li>O sistema verifica se o cliente deseja escolher algum serviço ou definir a forma de pagamento (FA01, FA02, FA03).</li>
  </ol>

  <h3>5. Fluxo Alternativo (FA)</h3>
  <h4>FA01 - Selecionar Serviços</h4>
  <ol>
      <li>O cliente seleciona "Serviços".</li>
      <li>O cliente escolhe quais serviços deseja.</li>
      <li>O cliente salva as informações (RN03).</li>
      <li>O sistema emite uma mensagem de sucesso.</li>
  </ol>

  <h4>FA02 - Selecionar Pagamento</h4>
  <ol>
      <li>O cliente seleciona "Pagamento".</li>
      <li>O cliente escolhe qual será o seu meio de pagamento.</li>
      <li>O sistema mostra o valor total.</li>
      <li>O cliente salva sua opção (RN03).</li>
      <li>O sistema emite uma mensagem de sucesso.</li>
  </ol>

  <h4>FA03 - Sair do Pré-Agendamento</h4>
  <p>O cliente decide finalizar o pré-agendamento, após a conclusão do fluxo básico.</p>

  <h3>6. Fluxo de Exceção (FE)</h3>
  <h4>FE01 - Data de entrada maior que a de saída</h4>
  <p>"A data de entrada deve ser maior que a de saída". O caso de uso retorna ao passo 4.3 do FB.</p>

  <h4>FE02 - Data anterior à atual</h4>
  <p>"As datas devem ser maiores que a de hoje". O caso de uso retorna ao passo 4.3 do FB.</p>

  <h4>FE03 - Data com mais de um ano à frente</h4>
  <p>"As datas não devem ser de mais de um ano". O caso de uso retorna ao passo 4.3 do FB.</p>

  <h4>FE04 - Cliente não digitou as informações necessárias</h4>
  <p>O sistema impedirá que o cliente avance para o próximo passo caso as informações estejam incompletas.</p>

  <h3>7. Regras de Negócio (RN)</h3>
  <h4>RN01 - Valor do Pré-Agendamento</h4>
  <p>O valor da hospedagem depende do peso do animal e dos dias agendados. Para que o valor seja mostrado, os campos "Pet", "Entrada" e "Saída" devem estar preenchidos.</p>

  <h4>RN02 - Validação dos Dados</h4>
  <p>Para que o sistema realize o pré-agendamento, é necessário que os passos 4.2 e 4.3 estejam preenchidos corretamente, e que o sistema valide o passo 4.4.</p>

  <h4>RN03 - Campo Preenchido</h4>
  <p>Para que o sistema confirme as informações, elas não devem ser nulas.</p>

  <h4>RN04 - Validação das Datas</h4>
  <p>As datas preenchidas devem seguir os seguintes critérios:</p>
  <ul>
      <li>Ser posteriores ou iguais ao dia atual.</li>
      <li>Ser de até um ano após o dia atual.</li>
      <li>A data de entrada não pode ser posterior à data de saída.</li>
  </ul>

  <h3>8. Pós-Condições</h3>
  <p>Pós-Condições</p>

  <h3>9. Ponto de Extensão</h3>
  <p>Ponto de Extensão</p>
</div>


<script>
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>

<style>
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>
