# Debugging e Error Handling

Ecmascript Error - Erro que ocorre em tempo de execução.

Composto por: 

- Mensagem
- Nome
- Linha
- Call Stack

Ex: Uncaught...*

---

DOMException = Exceção = Erro do DOM

DOM = Document Object Model

São erros referentes à estrutura da sua árvore de elementos dentro de uma página da web.


---

Throw - Retorna um Erro no console, na mensagem

![image](https://user-images.githubusercontent.com/51412784/147777647-88a7eb66-e821-4362-888f-981f872bf09e.png)

Return - Retorna uma String

![image](https://user-images.githubusercontent.com/51412784/147777578-9b5aafb9-86bc-40dd-922b-e40f20dad58f.png)

---

Try/catch e Finally

com console.log() <br />
![image](https://user-images.githubusercontent.com/51412784/147777740-56208e3a-776d-4312-81ad-b1559a44b280.png)

com o throw <br />
![image](https://user-images.githubusercontent.com/51412784/147777811-76805c5a-3c6c-49fb-a946-ce00081184a3.png)

com o finally <br />
![image](https://user-images.githubusercontent.com/51412784/147778112-bcd66b7d-bebf-4a55-a508-1a6f4b0b72ba.png)

Finally - Uma instrução que vai ser chamada independente se tiver erro ou não. É executado depois do try/catch.

---

Manipular o objeto Error <br />
![image](https://user-images.githubusercontent.com/51412784/147782257-66defb92-1a5f-4362-9277-99d152477484.png)


Message é padrão.
fileName e lineNumber são opcionais.


O erro pode ter um nome <br />
![image](https://user-images.githubusercontent.com/51412784/147782344-812efd0b-2d29-44a7-94cc-5e72419757c4.png)

![image](https://user-images.githubusercontent.com/51412784/147782404-be8d149b-0ba0-4f58-acb9-6d53ee778219.png)

