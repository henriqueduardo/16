# funções
PI = 3.14

def oi():
    print ("oi")

def oiAluno(nome):
    print ("Olá, {}".format(nome))

def dobrar(numero):
    return 2 * numero

def triplicar(numero):
    return 2 * numero, 3 * numero

def area_circulo():
    raio = 3
    return PI * pow(raio, 2)




oi()
oiAluno("eumemo")
print (dobrar(2))
print (triplicar(2))
print (area_circulo())

# argumentos em func // sequência
def resultado_dobroX_triploY(x, y):
    return 2 * x, 3 * y

varX = 5
varY = 7

dobroX, triploY = resultado_dobroX_triploY(varX, varY)
print("Dobro de {} = {}".format(varX, dobroX))
print("Triplo de {} = {}".format(varY, triploY))

# ordem
def imc(peso, altura, nome = "arrivederci"):
    imc = peso / pow(altura, 2)
    return "{}, seu IMC é {:.2f}".format(nome, imc)

print (imc(65, 1.75))

#
xA = float(input("Digite o valor da coordenada X do ponto A: "))
yA = float(input("Digite o valor da coordenada Y do ponto A: "))
xB = float(input("Digite o valor da coordenada X do ponto B: "))
yB = float(input("Digite o valor da coordenada Y do ponto B: "))

def calcula_distancia_ponto(xA, yA, xB, yB):
    from math import sqrt
    return sqrt (xB - xA) ** 2 + (yB - yA) ** 2

dAB = calcula_distancia_ponto(xA, yA, xB, yB)
print("A distância entre os pontos A e B é  {:.2f}".format(dAB))

# questões
def calcula_area(base, altura):
    area = (base * altura)

print(calcula_area(5, 2))
