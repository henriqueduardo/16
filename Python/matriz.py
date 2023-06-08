# matrizes são listas
#M = [
#   [10, 2],    # 0
#    [21, 13],   # 1
#   [7, 9]      # 2
#]
#print (M)

#
L1 = [10, 2]
L2 = [21, 13]
L3 = [7, 9]

M = [L1]
M.append(L2)
M.insert(2, L3)
print (M)

# matriz inteiros aleatorios
import random

ordem = int(input("Informe a ordem da matriz: "))
if ordem >= 2:
    while True:
        M = []
        for i in range(ordem):
            LINHA = []
            for j in range(ordem):
                num = random.randint(1, 10)
                LINHA.append(num)
            M.append(LINHA)
        break

    DP = []
    DS = []
    for i in range(ordem):
        for j in range(ordem):
            print(M[i][j], end = "")
            if i == j:
                DP.append(M[i][j])
            elif i + j == (ordem + 1):
                DS.append(M[i][j])
        print (" ")

    maior_DP = max(DP)
    menor_DS = min(DS)
    media = (maior_DP + menor_DS / 2)
    print ("Média = {}".format(media))
else:
    print ("Informe uma ordem que seja válida.")




# questões

A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
B = [[7, 8, 9], [4, 5, 6], [1, 2, 3]]
C = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for i in range(3):
    for j in range(3):
        C[i][j] = A[i][j] + B[i][j]
        print(C)

ALUNOS = [[21, "Ana", 1.7],
          [14, "Carlos", 1.82],
          [37, "Priscila", 1.63],
          [91, "Maria Eduarda", 1.68],
          [46, "Henrique", 1.57]]

print (ALUNOS[4][2])