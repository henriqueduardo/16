# listas
notas = []

# index = 0, 1, 2, 3 // elem = 1, 2, 3, 4
notas = [8.1, 7.2, 6.3, 5]
# acessar elemento
print(notas[1])
# alterar elemento 
notas[2] = 7.6
print(notas)

# modificar
for bim in range(4):
    print(notas[bim])

# adicionar elementos --- append
gorilas = []
gorilas.append("Gorila 0")
gorilas.append("Gorila 1")
gorilas.append("Gorila 2")
# insert
gorilas.insert(1, "Gorila19")
for numGorilas in range(4):
    print(gorilas[numGorilas])

# adicionar elementos em temp de exec
while True:
    nome = input("Digite o nome do gorila: ")
    gorilas.append(nome)

    resp = input("Deseja continuar? [S|N]")
    if resp.upper() == "N":
        break

# percorrer a lista e imprimir 
for nome in gorilas:
    print (nome)

# remover elementos
macacos = ["Macaco 1"]
macacos.append("Macaco 2")
macacos.append("Macaco 3")
macacos.insert(4, "Macaco 2")

# remove o ultimo
macacos.pop()
print (macacos)

# remove todos
#macacos.clear()
#print (macacos)

# remove o primeiro parametro encontrado
macacos.remove("Macaco 2")
print (macacos)

# localizar indice
gorilasNOME = ["Gorila 1", "Gorila 2", "Gorila 3", "Gorila 4",]
gorilasALT = [1.6, 1.4, 1.3, 1.5]

maior_gorila = gorilasALT.index(max(gorilasALT))
menor_gorila = gorilasALT.index(min(gorilasALT))

print ("O maior gorila é o: {}".format(maior_gorila))
print ("O menor gorila é o: {}".format(menor_gorila))


# questões
cidade = ["natal", "salvador", "sao paulo", "porto alegre"]
cidade [1] = "recife"
print(cidade)

NOTAS = []
NOTAS.append(50)
NOTAS.append(70)
NOTAS.append(30)

media = sum(NOTAS) / len(NOTAS)
print(media)