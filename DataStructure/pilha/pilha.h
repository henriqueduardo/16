// 
typedef int TipoItem;
const int max_itens = 100;

class pilha {
    private:
    int tamanho;
    TipoItem * estrutura;

    public:
    pilha();    // construtora
    ~pilha();   //destrutora
    bool estaCheia(); // verificar isfull
    bool estaVazia(); // verifica isempty
    void inserir(TipoItem item); // push
    TipoItem remover(); // pop
    void imprimir(); // print
    int qualTamanho(); // lenght
};