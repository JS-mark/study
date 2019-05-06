# 体重指数(BMI)=体重(kg)÷身高^2(m)
bmi = 180.5 / (1.75 * 2)
print(bmi)
if bmi < 18.5:
    print('过轻')
elif bmi >= 18.5 and bmi < 25:
    print('正常')
elif bmi >= 25 and bmi < 28:
    print('过重')
elif bmi >= 28 and bmi < 32:
    print('肥胖')
elif bmi >= 32:
    print('严重肥胖')
