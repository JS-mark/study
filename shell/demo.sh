#!/bin/sh

# 定义变量
you="test"

# 使用变量
echo $you

# 查看实参个数
# $# 

# 流程控制语句
# if-else-fi
# if-elif-else-fi


# if [ $1 == $you ];then
#   echo $#
# else
#   echo "tttt"
# fi
# # for循环变量
# for ll in 1
# do
#   echo "$$"
#   echo "$*"
#   echo "$@"
#   echo "$0"
#   echo "$_"
#   # echo "$ll"
# done


while getopts :ab:c:d ARGS  
do  
case $ARGS in   
  a)  
    echo "发现 -a 选项"  
    ;;  
  b)  
    echo "发现 -b 选项"  
    echo "-b 选项的值是：$OPTARG"  
    ;;  
  c)  
    echo "发现 -c 选项"  
    echo "-c 选项的值是：$OPTARG"  
    ;;  
  d)  
    echo "发现 -d 参数"  
    ;;  
  *)  
    echo "未知选项：$ARGS"
    ;;
esac
done