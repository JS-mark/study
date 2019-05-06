# 单行注释

print("demo\ntest\n'c测试''")
d = '3333333333'
print('' + '222' + d)

a = 0
b = 3
# if else 语句
if a <= b:
    print('我擦了')
else:
    print('碉堡了')
print('''line1
... line2
... line3''')

PI = 3.1415926
print(PI)
# 不保留小数位除法
print(10 // 2)
# 保留小数位除法
print(10 / 2)
# python 没有整数限制 -无穷 ———— +无穷
print('包含中文的str')
print(ord("A"), ord('😀'))
print(chr(65))
print(chr(128512))
print('😀')
print(chr(0x1f600))
for i in range(0x1f600, 0x1f650):
    print(chr(i), end=" ")
    if i % 16 == 15:
        print()

print('00000000 %d' % 11111111)

lists = ['1', '2', '3', '4']

print(lists)
print(len(lists))

# 插入到list（有序列表数据）数据末尾
lists.append('Adam')
print(lists)
# 插入数组指定位置
lists.insert(1, 'Jack')
print(lists)

# pop() 删除list末尾元素
lists.pop()
print(lists)

# pop(i) 删除list指定索引元素
lists.pop(2)
print(lists)

# tuple（有序列表数据）,tuple 一旦初始化就不能修改
# 表面上看，tuple的元素确实变了，但其实变的不是tuple的元素，而是list的元素。tuple一开始指向的list并没有改成别的list，所以，tuple所谓的“不变”是说，tuple的每个元素，指向永远不变。即指向'a'，就不能改成指向'b'，指向一个list，就不能改成指向其他对象，但指向的这个list本身是可变的
tuples = ('1', '2', '3')
print(tuples)

print([], ())

# if else and if elif else
a = 'llll'
if len(a) <= 2:
    print('🙍🙎🙏')
elif len(a) == 3:
    print('🙍🙎')
else:
    print("🙏")
x = 'void'
# 只要x是非零数值、非空字符串、非空list等，就判断为True，否则为False。
if x:
    print('True')

birth = input('请输入:')
if birth == 'ii':
    print('i love you!')
else:
    print('ooo')

# int 强制转换为int类型
num = int(input('请输入:'))
if num == 2000:
    print('i love you!')
else:
    print('ooo')
