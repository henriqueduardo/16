# alternativa para listas
contato = {"@duardokingkong": "Eduardo Henrique",
           "@kingkongduardo": "Henrique Duardo"}

print (contato["@duardokingkong"])
print (contato.get("@duardokingkong"))

contato.update({"@kingkongduardo": "Henrique Duardo19"})
contato.update({"@kingkongduardo": "Henrique Duardo199"})
print (contato)

insta = input("Digite um @: ")
if insta in contato:
    print ("Esse @ é do {}".format(contato.get(insta)))
else:
    print ("Esse @ não existe")

print ("Outro @ foi adicionado")
contato.update({"@duardokingkong2": "Eduardo Henrique2"})
print (len(contato))

# acessar dicionario
for insta in contato.keys():
    print(insta)

for nome in contato.values():
    print(nome)

for insta, nome in contato.items():
    print ("Informações do gorila {}:".format(insta, nome))

backup = contato.copy()
print (backup)

contato.pop("@duardokingkong2")
print (contato)

contato.popitem()
print (contato)

# clear




# questões
ALUNOS = { 21: ["Ana", 1.7],
           14: ["Carlos", 1.82],
           37: ["Priscilla", 1.63],
           91: ["Maria Eduarda", 1.68],
           46: ["Henrique", 1.57]
           }

#ALUNOS.pop(21)
#ALUNOS.pop(37)
#print (len(ALUNOS))

for dados in ALUNOS.values():
    print(dados)