#include <iostream>
#include "pilha.h"

using namespace std;

    pilha::pilha()
    {
        tamanho = 0;
        estrutura = new TipoItem[max_itens];
    }

    pilha::~pilha()
    {
        delete [] estrutura;
    }

    bool pilha::estaCheia()
    {
        return (tamanho == max_itens);
    }

    bool pilha::estaVazia()
    {   
        return (tamanho == 0);
    }

    void pilha::inserir(TipoItem item)
    {
        if (estaCheia()){
            cout << "A pilha está cheia.\n";
            cout << "Não e possível inserir esse elemento!\n";
        }
        else{
            estrutura[tamanho] = item;
            tamanho++;
        }
    }

    TipoItem pilha::remover()
    {
        if (estaVazia()){
            cout << "A pilha está vazia\n";
            cout << "Não existe um elemento para ser removido.\n";
            return 0;
        } 
        else{
            tamanho--;
            return estrutura[tamanho];
        }
    }

    void pilha::imprimir()
    {
        cout << "Pilha: [ ";
        for (int i=0 ; i<tamanho ; i++){
            cout << estrutura[i] << " ";
        }
        cout << "]\n";
    }

    int pilha::qualTamanho()
    {
        return tamanho;
    }
