names = ['andy', 'jun', 'mark']
for i in names:
    print(i)

# for循环加
sum = 0
for x in [0, 1, 2, 3, 4, 5]:
    sum = sum + x
print(sum)

# 循环加
# range生成一个小于7的数组[0,1,2,3,4,5,6]
sum1 = 0
for x in range(7):
    sum1 = sum1 + x
print(sum1)

# while循环
# 循环去减，当n小于0跳出循环并打印sum值
sum = 0
n = 99
while n > 0:
    sum = sum + n
    n = n - 2
print(sum)

# 跳出循环

n = 1
while n <= 100:
    if n > 10:  # 当n = 11时，条件满足，执行break语句
        break  # break语句会结束当前循环
    print(n)
    n = n + 1
# 顺序执行
print('END')

# 继续执行，但是是直接进行下一轮循环，不执行本次符合条件的循环
n = 0
while n < 10:
    n = n + 1
    if n % 2 == 0:  # 如果n是偶数，执行continue语句
        continue  # continue语句会直接继续下一轮循环，后续的print()语句不会执行
    print(n)

# dict其他语言称为map，dict是用空间来换取时间的一种方法，也叫哈希map
# 和list比较，dict有以下几个特点：

# 查找和插入的速度极快，不会随着key的增加而变慢；
# 需要占用大量的内存，内存浪费多。
# 而list相反：

# 查找和插入的时间随着元素的增加而增加；
# 占用空间小，浪费内存很少。

hashMap = {'a': '1', 'b': '2', 'c': '3'}

print(hashMap)
print(hashMap['c'])
#  判断可以是否在hashMap中
print('d' in hashMap)
# print(hashMap['d'])
# 会报错因为找不到key
# 判断是否存在
print(hashMap.get('Thomas'))
# 不存在，返回值自己定义
print(hashMap.get('Thomas', '181222'))
# 删除指定key
hashMap.pop('b')
print(hashMap)