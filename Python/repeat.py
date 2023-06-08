# Estruturas de repetição // \n1. pular linhas
# for
print ("covidado19")

suscovidado = 0
num_pac = int(input("Insira o número de pacientes: "))

for x in range (num_pac):
    tosse = int(input("Você está com tosse? \n1. sim \n2. não \nResposta.: "))
    febre = int(input("Você está com febre? \n1. sim \n2. não \nResposta.: "))
    resp = int(input("Você está com dificuldade para respirar? \n1. sim \n2. não \nResposta.: "))

    if tosse == 1 and febre == 1 and resp == 1:
        suscovidado += 1 #  ( + 1) pacientes suspeitos de terem contraído o vírus

print ("Esse é o número de suspeitos: {}".format(suscovidado))




# while
suscovidado = 0
num_pac = int(input("Insira o número de pacientes: "))

cont = 1
while cont < num_pac:
    tosse = int(input("Você está com tosse? \n1. sim \n2. não \nResposta.: "))
    febre = int(input("Você está com febre? \n1. sim \n2. não \nResposta.: "))
    resp = int(input("Você está com dificuldade para respirar? \n1. sim \n2. não \nResposta.: "))

    if tosse == 1 and febre == 1 and resp == 1:
        suscovidado += 1 
    
    cont += 1 # incrementar sempre com 1
print ("Esse é o número de suspeitos: {}".format(suscovidado))




# break
suscovidado = 0
while True:
    tosse = int(input("Você está com tosse? \n1. sim \n2. não \nResposta.: "))
    febre = int(input("Você está com febre? \n1. sim \n2. não \nResposta.: "))
    resp = int(input("Você está com dificuldade para respirar? \n1. sim \n2. não \nResposta.: "))

    if tosse == 1 and febre == 1 and resp == 1:
        suscovidado += 1 

    resp = input("Ainda há pacientes a serem atendidos? [S|N]")
    if resp.upper() == "N":
        break

print ("Esse é o número de suspeitos: {}".format(suscovidado))




#
homens_maioridade = 0
soma_idade_mulheres = 0
mulheres = 0

while True:
    sexo = input("Qual o seu sexo? [M|F]: ")
    idade = int (input("Qual sua idade?"))
    if idade < 0:
        break

    if sexo.upper() == "M":
        if idade > 18:
            homens_maioridade += 1

    elif sexo.upper() == "F":
        soma_idade_mulheres += idade
        mulheres += 1
    else:
        print("Dados incorretos.")

media = 0
if mulheres > 0:
    media = soma_idade_mulheres / mulheres
    
print("Total de homens acima de 18 anos: {}".format(homens_maioridade))
print("Total de mulheres acima de 18 anos: {}".format(soma_idade_mulheres))



# questões

# loop infinito
x = 1
while (x <= 5):
    print("Python para calouros")

# loop
soma = 0
num = 1
for x in range(5):
    soma += num
    num  += 2

#   1 + 3 + 5 + 7 + 9 = 25