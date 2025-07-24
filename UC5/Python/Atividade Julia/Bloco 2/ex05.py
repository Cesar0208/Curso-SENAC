notas = []

for i in range(1,4):
    notas.append(float(input(f'Digite a {i}° nota: ')))

media = sum(notas) / len(notas)

print(f'A média das notas foram {media}')