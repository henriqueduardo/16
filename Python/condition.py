# calcular IMC
sexo = input ("Informe seu sexo [M / F]: ")
altura = float (input("Informe sua altura: "))

if sexo == "F":
    peso = (72.7 * altura) - 58
    print("O peso ideal para sua estatura é {:.2f}kgs".format(peso))
elif sexo == "M":
    peso = (62.1 * altura) - 44.7
    print("O peso ideal para sua estatura é {:.2f}kgs".format(peso))
else: 
    print ("Dados incorretos.")

# questões
x = 3
y = 9
if (y ** (1/2) == x):
   x += 1
   print (x)
else:
   x += 2
   print (x)




a = 1
b = -3
c = -10

delta = b * b - 4 * a * c
if (delta > 0):
   print("#1")
elif (delta == 0):
   print("#2")
elif (delta < 0):
   print("#3")
else:
   print("#4")